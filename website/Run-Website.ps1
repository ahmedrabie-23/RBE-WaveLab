param(
 [ValidateSet('Install','Dev','Check','Test','Build','Validate','Audit','ReleaseFixtures','BrowserTest','Preview')][string]$Action='Dev',
 [string]$NodePath=''
)
$ErrorActionPreference='Stop'
Set-Location -LiteralPath $PSScriptRoot
if(-not $NodePath){
 $taskBundled=Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
 $NodePath=if(Test-Path -LiteralPath $taskBundled){$taskBundled}else{(Get-Command node.exe).Source}
}
$taskVersion=[version]((& $NodePath --version).TrimStart('v'))
if($taskVersion -lt [version]'22.23.4'){throw "Node$taskVersion is too old. Use a maintained Node>=22.23.4."}
$taskNpmCommand=(Get-Command npm.cmd -ErrorAction Stop).Source
$taskNpmCLI=Join-Path (Split-Path $taskNpmCommand) 'node_modules\npm\bin\npm-cli.js'
if(-not(Test-Path -LiteralPath $taskNpmCLI)){throw 'npm CLI not found beside npm.cmd. Use a normal official Node/npm installation.'}
$taskOldPath=$env:PATH;$taskOldTelemetry=$env:ASTRO_TELEMETRY_DISABLED;$taskOldSkip=$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD
try{
 $env:PATH=(Split-Path $NodePath)+';'+$taskOldPath
 $env:ASTRO_TELEMETRY_DISABLED='1';$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD='1'
 $taskScript=@{Dev='dev';Check='check';Test='test';Build='build';Validate='validate';Audit='audit:delivery';ReleaseFixtures='test:release-builds';BrowserTest='test:browser';Preview='preview'}
 Write-Host "Local-only $Action using Node$taskVersion. No publication."
 if($Action -eq 'Install'){& $NodePath $taskNpmCLI ci --cache .local/npm-cache --no-fund}else{& $NodePath $taskNpmCLI run $taskScript[$Action]}
 if($LASTEXITCODE -ne 0){throw "Website command failed with exit$LASTEXITCODE"}
}finally{$env:PATH=$taskOldPath;$env:ASTRO_TELEMETRY_DISABLED=$taskOldTelemetry;$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=$taskOldSkip}
