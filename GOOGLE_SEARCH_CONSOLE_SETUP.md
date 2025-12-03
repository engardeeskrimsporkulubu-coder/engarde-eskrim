# Google Search Console Kurulum Rehberi

## Adımlar

### 1. Google Search Console'a Giriş
1. https://search.google.com/search-console adresine gidin
2. Google hesabınızla giriş yapın
3. "Özellik Ekle" butonuna tıklayın

### 2. Site Ekleme
1. "URL öneki" seçeneğini seçin
2. Site URL'ini girin: `https://engardeeskrim.com`
3. "Devam" butonuna tıklayın

### 3. Site Doğrulama
1. "HTML etiketi" doğrulama yöntemini seçin
2. Meta etiket içindeki `content` değerini kopyalayın (örnek: `abc123xyz...`)
3. Bu kodu bana verin, ben `app/layout.tsx` dosyasına ekleyeceğim

**Alternatif Doğrulama Yöntemleri:**
- **HTML dosyası**: Google'ın verdiği HTML dosyasını `public/` klasörüne yükleyin
- **DNS kaydı**: Vercel/domain ayarlarından TXT kaydı ekleyin

### 4. Sitemap Gönderme
1. Doğrulama tamamlandıktan sonra, sol menüden "Sitemap'ler" seçeneğine gidin
2. "Yeni sitemap ekle" butonuna tıklayın
3. Şu URL'yi girin: `https://engardeeskrim.com/sitemap.xml`
4. "Gönder" butonuna tıklayın

### 5. URL İnceleme (İsteğe Bağlı)
1. Sol menüden "URL İnceleme" seçeneğine gidin
2. Ana sayfa URL'ini girin: `https://engardeeskrim.com`
3. "İndeksleme iste" butonuna tıklayın

## Önemli Notlar

- Doğrulama işlemi 24-48 saat sürebilir
- Sitemap otomatik olarak oluşturuluyor: `https://engardeeskrim.com/sitemap.xml`
- robots.txt dosyası zaten sitemap'i işaret ediyor
- Site zaten SEO için optimize edilmiş durumda

## Mevcut SEO Ayarları

✅ Meta tags (title, description, keywords)
✅ Open Graph tags
✅ Twitter Card tags
✅ Structured Data (JSON-LD)
✅ Sitemap.xml
✅ robots.txt
✅ Canonical URLs
✅ Mobile-friendly design

## Doğrulama Kodu Ekleme

Doğrulama kodunu aldıktan sonra, şu komutu çalıştırın:
```
Doğrulama kodunuzu paylaşın, ben layout.tsx'e ekleyeceğim
```

Veya manuel olarak `app/layout.tsx` dosyasında şu satırı güncelleyin:
```typescript
verification: {
  google: "BURAYA-DOĞRULAMA-KODUNUZ",
},
```

