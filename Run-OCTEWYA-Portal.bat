@echo off
title OCTEWYA Cinematography Portal
echo Starting OCTEWYA Client & Production Portal...
cd /d "%~dp0"
start "" "http://localhost:3000/admin.html"

where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    node server.js
    pause
    exit /b
)

if exist "%APPDATA%\Antigravity\bin\agy-node.cmd" (
    call "%APPDATA%\Antigravity\bin\agy-node.cmd" server.js
    pause
    exit /b
)

echo [ERROR] Node.js or Antigravity runtime not found!
echo Opening admin.html directly in browser...
start "" "admin.html"
pause
