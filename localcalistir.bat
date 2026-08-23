@echo off
setlocal

cd /d "%~dp0"
set "PORT=3001"

netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul
if not errorlevel 1 (
	echo Next.js zaten calisiyor: http://localhost:%PORT%
	start "" "http://localhost:%PORT%"
	exit /b 0
)

echo Next.js dev server baslatiliyor (port %PORT%)...
start "EngardeWeb Dev Server" cmd /k "cd /d \"%~dp0\" & npm run dev -- --port %PORT%"

echo Sunucu hazir olana kadar bekleniyor...
:wait
powershell -NoProfile -Command "try { $r=Invoke-WebRequest -Uri 'http://localhost:%PORT%' -UseBasicParsing -TimeoutSec 1; exit 0 } catch { exit 1 }"
if errorlevel 1 (
	timeout /t 1 /nobreak >nul
	goto wait
)

start "" "http://localhost:%PORT%"
echo Acildi: http://localhost:%PORT%
exit /b 0
