import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const dir = path.resolve('public');

async function main() {
  const files = await fs.readdir(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.png')) {
        const filePath = path.join(dir, file);
        // Replace .png with .webp, case-insensitive
        const newFilePath = path.join(dir, file.replace(/\.png$/i, '.webp'));
        
        console.log(`Converting ${file} to .webp...`);
        try {
            await sharp(filePath).webp({ quality: 80 }).toFile(newFilePath);
            console.log(`Success: ${newFilePath}`);
            // Delete the original .png
            await fs.unlink(filePath);
            console.log(`Deleted original: ${file}`);
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
  }
}

main().catch(console.error);
