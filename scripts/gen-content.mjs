import fs from 'node:fs';
import path from 'node:path';

const CONTENT = String.raw`c:\Users\jeroenr\AppData\Roaming\Code\User\workspaceStorage\9abc4e7a1b9c0873018e00431ef70a42\GitHub.copilot-chat\chat-session-resources\2f50e39d-df1f-4663-9220-a5f4e5929c3e\toolu_0183muJ5D1tKrUUsJhu1thBo__vscode-1787561710666\content.txt`;
const SITE_ROOT = process.cwd(); // noxxa.nl
const ASSET_DIR = path.join(SITE_ROOT, 'noxxa-angular', 'public', 'assets', 'products');
const OUT_TS = path.join(SITE_ROOT, 'noxxa-angular', 'src', 'app', 'data', 'category-content.ts');

const raw = fs.readFileSync(CONTENT, 'utf8');
const start = raw.indexOf('[');
const end = raw.lastIndexOf(']');
const json = raw.slice(start, end + 1);
const data = JSON.parse(json);

fs.mkdirSync(ASSET_DIR, { recursive: true });

const copied = new Map(); // srcRel -> assetPath|null
function resolveImage(srcRel) {
  if (!srcRel) return null;
  if (copied.has(srcRel)) return copied.get(srcRel);
  const abs = path.join(SITE_ROOT, srcRel.replace(/\//g, path.sep));
  if (!fs.existsSync(abs)) {
    copied.set(srcRel, null);
    return null;
  }
  const base = path.basename(abs);
  const dest = path.join(ASSET_DIR, base);
  fs.copyFileSync(abs, dest);
  const assetPath = 'assets/products/' + base;
  copied.set(srcRel, assetPath);
  return assetPath;
}

for (const cat of data) {
  cat.heroImage = resolveImage(cat.heroImage);
  for (const b of cat.blocks) {
    b.image = resolveImage(b.image);
    if (!Array.isArray(b.bullets)) b.bullets = [];
    if (!Array.isArray(b.paragraphs)) b.paragraphs = [];
  }
}

const header = `// AUTO-GENERATED from the original noxxa.nl pages. Do not edit by hand.
export interface ContentBlock {
  heading: string;
  paragraphs: string[];
  bullets: string[];
  image: string | null;
}

export interface CategoryContent {
  slug: string;
  heroImage: string | null;
  blocks: ContentBlock[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = `;

const map = {};
for (const cat of data) map[cat.slug] = cat;

fs.writeFileSync(OUT_TS, header + JSON.stringify(map, null, 2) + ';\n', 'utf8');

const okImgs = [...copied.values()].filter(Boolean).length;
console.log('Categories:', data.length);
console.log('Images copied:', okImgs, 'of', copied.size, 'referenced');
console.log('Missing:', [...copied.entries()].filter(([, v]) => !v).map(([k]) => k).join('\n  '));
