# Progress: Engarde Eskrim

## Tamamlanan

### Tasarım taşıma (23 Ağustos 2026)
- EngardeWeb2 kaynakları (app, components, styles, public, config) EngardeEskrim'e kopyalandı
- Eski Next.js 14 / Tailwind 3 stack kaldırıldı
- Google verification, OG görselleri, manifest korundu
- `NeonSmokeBackground.tsx` TypeScript tipleri düzeltildi
- Production build başarılı

### Önceki özellikler (hâlâ geçerli)
- Domain: engardeeskrim.com
- GitHub + Vercel otomatik deploy
- SEO metadata, sitemap, robots

## Yapılacaklar
- [x] Dil düzeltmesini commit + push ile canlıya alma
- [x] GSC www mülküne geçiş (apex mülkü kaldırıldı)
- [x] Vercel env yok; kod fallback www
- [x] www URL değişikliğini deploy et
- [x] GSC www mülküne sitemap gönder
- [x] Şehir SEO landing’leri (Ankara/Kayseri/Samsun/Düzce/Sivas) — çocuk eskrim’e dokunulmadı
- [ ] Canlıya push + GSC’de yeni URL / sitemap yenile
- [ ] Canlıda TR/EN ve sosyal link doğrulama
- [ ] İletişim bilgilerini kontrol
- [ ] Analytics (isteğe bağlı)

## Bilinen durum
- `/cocuk-eskrim` bilinçli olarak donduruldu (sıralama koruması)
- Yeni şehir sayfaları build’de static ○
- “eskrim kulübü” hedefi: `/eskrim-kulubu`
