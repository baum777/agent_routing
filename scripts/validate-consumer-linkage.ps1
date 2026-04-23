param()

$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = Split-Path -Parent $scriptDir
$manifestPath = Join-Path $repoRoot '.codex\shared-core-consumer.json'

if (-not (Test-Path -LiteralPath $manifestPath)) {
  throw "Missing consumer manifest: $manifestPath"
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json

if (-not $manifest.sharedCoreSource) {
  throw 'Consumer manifest is missing sharedCoreSource.'
}

$sharedCoreRoot = $manifest.sharedCoreSource
if (-not [System.IO.Path]::IsPathRooted($sharedCoreRoot)) {
  $sharedCoreRoot = [System.IO.Path]::GetFullPath((Join-Path $repoRoot $sharedCoreRoot))
}

$validatorPath = Join-Path $sharedCoreRoot 'scripts\tools\validate-consumer-linkage.mjs'
if (-not (Test-Path -LiteralPath $validatorPath)) {
  throw "Missing validator: $validatorPath"
}

$nodeCommand = (Get-Command node -ErrorAction Stop).Source

Push-Location $sharedCoreRoot
try {
  & $nodeCommand $validatorPath '--consumer' $repoRoot
  exit $LASTEXITCODE
} finally {
  Pop-Location
}
