param(
  [ValidateSet('Debug', 'Release')]
  [string]$Configuration = 'Release',
  [switch]$SkipNpmInstall
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$frontend = Join-Path $repo 'frontend'
$native = Join-Path $repo 'native'
$build = Join-Path $native 'build'
$sdk = Join-Path $native 'thirdparty\lynx'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Node.js 18+ is required.' }
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { throw 'npm is required.' }
if (-not (Get-Command cmake -ErrorAction SilentlyContinue)) { throw 'CMake is required.' }
if (-not (Test-Path (Join-Path $sdk 'lib\lynx.dll.lib'))) {
  throw 'LynxSDK is missing. Download the official Windows LynxSDK 4.0 zip, then run .\scripts\setup-lynx-sdk.ps1 -ZipPath <zip>.'
}

Push-Location $frontend
try {
  if (-not $SkipNpmInstall) {
    npm install
    if ($LASTEXITCODE -ne 0) { throw "npm install failed with exit code $LASTEXITCODE." }
  }
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "npm run build failed with exit code $LASTEXITCODE." }
} finally {
  Pop-Location
}

cmake -S $native -B $build -A x64
if ($LASTEXITCODE -ne 0) { throw "CMake configure failed with exit code $LASTEXITCODE." }
cmake --build $build --config $Configuration --parallel
if ($LASTEXITCODE -ne 0) { throw "CMake build failed with exit code $LASTEXITCODE." }

$exe = Join-Path $build "$Configuration\LynxNotify.exe"
Write-Host "`nBuild complete: $exe" -ForegroundColor Green
