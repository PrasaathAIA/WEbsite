const fs = require('fs');
const path = require('path');

const baseUrl = 'https://aiagentsage.com';
const rootDir = path.resolve(__dirname, '..');

function getHtmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'scripts' || entry.name.startsWith('.')) return [];
      return getHtmlFiles(res);
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      return [res];
    }
    return [];
  });
}

const files = getHtmlFiles(rootDir).sort();
const urlsXml = files
  .map((file) => {
    const rel = path.relative(rootDir, file).replace(/\\/g, '/');
    const loc = rel === 'index.html' ? `${baseUrl}/` : `${baseUrl}/${rel}`;
    return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml);
console.log(`Generated sitemap.xml with ${files.length} pages.`);
