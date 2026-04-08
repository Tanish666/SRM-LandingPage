const fs = require('fs');
const path = require('path');

function closestSpacing(px) {
    const val = parseFloat(px);
    if (val === 0) return '0';
    if (val <= 1) return 'px';
    if (val <= 2) return '0.5';
    if (val <= 4) return '1';
    if (val <= 6) return '1.5';
    if (val <= 8) return '2';
    if (val <= 10) return '2.5';
    if (val <= 12) return '3';
    if (val <= 14) return '3.5';
    if (val <= 16) return '4';
    if (val <= 20) return '5';
    if (val <= 24) return '6';
    if (val <= 28) return '7';
    if (val <= 32) return '8';
    if (val <= 36) return '9';
    if (val <= 40) return '10';
    if (val <= 44) return '11';
    if (val <= 48) return '12';
    if (val <= 56) return '14';
    if (val <= 64) return '16';
    if (val <= 80) return '20';
    if (val <= 96) return '24';
    if (val <= 112) return '28';
    if (val <= 128) return '32';
    if (val <= 144) return '36';
    if (val <= 160) return '40';
    if (val <= 176) return '44';
    if (val <= 192) return '48';
    if (val <= 208) return '52';
    if (val <= 224) return '56';
    if (val <= 240) return '60';
    if (val <= 256) return '64';
    if (val <= 288) return '72';
    if (val <= 320) return '80';
    if (val <= 384) return '96';
    return `[${px}px]`; // If it's too big, just keep it, or maybe map to nearest, let's map to nearest
}

function closestTextSize(px) {
    const val = parseFloat(px);
    if (val <= 12) return 'text-xs';
    if (val <= 14) return 'text-sm';
    if (val <= 16) return 'text-base';
    if (val <= 18) return 'text-lg';
    if (val <= 20) return 'text-xl';
    if (val <= 24) return 'text-2xl';
    if (val <= 30) return 'text-3xl';
    if (val <= 36) return 'text-4xl';
    if (val <= 48) return 'text-5xl';
    if (val <= 60) return 'text-6xl';
    if (val <= 72) return 'text-7xl';
    if (val <= 96) return 'text-8xl';
    if (val <= 128) return 'text-9xl';
    return `text-[${px}px]`;
}

function closestRadius(px) {
    const val = parseFloat(px);
    if (val === 0) return 'rounded-none';
    if (val <= 2) return 'rounded-sm';
    if (val <= 4) return 'rounded';
    if (val <= 6) return 'rounded-md';
    if (val <= 8) return 'rounded-lg';
    if (val <= 12) return 'rounded-xl';
    if (val <= 16) return 'rounded-2xl';
    if (val <= 24) return 'rounded-3xl';
    if (val >= 999) return 'rounded-full';
    return `rounded-[${px}px]`;
}

function mapColor(hex) {
    const h = hex.toUpperCase();
    if (['#00F2FF', '#00FFFF'].includes(h)) return 'primary';
    if (['#7000FF'].includes(h)) return 'secondary';
    if (['#050B18', '#0A0F1E'].includes(h)) return 'navy-900';
    if (['#0D1526', '#10172A'].includes(h)) return 'navy-800';
    if (['#162035', '#1E293B'].includes(h)) return 'navy-700';
    if (['#FFFFFF', '#FFF'].includes(h)) return 'white';
    if (['#000000', '#000'].includes(h)) return 'black';
    if (['#E2E8F0'].includes(h)) return 'slate-200';
    if (['#94A3B8'].includes(h)) return 'slate-400';
    if (['#64748B'].includes(h)) return 'slate-500';
    if (['#475569'].includes(h)) return 'slate-600';
    if (['#334155'].includes(h)) return 'slate-700';
    if (['#1E293B'].includes(h)) return 'slate-800';
    if (['#0F172A'].includes(h)) return 'slate-900';
    return `[${h}]`;
}

function fixContent(content) {
    // Spacing
    content = content.replace(/(m|p|mt|mb|ml|mr|mx|my|pt|pb|pl|pr|px|py|gap|w|h|top|bottom|left|right|inset)-\[(-?\d+(?:\.\d+)?)px\]/g, (match, prefix, px) => {
        const val = parseFloat(px);
        const mapped = closestSpacing(Math.abs(val));
        if (mapped.startsWith('[')) return match;
        return val < 0 ? `-${prefix}-${mapped}` : `${prefix}-${mapped}`;
    });

    // Text Size
    content = content.replace(/text-\[(\d+(?:\.\d+)?)px\]/g, (match, px) => {
        const mapped = closestTextSize(px);
        if (mapped.startsWith('text-[')) return match;
        return mapped;
    });

    // Border Radius
    content = content.replace(/rounded(?:-[trbl])?-\[(\d+(?:\.\d+)?)px\]/g, (match, px) => {
        // Warning: This ignores directional roundings in mapping. 
        // Let's do it safer.
        return match;
    });
    content = content.replace(/rounded-\[(\d+(?:\.\d+)?)px\]/g, (match, px) => {
        const mapped = closestRadius(px);
        if (mapped.startsWith('rounded-[')) return match;
        return mapped;
    });

    // Colors
    content = content.replace(/(text|bg|border|fill|stroke|ring)-\[#([0-9a-fA-F]{3,8})\]/g, (match, prefix, hex) => {
        const h = `#${hex.slice(0,6)}`;
        const mappedColor = mapColor(h);
        if (mappedColor.startsWith('[')) return match; // fallback
        return `${prefix}-${mappedColor}`;
    });

    // Font weights
    content = content.replace(/font-\[510\]/g, 'font-medium');
    content = content.replace(/font-\[(\d+)\]/g, (match, weight) => {
        const w = parseInt(weight);
        if (w <= 100) return 'font-thin';
        if (w <= 200) return 'font-extralight';
        if (w <= 300) return 'font-light';
        if (w <= 400) return 'font-normal';
        if (w <= 500) return 'font-medium';
        if (w <= 600) return 'font-semibold';
        if (w <= 700) return 'font-bold';
        if (w <= 800) return 'font-extrabold';
        return 'font-black';
    });

    return content;
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    let changedCount = 0;
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            changedCount += traverse(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            const newContent = fixContent(content);
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                changedCount++;
                console.log(`Updated ${fullPath}`);
            }
        }
    }
    return changedCount;
}

console.log(`Changed ${traverse(path.join(__dirname, 'src'))} files.`);
