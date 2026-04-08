const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'src');

function getAllFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getAllFiles(fullPath, filesList);
        } else {
            filesList.push(fullPath);
        }
    }
    return filesList;
}

const allFiles = getAllFiles(projectRoot);

// Part 1: Fix Colors and Text
const hexMap = {
    '00F2FF': 'primary', '00FFFF': 'primary',
    '7000FF': 'secondary',
    '050B18': 'navy-900', '0A0F1E': 'navy-900',
    '0D1526': 'navy-800', '10172A': 'navy-800',
    '162035': 'navy-700', '1E293B': 'navy-700',
    'FFFFFF': 'white', 'FFF': 'white',
    '000000': 'black', '000': 'black'
};

function processFile(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace hardcoded font sizes
    content = content.replace(/text-\[12px\]/g, 'text-xs');
    content = content.replace(/text-\[14px\]/g, 'text-sm');
    content = content.replace(/text-\[16px\]/g, 'text-base');
    content = content.replace(/text-\[18px\]/g, 'text-lg');
    content = content.replace(/text-\[20px\]/g, 'text-xl');
    content = content.replace(/text-\[24px\]/g, 'text-2xl');
    content = content.replace(/text-\[30px\]/g, 'text-3xl');
    content = content.replace(/text-\[32px\]/g, 'text-4xl'); 
    content = content.replace(/text-\[36px\]/g, 'text-4xl');
    content = content.replace(/text-\[40px\]/g, 'text-5xl');
    content = content.replace(/text-\[48px\]/g, 'text-5xl');
    content = content.replace(/text-\[56px\]/g, 'text-6xl');
    content = content.replace(/text-\[60px\]/g, 'text-6xl');
    content = content.replace(/text-\[64px\]/g, 'text-6xl');
    content = content.replace(/text-\[72px\]/g, 'text-7xl');
    
    // Replace hex colors (taking alpha into account)
    content = content.replace(/(text|bg|border|fill|stroke|ring|from|to|via)-\[#([0-9a-fA-F]{3,8})\]/g, (match, prefix, hex) => {
        let alpha = '';
        let baseHex = hex.toUpperCase();
        if (baseHex.length === 8) {
            let alphaHex = baseHex.substring(6, 8);
            let alphaDec = parseInt(alphaHex, 16);
            let alphaPct = Math.round((alphaDec / 255) * 100);
            alpha = `/${alphaPct}`;
            baseHex = baseHex.substring(0, 6);
        } else if (baseHex.length === 4) {
            let alphaHex = baseHex.substring(3, 4);
            let alphaDec = parseInt(alphaHex + alphaHex, 16);
            let alphaPct = Math.round((alphaDec / 255) * 100);
            alpha = `/${alphaPct}`;
            baseHex = baseHex.substring(0, 3);
        }

        if (hexMap[baseHex]) {
            return `${prefix}-${hexMap[baseHex]}${alpha}`;
        }
        return match;
    });

    // Optimize SEO Semantic Tags for obvious wrappers
    if (filePath.toLowerCase().includes('section') && !content.includes('<section')) {
        content = content.replace(/(return\s*\(\s*)<div([\s\S]*?)>([\s\S]*?)<\/div>(\s*\)\s*;?\s*}$|\s*\)\s*;?$)/, '$1<section$2>$3</section>$4');
    }

    // Add loading="lazy" to imgs
    content = content.replace(/<img(?![^>]*loading=)/g, '<img loading="lazy" decoding="async"');

    fs.writeFileSync(filePath, content);
}

for (const file of allFiles) {
    processFile(file);
}

// Reorganize folder structure
const homeDir = path.join(__dirname, 'src', 'components', 'home');
const layoutDir = path.join(__dirname, 'src', 'components', 'layout');
if (!fs.existsSync(homeDir)) fs.mkdirSync(homeDir, { recursive: true });
if (!fs.existsSync(layoutDir)) fs.mkdirSync(layoutDir, { recursive: true });

function moveFile(oldPath, newDir) {
    if (fs.existsSync(oldPath)) {
        const fileName = path.basename(oldPath);
        const newPath = path.join(newDir, fileName);
        fs.renameSync(oldPath, newPath);
        return true;
    }
    return false;
}

const compsDir = path.join(__dirname, 'src', 'components');
const filesToMoveToHome = [
    'HemeSection6.tsx', 'HeroImg.tsx', 'HeroSection.tsx', 'HeroSection4.tsx', 'HeroSection5.tsx',
    'HomeSection10.tsx', 'HomeSection2.tsx', 'HomeSection3.tsx', 'HomeSection6.tsx',
    'HomeSection7.tsx', 'HomeSection8.tsx', 'HomeSection9.tsx', 'Section3.tsx', 'SectionPill.tsx',
    'heroMarquee.tsx', 'section2.tsx', 'section-wrapper.tsx'
];

const filesToMoveToLayout = [
    'Navbar.tsx', 'footer.tsx', 'Separator.tsx'
];

filesToMoveToHome.forEach(f => moveFile(path.join(compsDir, f), homeDir));
filesToMoveToLayout.forEach(f => moveFile(path.join(compsDir, f), layoutDir));

// Fix imports in all files
const updatedFiles = getAllFiles(projectRoot);

function fixImports(filePath) {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    let content = fs.readFileSync(filePath, 'utf-8');
    
    content = content.replace(/@\/components\/(Navbar|footer|Separator)/g, '@/components/layout/$1');
    content = content.replace(/@\/components\/(HomeSection.*|Hero.*|Heme.*|Section.*|section.*|hero.*)/g, '@/components/home/$1');
    
    fs.writeFileSync(filePath, content);
}

for (const file of updatedFiles) {
    fixImports(file);
}

console.log("Refactoring complete.");
