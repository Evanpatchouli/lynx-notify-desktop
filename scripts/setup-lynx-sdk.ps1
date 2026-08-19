param(
  [Parameter(Mandatory = $true)]
  [string]$ZipPath
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$target = Join-Path $repo 'native\thirdparty\lynx'
$temp = Join-Path $env:TEMP ("lynx-sdk-" + [guid]::NewGuid().ToString('N'))

if (-not (Test-Path $ZipPath)) {
  throw "SDK zip not found: $ZipPath"
}

New-Item -ItemType Directory -Force -Path $temp | Out-Null
try {
  Expand-Archive -Path $ZipPath -DestinationPath $temp -Force
  $importLib = Get-ChildItem -Path $temp -Recurse -Filter 'lynx.dll.lib' | Select-Object -First 1
  if (-not $importLib) {
    throw 'lynx.dll.lib was not found inside the archive.'
  }

  $sdkRoot = Split-Path -Parent (Split-Path -Parent $importLib.FullName)
  if (-not (Test-Path (Join-Path $sdkRoot 'include'))) {
    throw "Could not determine LynxSDK root from $($importLib.FullName)"
  }

  Remove-Item -Path $target -Recurse -Force -ErrorAction SilentlyContinue
  New-Item -ItemType Directory -Force -Path $target | Out-Null
  Copy-Item -Path (Join-Path $sdkRoot '*') -Destination $target -Recurse -Force
  Write-Host "LynxSDK installed to $target" -ForegroundColor Green
} finally {
  Remove-Item -Path $temp -Recurse -Force -ErrorAction SilentlyContinue
}
