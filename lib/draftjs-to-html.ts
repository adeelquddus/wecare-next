/**
 * Converts Wix Blog Draft.js JSON content to HTML.
 *
 * Wix stores blog post content as Draft.js JSON with custom Wix plugins.
 * This converter handles all standard block types plus Wix image/divider entities.
 *
 * Entity types encountered in Wix blogs:
 *   wix-draft-plugin-image  → <figure><img ...></figure>
 *   wix-draft-plugin-divider → <hr>
 *   LINK                    → <a href="...">
 */

interface InlineStyleRange {
  offset: number;
  length: number;
  style: string;
}

interface EntityRange {
  offset: number;
  length: number;
  key: number;
}

interface DraftBlock {
  key: string;
  type: string;
  text: string;
  depth: number;
  inlineStyleRanges: InlineStyleRange[];
  entityRanges: EntityRange[];
  data: Record<string, unknown>;
}

interface WixImageData {
  src?: {
    id?: string;
    file_name?: string;
    width?: number;
    height?: number;
  };
  config?: {
    alignment?: string;
    size?: string;
  };
}

interface LinkData {
  url?: string;
  target?: string;
  rel?: string;
}

interface DraftEntity {
  type: string;
  mutability: string;
  data: Record<string, unknown>;
}

interface DraftContent {
  blocks: DraftBlock[];
  entityMap: Record<string, DraftEntity>;
}

// ─── Public entry point ──────────────────────────────────────────────────────

export function draftjsToHtml(contentJson: string): string {
  let content: DraftContent;
  try {
    content = JSON.parse(contentJson) as DraftContent;
  } catch {
    // Not JSON — return as plain paragraph
    return `<p>${escapeHtml(contentJson)}</p>`;
  }

  const { blocks, entityMap } = content;
  if (!Array.isArray(blocks)) return '';

  const html: string[] = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    // Group consecutive list items into a single <ul> or <ol>
    if (block.type === 'unordered-list-item') {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].type === 'unordered-list-item') {
        items.push(`<li>${renderInline(blocks[i], entityMap)}</li>`);
        i++;
      }
      html.push(`<ul>${items.join('')}</ul>`);
      continue;
    }

    if (block.type === 'ordered-list-item') {
      const items: string[] = [];
      while (i < blocks.length && blocks[i].type === 'ordered-list-item') {
        items.push(`<li>${renderInline(blocks[i], entityMap)}</li>`);
        i++;
      }
      html.push(`<ol>${items.join('')}</ol>`);
      continue;
    }

    const rendered = renderBlock(block, entityMap);
    if (rendered) html.push(rendered);
    i++;
  }

  return html.join('\n');
}

// ─── Block renderer ──────────────────────────────────────────────────────────

function renderBlock(block: DraftBlock, entityMap: Record<string, DraftEntity>): string {
  const inline = renderInline(block, entityMap);

  switch (block.type) {
    case 'unstyled':
      // Empty unstyled blocks are spacers
      return block.text.trim() === '' ? '<br>' : `<p>${inline}</p>`;

    case 'header-one':   return `<h2>${inline}</h2>`;   // H1 reserved for post title
    case 'header-two':   return `<h2>${inline}</h2>`;
    case 'header-three': return `<h3>${inline}</h3>`;
    case 'header-four':  return `<h4>${inline}</h4>`;
    case 'header-five':  return `<h5>${inline}</h5>`;
    case 'header-six':   return `<h6>${inline}</h6>`;

    case 'blockquote':
      return `<blockquote>${inline}</blockquote>`;

    case 'code-block':
      return `<pre><code>${escapeHtml(block.text)}</code></pre>`;

    case 'atomic':
      return renderAtomicBlock(block, entityMap);

    default:
      return block.text.trim() ? `<p>${inline}</p>` : '';
  }
}

// ─── Atomic (media) blocks ───────────────────────────────────────────────────

function renderAtomicBlock(block: DraftBlock, entityMap: Record<string, DraftEntity>): string {
  if (block.entityRanges.length === 0) return '';

  const entityKey = block.entityRanges[0].key.toString();
  const entity = entityMap[entityKey];
  if (!entity) return '';

  switch (entity.type) {
    case 'wix-draft-plugin-image': {
      const data = entity.data as WixImageData;
      const src = data.src;
      if (!src?.id) return '';

      const fileName = src.file_name ?? 'image.jpg';
      // Wix media CDN URL — 900px wide, quality 85, centre-aligned
      const imgUrl =
        `https://static.wixstatic.com/media/${src.id}/v1/fill/` +
        `w_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${fileName}`;

      const alignment = data.config?.alignment ?? 'center';

      return (
        `<figure class="blog-img blog-img--${alignment}">` +
        `<img src="${imgUrl}" alt="" loading="lazy" width="${src.width ?? 900}" />` +
        `</figure>`
      );
    }

    case 'wix-draft-plugin-divider':
      return '<hr class="blog-divider">';

    case 'wix-draft-plugin-video':
    case 'wix-draft-plugin-giphy':
    case 'wix-draft-plugin-gallery':
      // Unsupported rich media — skip silently
      return '';

    default:
      return '';
  }
}

// ─── Inline text renderer ────────────────────────────────────────────────────

function renderInline(block: DraftBlock, entityMap: Record<string, DraftEntity>): string {
  const { text, inlineStyleRanges, entityRanges } = block;
  if (!text) return '';

  // Build a per-character metadata array
  interface CharMeta { styles: Set<string>; entityKey: number | null }
  const chars: CharMeta[] = Array.from({ length: text.length }, () => ({
    styles: new Set<string>(),
    entityKey: null,
  }));

  for (const range of inlineStyleRanges) {
    for (let i = range.offset; i < range.offset + range.length && i < chars.length; i++) {
      chars[i].styles.add(range.style);
    }
  }

  for (const range of entityRanges) {
    for (let i = range.offset; i < range.offset + range.length && i < chars.length; i++) {
      chars[i].entityKey = range.key;
    }
  }

  // Group consecutive chars with identical metadata into runs
  let result = '';
  let i = 0;

  while (i < chars.length) {
    const cur = chars[i];
    let j = i + 1;
    while (
      j < chars.length &&
      setsEqual(chars[j].styles, cur.styles) &&
      chars[j].entityKey === cur.entityKey
    ) {
      j++;
    }

    let chunk = escapeHtml(text.slice(i, j));

    // Inline styles — order matters for nesting
    if (cur.styles.has('CODE'))      chunk = `<code>${chunk}</code>`;
    if (cur.styles.has('BOLD'))      chunk = `<strong>${chunk}</strong>`;
    if (cur.styles.has('ITALIC'))    chunk = `<em>${chunk}</em>`;
    if (cur.styles.has('UNDERLINE')) chunk = `<u>${chunk}</u>`;

    // Entity wrapping
    if (cur.entityKey !== null) {
      const entity = entityMap[cur.entityKey.toString()];
      if (entity?.type === 'LINK') {
        const d = entity.data as LinkData;
        const href = escapeHtml(d.url ?? '#');
        const target = d.target === '_blank' ? ' target="_blank" rel="noopener noreferrer"' : '';
        chunk = `<a href="${href}"${target}>${chunk}</a>`;
      }
    }

    result += chunk;
    i = j;
  }

  return result;
}

// ─── Utilities ───────────────────────────────────────────────────────────────

function setsEqual(a: Set<string>, b: Set<string>): boolean {
  if (a.size !== b.size) return false;
  // Use forEach to avoid downlevelIteration requirement
  let equal = true;
  a.forEach((item) => { if (!b.has(item)) equal = false; });
  return equal;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
