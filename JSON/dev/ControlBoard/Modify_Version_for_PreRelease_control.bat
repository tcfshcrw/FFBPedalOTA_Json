@echo off
setlocal enabledelayedexpansion

rem Define the input file path
set inputFile=Version_esp32.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[2] = [int]$versionParts[2] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_esp32S3.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[2] = [int]$versionParts[2] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_Gilphilbert_1_2.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[2] = [int]$versionParts[2] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_Gilphilbert_2_0.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[2] = [int]$versionParts[2] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

rem Define the input file path
set inputFile=Version_Speedcrafter.json

rem Read the JSON file and store the content in a variable
for /f "tokens=* usebackq" %%a in (`type %inputFile%`) do (
    set jsonContent=%%a
)

rem Use PowerShell to modify the JSON content
powershell -command ^
    "($json = Get-Content -Raw -Path '%inputFile%' | ConvertFrom-Json);" ^
    "$versionParts = $json.Configurations[0].Version -split '\.';" ^
    "$versionParts[2] = [int]$versionParts[2] + 1;" ^
    "$json.Configurations[0].Version = \"$($versionParts[0]).$($versionParts[1]).$($versionParts[2])\";" ^
    "$json | ConvertTo-Json -Compress | Set-Content -Path '%inputFile%'"

echo JSON content has been modified and saved back to %inputFile%

pause