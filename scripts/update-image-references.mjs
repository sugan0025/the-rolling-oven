import fs from 'node:fs';

function updateFile(filePath, regex, replacement) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(regex, replacement);
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✅ Updated image references in: ${filePath}`);
  } else {
    console.log(`ℹ️ No changes needed in: ${filePath}`);
  }
}

// 1. Update src/lib/products.ts
updateFile(
  'src/lib/products.ts',
  /(\/images\/products\/[^'"]+)\.png/g,
  '$1.webp'
);

// 2. Update public/main.js
updateFile(
  'public/main.js',
  /(\/images\/products\/[^'"]+)\.png/g,
  '$1.webp'
);

// 3. Update OrderModal.tsx
updateFile(
  'src/components/OrderModal.tsx',
  /(\/images\/icons\/[^'"]+)\.png/g,
  '$1.webp'
);
