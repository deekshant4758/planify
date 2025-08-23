const fs = require('fs');
const path = require('path');

const OUTPUT_FILE = 'file-tree.txt';
const EXCLUDED_DIRS = ['node_modules', '.git', '.next', 'dist']; // Add your folders here
const MAX_DEPTH = 3;

function generateTree(dir, depth = 0, prefix = '') {
  if (depth > MAX_DEPTH) return '';

  let tree = '';
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const isLast = i === items.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const newPrefix = prefix + (isLast ? '    ' : '│   ');

    if (EXCLUDED_DIRS.includes(item.name)) continue;

    tree += `${prefix}${connector}${item.name}\n`;

    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      tree += generateTree(fullPath, depth + 1, newPrefix);
    }
  }

  return tree;
}

// Generate and write to file
const startPath = process.cwd(); // Current directory
const treeOutput = generateTree(startPath);
fs.writeFileSync(OUTPUT_FILE, treeOutput);

console.log(`✅ File tree saved to ${OUTPUT_FILE}`);
