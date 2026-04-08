const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      let changed = false;

      // Add lazy loading
      if (content.includes('<img ')) {
        const newContent = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy" decoding="async"');
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }

      // Upgrade div to section for Section components
      if (file.toLowerCase().includes('section') && content.includes('<div') && !content.includes('<section')) {
        // Attempt to find the outermost div and replace it with section.
        // It's a bit hard to definitively target the top-level div with regex, 
        // but we can try to replace the first <div className="w-full (or similar block) with <section
        const sectionRegex = /(return\s*\(\s*)<div([\s\S]*?)>([\s\S]*?)<\/div>(\s*\)\s*;?\s*}$|\s*\)\s*;?$)/;
        if (sectionRegex.test(content)) {
             // We can regex replace if it's simple enough
             const newContent = content.replace(sectionRegex, '$1<section$2>$3</section>$4');
             if (newContent !== content) {
               content = newContent;
               changed = true;
             }
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Optimized ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
