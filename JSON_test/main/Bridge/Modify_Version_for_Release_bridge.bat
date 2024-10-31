@echo off
setlocal enabledelayedexpansion

rem Define the input file path
set inputFile=Version_devkit.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[1] = [int]$versionParts[1] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_Fanatec_bridge.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[1] = [int]$versionParts[1] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_Gilphilbert_dongle.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[1] = [int]$versionParts[1] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

pause