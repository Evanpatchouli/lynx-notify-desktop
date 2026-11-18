#requires -Version 7.3
param([string]$MakeNsisPath = $env:MAKENSIS)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true
$repo = (Resolve-Path (Split-Path -Parent $PSScriptRoot)).Path
$manifest = Get-Content -Raw -LiteralPath (Join-Path $repo 'frontend/package.json') | ConvertFrom-Json
$lock = Get-Content -Raw -LiteralPath (Join-Path $repo 'frontend/package-lock.json') | ConvertFrom-Json -AsHashtable
$version = $manifest.version
if ($version -notmatch '^(0|[1-9][0-9]{0,4})\.(0|[1-9][0-9]{0,4})\.(0|[1-9][0-9]{0,4})$' -or
    ($version.Split('.') | Where-Object { [int]$_ -gt 65535 }) -or
    $version -ne $lock.version -or $version -ne $lock.packages[''].version) {
  throw 'Expected matching stable major.minor.patch versions in the frontend manifest and lockfile.'
}
$null = [datetime]::ParseExact($manifest.releaseDate, 'yyyy-MM-dd', [cultureinfo]::InvariantCulture)
if (!(Test-Path -LiteralPath (Join-Path $repo "docs/releases/v$version.md") -PathType Leaf)) { throw "Missing release notes for v$version." }
if (!$MakeNsisPath) { $MakeNsisPath = (Get-Command makensis.exe -ErrorAction SilentlyContinue).Source }
if (!$MakeNsisPath) { $MakeNsisPath = Join-Path ${env:ProgramFiles(x86)} 'NSIS/makensis.exe' }
if (!(Test-Path -LiteralPath $MakeNsisPath -PathType Leaf)) { throw 'Install NSIS 3 or set MAKENSIS to the full path of makensis.exe.' }
$MakeNsisPath = (Resolve-Path -LiteralPath $MakeNsisPath).Path

$work = Join-Path $repo 'out/production'
$build = Join-Path $work 'build'
$stage = Join-Path $work ("stage-" + [guid]::NewGuid().ToString('N').Substring(0, 8))
$drop = Join-Path $stage 'artifacts'
$payload = Join-Path $drop 'win-unpacked'
$releaseRoot = Join-Path $repo 'release'
$final = Join-Path $releaseRoot $version
foreach ($dir in @((Join-Path $repo 'out'), $work, $releaseRoot, $final)) {
  if ((Test-Path -LiteralPath $dir) -and ((Get-Item -LiteralPath $dir).Attributes -band [IO.FileAttributes]::ReparsePoint)) {
    throw "Refusing a linked build or release directory: $dir"
  }
}
$null = [IO.Directory]::CreateDirectory($payload)
$null = [IO.Directory]::CreateDirectory($releaseRoot)
& (Join-Path $PSScriptRoot 'build.ps1') -Configuration Release -WithTests -CleanBuild -BuildDirectory $build -OutputDirectory (Join-Path $work 'bin')
cmake --install $build --config Release --prefix $payload
foreach ($file in 'LynxNotify.exe','lynx.dll','lynx_core.js','data/icudtl.dat','bundles/panel.lynx.bundle','bundles/overlay.lynx.bundle') {
  if (!(Test-Path -LiteralPath (Join-Path $payload $file) -PathType Leaf)) { throw "Missing runtime file: $file" }
}
if ([Diagnostics.FileVersionInfo]::GetVersionInfo((Join-Path $payload 'LynxNotify.exe')).ProductVersion -ne $version) {
  throw 'The compiled app does not match the release version.'
}

$uninstall = Join-Path $stage 'uninstall-files.nsh'
$uninstallCommands = foreach ($entry in (Get-ChildItem -LiteralPath $payload -Recurse | Sort-Object FullName -Descending)) {
  $relative = [IO.Path]::GetRelativePath($payload, $entry.FullName)
  if ($relative -notmatch '^[a-zA-Z0-9._\\ -]+$') { throw "Unsupported payload path: $relative" }
  ('{0} "$INSTDIR\{1}"' -f ($entry.PSIsContainer ? 'RMDir' : 'Delete'), $relative)
}
$uninstallCommands | Set-Content -LiteralPath $uninstall -Encoding utf8NoBOM
$setup = Join-Path $drop "LynxNotify.Setup.$version.exe"
$zip = Join-Path $drop "LynxNotify-$version.zip"
$icon = Join-Path $repo 'native/resources/LynxNotify.ico'
& $MakeNsisPath /V2 /INPUTCHARSET UTF8 "/DVERSION=$version" "/DSETUP_FILE=$setup" "/DPAYLOAD=$payload" "/DUNINSTALL_FILES=$uninstall" "/DAPP_ICON=$icon" (Join-Path $PSScriptRoot 'installer.nsi')
if ([Diagnostics.FileVersionInfo]::GetVersionInfo($setup).ProductVersion -ne $version) { throw 'Installer version mismatch.' }
[IO.Compression.ZipFile]::CreateFromDirectory($payload, $zip)
$checksums = foreach ($file in $setup, $zip) {
  '{0}  {1}' -f (Get-FileHash -LiteralPath $file -Algorithm SHA256).Hash.ToLowerInvariant(), [IO.Path]::GetFileName($file)
}
$checksums | Set-Content -LiteralPath (Join-Path $drop 'SHA256SUMS.txt') -Encoding utf8NoBOM

if ([IO.Path]::GetDirectoryName([IO.Path]::GetFullPath($final)) -ne $releaseRoot -or
    [IO.Path]::GetDirectoryName((Resolve-Path -LiteralPath $drop).Path) -ne $stage) { throw 'Unexpected release path.' }
$previous = Join-Path $stage 'previous'
if (Test-Path -LiteralPath $final) { [IO.Directory]::Move($final, $previous) }
try { [IO.Directory]::Move($drop, $final) }
catch {
  if ((Test-Path -LiteralPath $previous) -and !(Test-Path -LiteralPath $final)) { [IO.Directory]::Move($previous, $final) }
  throw
}
Write-Host "Release v$version ready: $final"
$checksums | Write-Host
Write-Host "Publish the setup, ZIP and SHA256SUMS.txt with tag v$version (see docs/release.md)."
