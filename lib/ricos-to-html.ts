/**
 * Converts Wix Ricos (Rich Content Schema) nodes to HTML.
 *
 * Ricos is Wix's structured rich-content format returned by the Blog API
 * when using the RICH_CONTENT fieldset.
 *
 * Handles: PARAGRAPH, HEADING, IMAGE, ORDERED_LIST, BULLETED_LIST,
 *          LIST_ITEM, DIVIDER, TEXT (with decorations: BOLD, ITALIC,
 *          UNDERLINE, LINK, COLOR, FONT_SIZE).
 */

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface TextDecoration {
  type: string;           // 'BOLD' | 'ITALIC' | 'UNDERLINE' | 'LINK' | 'COLOR' | 'FONT_SIZE' | ...
  fontWeightValue?: number;
  linkData?: { link?: { url?: string; target?: string } };
  colorData?: { foreground?: string };
  fontSizeData?: { value?: number; unit?: string };
}

interface TextData {
  text: string;
  decorations?: TextDecoration[];
}

interface ImageSrc {
  id?: string;
  url?: string;
}

interface ImageData {
  image?: { src?: ImageSrc; width?: number; height?: number };
  containerData?: { alignment?: string; width?: { size?: string } };
  altText?: string;
  caption?: string;
}

interface HeadingData {
  level?: number;
}

interface RicosNode {
  type: string | undefined;
  id?: string;
  nodes?: RicosNode[];
  textData?: TextData;
  imageData?: ImageData;
  headingData?: HeadingData;
  [key: string]: unknown;
}

interface RichContent {
  nodes?: RicosNode[];
}

/* ─── Entry point ────────────────────────────────────────────────────────── */

export function ricosToHtml(richContent: RichContent): string {
  if (!richContent?.nodes?.length) return '';
  return richContent.nodes.map(renderNode).join('\n');
}

/* ─── Node renderer ──────────────────────────────────────────────────────── */

function renderNode(node: RicosNode): string {
  switch (node.type ?? '') {
    case 'PARAGRAPH':
      return renderParagraph(node);

    case 'HEADING':
      return renderHeading(node);

    case 'IMAGE':
      return renderImage(node);

    case 'ORDERED_LIST':
      return `<ol>${(node.nodes ?? []).map(renderNode).join('')}</ol>`;

    case 'BULLETED_LIST':
      return `<ul>${(node.nodes ?? []).map(renderNode).join('')}</ul>`;

    case 'LIST_ITEM':
      // A list item contains PARAGRAPH nodes — unwrap them as <li> inline text
      return `<li>${(node.nodes ?? []).map(renderListItemContent).join('')}</li>`;

    case 'DIVIDER':
      return '<hr class="blog-divider">';

    case 'BLOCKQUOTE':
      return `<blockquote>${(node.nodes ?? []).map(renderNode).join('')}</blockquote>`;

    case 'CODE_BLOCK':
      return `<pre><code>${escapeHtml(extractPlainText(node))}</code></pre>`;

    case 'TEXT':
      return renderText(node);

    default:
      // Unknown block types — skip silently (videos, polls, galleries etc.)
      return '';
  }
}

/* ─── Paragraph ─────────────────────────────────────────────────────────── */

function renderParagraph(node: RicosNode): string {
  const inner = (node.nodes ?? []).map(renderNode).join('');
  // Empty paragraphs act as spacers
  if (!inner.trim()) return '<br>';
  return `<p>${inner}</p>`;
}

/* ─── Heading ────────────────────────────────────────────────────────────── */

function renderHeading(node: RicosNode): string {
  // H1 is reserved for the post title, remap to preserve visual hierarchy
  const raw = node.headingData?.level ?? 2;
  const level = raw === 1 ? 2 : raw; // demote H1 → H2 inside the body
  const inner = (node.nodes ?? []).map(renderNode).join('');
  return `<h${level}>${inner}</h${level}>`;
}

/* ─── List item (inline content only) ──────────────────────────────────── */

function renderListItemContent(node: RicosNode): string {
  if (node.type === 'PARAGRAPH') {
    return (node.nodes ?? []).map(renderNode).join('');
  }
  return renderNode(node);
}

/* ─── Image ──────────────────────────────────────────────────────────────── */

function renderImage(node: RicosNode): string {
  const d = node.imageData;
  if (!d) return '';

  const srcId = d.image?.src?.id ?? d.image?.src?.url ?? '';
  if (!srcId) return '';

  // Wix media CDN — 900 px wide, auto quality
  const imgUrl = srcId.startsWith('http')
    ? srcId
    : `https://static.wixstatic.com/media/${srcId}/v1/fill/w_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/${srcId}`;

  const width  = d.image?.width  ?? 900;
  const height = d.image?.height ?? undefined;
  const alt    = d.altText ?? '';
  const align  = (d.containerData?.alignment ?? 'CENTER').toLowerCase();

  const heightAttr = height ? ` height="${height}"` : '';
  const figCaption = d.caption ? `<figcaption>${escapeHtml(d.caption)}</figcaption>` : '';

  return (
    `<figure class="blog-img blog-img--${align}">` +
    `<img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(alt)}" ` +
    `width="${width}"${heightAttr} loading="lazy">` +
    figCaption +
    `</figure>`
  );
}

/* ─── Text + decorations ─────────────────────────────────────────────────── */

function renderText(node: RicosNode): string {
  if (!node.textData) return '';
  const { text, decorations = [] } = node.textData;
  if (!text) return '';

  let html = escapeHtml(text);

  // Apply decorations innermost → outermost
  for (const dec of decorations) {
    switch (dec.type) {
      case 'BOLD':
        html = `<strong>${html}</strong>`;
        break;
      case 'ITALIC':
        html = `<em>${html}</em>`;
        break;
      case 'UNDERLINE':
        html = `<u>${html}</u>`;
        break;
      case 'COLOR': {
        const color = dec.colorData?.foreground;
        if (color) html = `<span style="color:${escapeHtml(color)}">${html}</span>`;
        break;
      }
      case 'LINK': {
        const url    = dec.linkData?.link?.url ?? '#';
        const target = dec.linkData?.link?.target === '_blank'
          ? ' target="_blank" rel="noopener noreferrer"'
          : '';
        html = `<a href="${escapeHtml(url)}"${target}>${html}</a>`;
        break;
      }
      // Skip FONT_SIZE, MENTION, etc.
    }
  }

  return html;
}

/* ─── Utilities ──────────────────────────────────────────────────────────── */

function extractPlainText(node: RicosNode): string {
  if (node.textData?.text) return node.textData.text;
  return (node.nodes ?? []).map(extractPlainText).join('');
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
