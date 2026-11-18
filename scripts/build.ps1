#requires -Version 7.3
param(
  [ValidateSet('Debug', 'Release')]
  [string]$Configuration = 'Release',
  [switch]$SkipNpmInstall,
  [switch]$WithTests,
  [switch]$CleanBuild,
  [string]$BuildDirectory,
  [string]$OutputDirectory
)

$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true
$repo = Split-Path -Parent $PSScriptRoot
if (!$BuildDirectory) { $BuildDirectory = Join-Path $repo 'native/build' }
if (!$OutputDirectory) { $OutputDirectory = Join-Path $repo 'output' }
$native = Join-Path $repo 'native'
if (!(Test-Path -LiteralPath (Join-Path $native 'thirdparty/lynx/lib/lynx.dll.lib'))) {
  throw 'Missing LynxSDK 4.0. Install it with scripts/setup-lynx-sdk.ps1 first.'
}

Push-Location (Join-Path $repo 'frontend')
try {
  if (!$SkipNpmInstall) { npm ci --include=dev --no-audit --no-fund }
  if ($WithTests) {
    npm run typecheck
    npm test
  }
  npm run build
} finally {
  Pop-Location
}

$testOption = $WithTests ? 'ON' : 'OFF'
cmake -S $native -B $BuildDirectory -A x64 "-DLYNX_NOTIFY_OUTPUT_DIR:PATH=$OutputDirectory" "-DLYNX_NOTIFY_BUILD_TESTS=$testOption"
$buildOptions = @()
if ($CleanBuild) { $buildOptions += '--clean-first' }
cmake --build $BuildDirectory --config $Configuration --parallel @buildOptions
if ($WithTests) { ctest --test-dir $BuildDirectory -C $Configuration --output-on-failure --no-tests=error }
Write-Host "Built: $(Join-Path $OutputDirectory "$Configuration/LynxNotify.exe")"
