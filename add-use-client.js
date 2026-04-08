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
      
      // If it's a layout or page, we might want to skip adding use client unless they really need it.
      // Actually page.tsx and layout.tsx were just handled.
      if (file === 'page.tsx' || file === 'layout.tsx') continue;

      const needsClient = /useState|useEffect|useRef|useContext|useMemo|useCallback|usePathname|useRouter|onClick=|onSubmit=|onChange=|framer-motion/.test(content);
      const hasClient = content.includes('use client') || content.includes('"use client"');
      
      if (needsClient && !hasClient) {
        content = `'use client';\n${content}`;
        fs.writeFileSync(fullPath, content);
        console.log(`Added 'use client' to ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
