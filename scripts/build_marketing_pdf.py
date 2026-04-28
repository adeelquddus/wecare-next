"""
Build a polished branded PDF from MARKETING.md.

Usage:
  python scripts/build_marketing_pdf.py

Outputs:
  C:\\wecare-next\\WeCare-Marketing-Plan-2026.pdf

Brand colours:
  primary  #0086C5
  mint     #10B981
  amber    #F59E0B
"""

from __future__ import annotations
import os
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, ListFlowable, ListItem,
)
from reportlab.pdfgen import canvas

# ── Paths ───────────────────────────────────────────────────────────────
SRC_MD = Path(r"C:\wecare-next\MARKETING.md")
# Output to /public so the file is served by Next.js + Vercel at /WeCare-Marketing-Plan-2026.pdf
OUT_PDF = Path(r"C:\wecare-next\public\WeCare-Marketing-Plan-2026.pdf")

# ── Brand palette ───────────────────────────────────────────────────────
BRAND_PRIMARY = colors.HexColor("#0086C5")
BRAND_MINT    = colors.HexColor("#10B981")
BRAND_AMBER   = colors.HexColor("#F59E0B")
INK           = colors.HexColor("#0F172A")
INK_SOFT      = colors.HexColor("#475569")
BG_SURFACE    = colors.HexColor("#F8FAFC")
RULE_LINE     = colors.HexColor("#E2E8F0")

# ── Styles ──────────────────────────────────────────────────────────────
_styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    'WeCareH1', parent=_styles['Heading1'],
    fontName='Helvetica-Bold', fontSize=20, leading=24,
    textColor=BRAND_PRIMARY, spaceBefore=18, spaceAfter=10,
    keepWithNext=1,
)
H2 = ParagraphStyle(
    'WeCareH2', parent=_styles['Heading2'],
    fontName='Helvetica-Bold', fontSize=15, leading=19,
    textColor=INK, spaceBefore=14, spaceAfter=6,
    keepWithNext=1,
)
H3 = ParagraphStyle(
    'WeCareH3', parent=_styles['Heading3'],
    fontName='Helvetica-Bold', fontSize=12, leading=15,
    textColor=BRAND_PRIMARY, spaceBefore=10, spaceAfter=4,
    keepWithNext=1,
)
BODY = ParagraphStyle(
    'WeCareBody', parent=_styles['BodyText'],
    fontName='Helvetica', fontSize=10, leading=14,
    textColor=INK, spaceAfter=6, alignment=TA_LEFT,
)
QUOTE = ParagraphStyle(
    'WeCareQuote', parent=BODY,
    fontName='Helvetica-Oblique', fontSize=10, leading=14,
    textColor=INK_SOFT,
    leftIndent=14, borderColor=BRAND_PRIMARY, borderPadding=8,
    backColor=colors.HexColor('#F0F9FF'),
    spaceBefore=6, spaceAfter=8,
)
SMALL = ParagraphStyle(
    'WeCareSmall', parent=BODY,
    fontSize=8.5, leading=11, textColor=INK_SOFT,
)
CODE_INLINE_FONT = 'Courier'

# Cover-specific
COVER_TITLE = ParagraphStyle(
    'CoverTitle', fontName='Helvetica-Bold', fontSize=28, leading=34,
    textColor=BRAND_PRIMARY, alignment=TA_CENTER, spaceAfter=18,
)
COVER_SUBTITLE = ParagraphStyle(
    'CoverSubtitle', fontName='Helvetica', fontSize=15, leading=20,
    textColor=BRAND_MINT, alignment=TA_CENTER, spaceAfter=12,
)
COVER_DATE = ParagraphStyle(
    'CoverDate', fontName='Helvetica', fontSize=11, leading=14,
    textColor=INK_SOFT, alignment=TA_CENTER, spaceBefore=24,
)
COVER_TAGLINE = ParagraphStyle(
    'CoverTag', fontName='Helvetica-Oblique', fontSize=11, leading=15,
    textColor=INK_SOFT, alignment=TA_CENTER, spaceBefore=18,
)
TOC_HEADER = ParagraphStyle(
    'TocH', fontName='Helvetica-Bold', fontSize=18, leading=22,
    textColor=BRAND_PRIMARY, spaceAfter=12,
)
TOC_ITEM = ParagraphStyle(
    'TocItem', fontName='Helvetica', fontSize=11, leading=18,
    textColor=INK, leftIndent=14,
)


# ── Markdown helpers ────────────────────────────────────────────────────

# Strip the leading emoji (any extended-pictographic char) from a heading
def strip_leading_emoji(s: str) -> str:
    # Drop any sequence of non-alphanumeric leading runes (covers emojis +
    # variation selectors), then trim whitespace.
    return re.sub(r'^[^\w(`"]+', '', s).strip()


# Convert simple inline markdown → ReportLab inline markup
INLINE_LINK = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
INLINE_BOLD = re.compile(r'\*\*([^*]+)\*\*')
INLINE_ITAL = re.compile(r'(?<!\*)\*([^*\n]+?)\*(?!\*)')
INLINE_CODE = re.compile(r'`([^`]+)`')


def md_inline_to_rl(s: str) -> str:
    """Convert inline markdown to ReportLab paragraph XML markup."""
    # Escape XML
    s = (s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;'))
    # Code (do this before bold/italic so * inside backticks isn't styled)
    s = INLINE_CODE.sub(lambda m: f'<font name="{CODE_INLINE_FONT}" color="#0086C5">{m.group(1)}</font>', s)
    # Bold then italic
    s = INLINE_BOLD.sub(r'<b>\1</b>', s)
    s = INLINE_ITAL.sub(r'<i>\1</i>', s)
    # Links — keep visible text (we don't make them clickable in this PDF
    # to keep the document self-contained, but URL is shown for reference)
    s = INLINE_LINK.sub(lambda m: f'<font color="#0086C5"><u>{m.group(1)}</u></font>', s)
    return s


# Parse a pipe-table block into a list-of-lists
def parse_table(lines: list[str]) -> list[list[str]]:
    rows = []
    for line in lines:
        line = line.strip()
        if not line.startswith('|'):
            continue
        # Split on pipes; drop the empty first/last cells
        cells = [c.strip() for c in line.strip('|').split('|')]
        # Skip the alignment row (---)
        if all(re.fullmatch(r':?-+:?', c) for c in cells):
            continue
        rows.append(cells)
    return rows


def make_table(rows: list[list[str]]) -> Table:
    if not rows:
        return Spacer(0, 0)
    # First row = header
    header = rows[0]
    body = rows[1:]
    n_cols = len(header)

    # Render every cell as a Paragraph so wrapping works
    flow = []
    flow.append([Paragraph(f'<b>{md_inline_to_rl(c)}</b>', ParagraphStyle('th', parent=BODY, textColor=colors.white, fontName='Helvetica-Bold', fontSize=9.5, leading=12)) for c in header])
    for row in body:
        # Pad row in case of jagged input
        row = (row + [''] * n_cols)[:n_cols]
        flow.append([Paragraph(md_inline_to_rl(c), ParagraphStyle('td', parent=BODY, fontSize=9.5, leading=12)) for c in row])

    # Equal-width columns by default; can be smarter but this works
    available = 6.5 * inch
    col_w = [available / n_cols] * n_cols

    t = Table(flow, colWidths=col_w, repeatRows=1)
    t.setStyle(TableStyle([
        # Header
        ('BACKGROUND', (0, 0), (-1, 0), BRAND_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
        # Body — zebra
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [colors.white, BG_SURFACE]),
        ('LINEBELOW', (0, 0), (-1, -1), 0.4, RULE_LINE),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    return t


# ── Cover + page chrome ─────────────────────────────────────────────────

def cover_page(c: canvas.Canvas, doc) -> None:
    """The first page is built via a custom callback. We don't add any
    flowables for the cover; instead we draw it directly on the canvas
    on page 1."""
    width, height = letter
    if doc.page > 1:
        # On every other page draw the page-number footer
        c.saveState()
        c.setFont('Helvetica', 8.5)
        c.setFillColor(INK_SOFT)
        c.drawString(0.75 * inch, 0.6 * inch, 'WeCare Wellness · 12-month marketing & SEO strategy')
        c.drawRightString(width - 0.75 * inch, 0.6 * inch, f'Page {doc.page}')
        c.setStrokeColor(RULE_LINE)
        c.setLineWidth(0.4)
        c.line(0.75 * inch, 0.78 * inch, width - 0.75 * inch, 0.78 * inch)
        c.restoreState()


def draw_cover(c: canvas.Canvas) -> None:
    width, height = letter

    # Brand band at top
    c.setFillColor(BRAND_PRIMARY)
    c.rect(0, height - 1.4 * inch, width, 1.4 * inch, fill=True, stroke=False)
    # Mint accent stripe
    c.setFillColor(BRAND_MINT)
    c.rect(0, height - 1.45 * inch, width, 0.05 * inch, fill=True, stroke=False)
    # Amber dot
    c.setFillColor(BRAND_AMBER)
    c.circle(width - 0.85 * inch, height - 0.7 * inch, 0.18 * inch, fill=True, stroke=False)

    # Eyebrow
    c.setFont('Helvetica-Bold', 9)
    c.setFillColor(colors.white)
    c.drawString(0.75 * inch, height - 0.85 * inch, 'WECARE WELLNESS · STRATEGY DOCUMENT')

    # Title
    c.setFont('Helvetica-Bold', 32)
    c.setFillColor(BRAND_PRIMARY)
    c.drawCentredString(width / 2, height - 3.6 * inch, '12-Month Marketing')
    c.drawCentredString(width / 2, height - 4.2 * inch, '& SEO Strategy')

    # Subtitle
    c.setFont('Helvetica', 16)
    c.setFillColor(BRAND_MINT)
    c.drawCentredString(width / 2, height - 4.8 * inch, 'Florida  ·  New York  ·  Arizona  ·  Oregon')

    # Tagline
    c.setFont('Helvetica-Oblique', 11)
    c.setFillColor(INK_SOFT)
    c.drawCentredString(width / 2, height - 5.5 * inch,
                        'Make WeCare Wellness one of the top-ranked healthcare websites for')
    c.drawCentredString(width / 2, height - 5.75 * inch,
                        'primary care, GLP-1 weight loss, telehealth, women\'s health, and more.')

    # Date
    c.setFont('Helvetica', 11)
    c.setFillColor(INK)
    c.drawCentredString(width / 2, height - 7.5 * inch, 'April 28, 2026')
    c.setFont('Helvetica', 9)
    c.setFillColor(INK_SOFT)
    c.drawCentredString(width / 2, height - 7.75 * inch, 'Living document — updated weekly')

    # Footer band
    c.setFillColor(BRAND_PRIMARY)
    c.rect(0, 0, width, 0.6 * inch, fill=True, stroke=False)
    c.setFont('Helvetica-Bold', 9)
    c.setFillColor(colors.white)
    c.drawString(0.75 * inch, 0.25 * inch, 'WECARE WELLNESS CLINIC')
    c.drawRightString(width - 0.75 * inch, 0.25 * inch, 'wecarewellnessclinic.com')

    c.showPage()


# ── Markdown → flowables ────────────────────────────────────────────────

def parse_markdown_to_flowables(md_text: str) -> list:
    flow = []
    lines = md_text.splitlines()
    i = 0
    n = len(lines)

    # Track main TOC entries (H2)
    toc_entries: list[str] = []

    # Skip the H1 (cover handles it)
    while i < n and not lines[i].startswith('# '):
        i += 1
    if i < n:
        # Skip past H1 line
        i += 1
        # Skip any blank lines
        while i < n and lines[i].strip() == '':
            i += 1

    # Start with the blockquote ("> Living document...") — render as a quote
    if i < n and lines[i].startswith('>'):
        block = []
        while i < n and (lines[i].startswith('>') or lines[i].strip() == ''):
            line = lines[i]
            if line.startswith('>'):
                stripped = line[1:].lstrip()
                block.append(stripped)
            else:
                block.append('')
            i += 1
        # Join into a single paragraph (with line breaks)
        joined = '<br/>'.join(md_inline_to_rl(b) for b in block if b is not None)
        flow.append(Paragraph(joined, QUOTE))
        flow.append(Spacer(0, 8))

    # First pass: collect H2 headings for TOC
    for line in lines:
        if line.startswith('## '):
            toc_entries.append(strip_leading_emoji(line[3:]))

    # Insert TOC page
    flow.append(Paragraph('Contents', TOC_HEADER))
    flow.append(Spacer(0, 6))
    for idx, t in enumerate(toc_entries, 1):
        flow.append(Paragraph(f'{idx:>2}.&nbsp;&nbsp;{md_inline_to_rl(t)}', TOC_ITEM))
    flow.append(PageBreak())

    # Continue parsing the rest of the document
    while i < n:
        line = lines[i]
        stripped = line.rstrip()

        # Horizontal rule → page break for visual section separation? Use Spacer + line.
        if re.fullmatch(r'-{3,}', stripped):
            flow.append(Spacer(0, 6))
            flow.append(Table([[' ']], colWidths=[6.5 * inch], rowHeights=[0.5],
                              style=TableStyle([('LINEBELOW', (0, 0), (-1, -1), 0.6, RULE_LINE)])))
            flow.append(Spacer(0, 6))
            i += 1
            continue

        # H2
        if stripped.startswith('## '):
            heading = strip_leading_emoji(stripped[3:])
            flow.append(Paragraph(md_inline_to_rl(heading), H1))
            i += 1
            continue

        # H3
        if stripped.startswith('### '):
            heading = strip_leading_emoji(stripped[4:])
            flow.append(Paragraph(md_inline_to_rl(heading), H2))
            i += 1
            continue

        # H4
        if stripped.startswith('#### '):
            flow.append(Paragraph(md_inline_to_rl(strip_leading_emoji(stripped[5:])), H3))
            i += 1
            continue

        # Table block (starts with `|`)
        if stripped.startswith('|'):
            block = []
            while i < n and lines[i].lstrip().startswith('|'):
                block.append(lines[i])
                i += 1
            rows = parse_table(block)
            tbl = make_table(rows)
            flow.append(tbl)
            flow.append(Spacer(0, 8))
            continue

        # Bullet list (line starts with - or *) — collect until non-list
        if re.match(r'^[\-\*] ', stripped):
            items = []
            while i < n and re.match(r'^[\-\*] ', lines[i].rstrip()):
                # Get the bullet line
                cur = lines[i].rstrip()[2:]
                # Continuation lines (indented by 2+ spaces) belong to the same item
                i += 1
                while i < n and (lines[i].startswith('  ') or lines[i].startswith('\t')):
                    cur += ' ' + lines[i].strip()
                    i += 1
                # Recognise checkbox
                m_cb = re.match(r'^\[([ xX])\]\s+(.*)$', cur)
                if m_cb:
                    box = '☑' if m_cb.group(1).lower() == 'x' else '☐'
                    txt = f'{box}&nbsp;&nbsp;{md_inline_to_rl(m_cb.group(2))}'
                else:
                    txt = md_inline_to_rl(cur)
                items.append(ListItem(Paragraph(txt, BODY), leftIndent=8))
            flow.append(ListFlowable(
                items, bulletType='bullet', start='circle',
                bulletColor=BRAND_PRIMARY, leftIndent=14, bulletFontSize=8,
            ))
            flow.append(Spacer(0, 6))
            continue

        # Numbered list
        if re.match(r'^\d+\.\s', stripped):
            items = []
            while i < n and re.match(r'^\d+\.\s', lines[i].rstrip()):
                cur = re.sub(r'^\d+\.\s', '', lines[i].rstrip())
                i += 1
                while i < n and (lines[i].startswith('  ') or lines[i].startswith('\t')):
                    cur += ' ' + lines[i].strip()
                    i += 1
                items.append(ListItem(Paragraph(md_inline_to_rl(cur), BODY), leftIndent=8))
            flow.append(ListFlowable(
                items, bulletType='1', start='1',
                bulletColor=BRAND_PRIMARY, leftIndent=14,
            ))
            flow.append(Spacer(0, 6))
            continue

        # Blockquote
        if stripped.startswith('> '):
            block = []
            while i < n and lines[i].lstrip().startswith('>'):
                block.append(lines[i].lstrip()[1:].lstrip())
                i += 1
            joined = '<br/>'.join(md_inline_to_rl(b) for b in block if b)
            flow.append(Paragraph(joined, QUOTE))
            continue

        # Blank line
        if stripped == '':
            flow.append(Spacer(0, 4))
            i += 1
            continue

        # Paragraph (collect until blank or block-element line)
        para_lines = [stripped]
        i += 1
        while i < n:
            nxt = lines[i].rstrip()
            if (nxt == '' or nxt.startswith('#') or nxt.startswith('|')
                    or re.match(r'^[\-\*] ', nxt) or re.match(r'^\d+\.\s', nxt)
                    or nxt.startswith('>') or re.fullmatch(r'-{3,}', nxt)):
                break
            para_lines.append(nxt)
            i += 1
        para = ' '.join(para_lines).strip()
        if para:
            flow.append(Paragraph(md_inline_to_rl(para), BODY))

    return flow


# ── Build ────────────────────────────────────────────────────────────────

class CoverFirstDocTemplate(SimpleDocTemplate):
    """SimpleDocTemplate that draws a custom cover on page 1, then content
    on subsequent pages."""

    def beforePage(self) -> None:
        # ReportLab calls this before drawing each page. Page 1 = cover.
        if self.canv.getPageNumber() == 1:
            draw_cover(self.canv)


def build():
    if not SRC_MD.exists():
        raise SystemExit(f"Source not found: {SRC_MD}")

    md_text = SRC_MD.read_text(encoding='utf-8')
    flow = parse_markdown_to_flowables(md_text)

    # Force a page break so content starts on page 2 (after cover)
    story = [PageBreak()] + flow

    OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT_PDF),
        pagesize=letter,
        leftMargin=0.75 * inch, rightMargin=0.75 * inch,
        topMargin=0.95 * inch, bottomMargin=0.95 * inch,
        title='WeCare Wellness — 12-Month Marketing & SEO Strategy',
        author='WeCare Wellness Clinic',
        subject='Marketing strategy plan',
        creator='build_marketing_pdf.py',
    )

    def on_page(c, d):
        cover_page(c, d)
        if d.page == 1:
            draw_cover(c)

    doc.build(story, onFirstPage=lambda c, d: draw_cover(c), onLaterPages=cover_page)
    print(f'Wrote: {OUT_PDF}')


if __name__ == '__main__':
    build()
