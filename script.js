const fs = require('fs');
const glob = require('glob');
const path = require('path');

const tsxFiles = glob.sync('src/app/aboutUs/components/*.tsx').concat(glob.sync('src/app/aboutUs/page.tsx'));

let sizes = new Set();
const pattern = /text-\[([0-9\.]+(?:px|rem|em|vh|vw|%))\]/g;

// Gather sizes
tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = pattern.exec(content)) !== null) {
        sizes.add(match[1]);
    }
});

const sizeArray = Array.from(sizes).sort();
const sizeMapping = {};
sizeArray.forEach(size => {
    const cleanName = size.replace(/\./g, '-');
    sizeMapping[size] = {
        varName: `--fs-${cleanName}`,
        className: `text-${cleanName}`
    };
});

// Update globals.css
const cssFile = 'src/app/globals.css';
let cssContent = fs.readFileSync(cssFile, 'utf8');
const rootConfig = sizeArray.map(size => {
    // Only add if not already present
    if (!cssContent.includes(`--fs-${size.replace(/\./g, '-')}:`)) {
        return `    --fs-${size.replace(/\./g, '-')}: ${size};`;
    }
    return '';
}).filter(line => line !== '').join('\n');

if (rootConfig) {
    cssContent = cssContent.replace(
        /:root \{/,
        `:root {\n${rootConfig}`
    );
    fs.writeFileSync(cssFile, cssContent);
}

// Update tailwind.config.ts
const twFile = 'tailwind.config.ts';
let twContent = fs.readFileSync(twFile, 'utf8');
const twConfig = sizeArray.map(size => {
    const keyStr = `'${size.replace(/\./g, '-')}'`;
    if (!twContent.includes(keyStr)) {
        return `				${keyStr}: 'var(--fs-${size.replace(/\./g, '-')})',`;
    }
    return '';
}).filter(line => line !== '').join('\n');

if (twConfig) {
    twContent = twContent.replace(
        /fontSize: \{/,
        `fontSize: {\n${twConfig}`
    );
    fs.writeFileSync(twFile, twContent);
}

// Update components
tsxFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    const filePattern = /text-\[([0-9\.]+(?:px|rem|em|vh|vw|%))\]/g;
    content = content.replace(filePattern, (match, size) => {
        if (sizeMapping[size]) {
            modified = true;
            return sizeMapping[size].className;
        }
        return match;
    });

    if (modified) {
        fs.writeFileSync(file, content);
    }
});

console.log('Update Complete.');
