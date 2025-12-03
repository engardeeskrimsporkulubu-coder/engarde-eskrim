# Vercel Scope Switcher Script
# Kullanım: .\switch-vercel-scope.ps1 engarde  veya  .\switch-vercel-scope.ps1 ozcankutlu

param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("engarde", "ozcankutlu")]
    [string]$Project
)

$currentDir = Get-Location

if ($Project -eq "engarde") {
    Write-Host "Engarde Eskrim projesine geçiliyor..." -ForegroundColor Green
    # Engarde Eskrim için scope ayarı
    # Not: Team erişimi gerekli
    Write-Host "Not: 'EngardeEskrim's projects' team'ine erişim gerekli" -ForegroundColor Yellow
    Write-Host "Vercel Dashboard'dan team ID'sini kontrol edin" -ForegroundColor Yellow
} else {
    Write-Host "OzcanKutlu projesine geçiliyor..." -ForegroundColor Green
    Remove-Item .vercel -Recurse -Force -ErrorAction SilentlyContinue
    vercel link --scope ozcan-kutlus-projects --yes
    Write-Host "OzcanKutlu scope'u ayarlandı" -ForegroundColor Green
}

Write-Host "`nMevcut scope:" -ForegroundColor Cyan
vercel project ls

