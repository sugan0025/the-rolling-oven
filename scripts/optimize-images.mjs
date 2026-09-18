import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');

async function getFiles(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const res = path.resolve(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getFiles(res)));
    } else {
      files.push(res);
    }
  }
  return files;
}

async function run() {
  console.log('🔍 Scanning images in:', IMAGES_DIR);
  const allFiles = await getFiles(IMAGES_DIR);
  const targetImages = allFiles.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return ext === '.png' || ext === '.jpg' || ext === '.jpeg';
  });

  console.log(`Found ${targetImages.length} images to optimize.\n`);

  let totalOriginalSize = 0;
  let totalWebpSize = 0;
  let count = 0;

  for (const file of targetImages) {
    const ext = path.extname(file);
    const webpPath = file.slice(0, -ext.length) + '.webp';
    const originalStat = await fs.promises.stat(file);
    totalOriginalSize += originalStat.size;

    await sharp(file)
      .webp({ quality: 82, effort: 6 })
      .toFile(webpPath);

    const webpStat = await fs.promises.stat(webpPath);
    totalWebpSize += webpStat.size;
    count++;

    const savings = ((1 - webpStat.size / originalStat.size) * 100).toFixed(1);
    const relOrig = path.relative('public', file).replace(/\\/g, '/');
    const relWebp = path.relative('public', webpPath).replace(/\\/g, '/');
    console.log(
      `[${count}/${targetImages.length}] ${relOrig} (${(originalStat.size / 1024).toFixed(0)} KB) -> ${relWebp} (${(webpStat.size / 1024).toFixed(0)} KB) [${savings}% saved]`
    );
  }

  console.log('\n================ SUMMARY ================');
  console.log(`Total original size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total WebP size:     ${(totalWebpSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(
    `Total bandwidth saved: ${((totalOriginalSize - totalWebpSize) / (1024 * 1024)).toFixed(2)} MB (${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)}% reduction)`
  );
  console.log('=========================================\n');
}

run().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
