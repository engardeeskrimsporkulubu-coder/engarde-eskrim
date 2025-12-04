const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imagesToOptimize = [
  {
    input: 'EngardeEskrim.png',
    output: 'EngardeEskrim-optimized.webp',
    width: 1200,
    height: 630,
    quality: 85,
  },
  {
    input: 'EngardeEskrim.png',
    output: 'EngardeEskrim-optimized.jpg',
    width: 1200,
    height: 630,
    quality: 85,
  },
  {
    input: 'Fencing3-transformed.png',
    output: 'Fencing3-transformed-optimized.webp',
    width: 1920,
    quality: 80,
  },
  {
    input: 'Engarde Logo.jpeg',
    output: 'Engarde-Logo-optimized.webp',
    width: 512,
    quality: 90,
  },
];

async function optimizeImage(config) {
  const inputPath = path.join(publicDir, config.input);
  const outputPath = path.join(publicDir, config.output);

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${config.input} bulunamadı, atlanıyor...`);
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    let pipeline = image;

    // Resize if dimensions provided
    if (config.width || config.height) {
      pipeline = pipeline.resize(config.width, config.height, {
        fit: 'contain',
        withoutEnlargement: true,
      });
    }

    // Convert to WebP or JPEG based on output extension
    if (config.output.endsWith('.webp')) {
      await pipeline.webp({ quality: config.quality || 85 }).toFile(outputPath);
    } else if (config.output.endsWith('.jpg') || config.output.endsWith('.jpeg')) {
      await pipeline.jpeg({ quality: config.quality || 85, mozjpeg: true }).toFile(outputPath);
    }

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(`✅ ${config.input} → ${config.output}`);
    console.log(`   Boyut: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(optimizedSize / 1024 / 1024).toFixed(2)}MB (${reduction}% azalma)`);
  } catch (error) {
    console.error(`❌ ${config.input} optimize edilirken hata:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Resim optimizasyonu başlatılıyor...\n');

  for (const config of imagesToOptimize) {
    await optimizeImage(config);
  }

  console.log('\n✨ Optimizasyon tamamlandı!');
  console.log('\n📝 Sonraki adımlar:');
  console.log('1. Optimize edilmiş resimleri kontrol edin');
  console.log('2. layout.tsx ve manifest.ts dosyalarını güncelleyin');
  console.log('3. Eski büyük resimleri silin veya yedekleyin');
}

main().catch(console.error);

