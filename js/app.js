/* ============================================================
   GLYPHS (24×24, stroked)
   ============================================================ */
const G = {
  core:'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z',
  wrench:'M14.5 6.5a4 4 0 0 0-5.3 5.3L4 17v3h3l5.2-5.2a4 4 0 0 0 5.3-5.3l-2.5 2.5-2-2z',
  gear:'M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z M12 2.5v3 M12 18.5v3 M2.5 12h3 M18.5 12h3 M5.3 5.3l2.1 2.1 M16.6 16.6l2.1 2.1 M5.3 18.7l2.1-2.1 M16.6 7.4l2.1-2.1',
  swap:'M4 8h14l-3.5-3.5 M20 16H6l3.5 3.5',
  chat:'M4 5h16v10H10l-5 4v-4H4z M8 9h8 M8 12h5',
  home:'M3 11.5L12 4l9 7.5 M5.5 10v10h13V10 M10 20v-5h4v5',
  star:'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z',
  check:'M4.5 12.5l4.5 4.5L19.5 6.5',
  puzzle:'M5 9h3a2 2 0 1 1 4 0h3v3a2 2 0 1 1 0 4v3H5v-3.5a2 2 0 1 0 0-3z',
  repeat:'M4 12a8 8 0 0 1 13.7-5.7L20 4v6h-6l2.3-2.3A5.5 5.5 0 0 0 6.5 12 M20 12a8 8 0 0 1-13.7 5.7L4 20v-6h6l-2.3 2.3a5.5 5.5 0 0 0 9.8-4.3',
  heart:'M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.3a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z',
  bulb:'M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.6 1 2.5h6c0-.9.2-1.7 1-2.5A6 6 0 0 0 12 3z',
  chevrons:'M6 13l6-6 6 6 M6 19l6-6 6 6',
  people:'M8.5 11a3 3 0 1 0 0-6a3 3 0 1 0 0 6z M2.5 20c0-3.3 2.7-6 6-6s6 2.7 6 6 M16.5 10.5a2.5 2.5 0 1 0 0-5 M16 13.6c3 .3 5.5 2.6 5.5 6.4',
  target:'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 1 0 0-9z M12 11.2a.8.8 0 1 0 0 1.6a.8.8 0 1 0 0-1.6z',
  blocks:'M4 13.5h7v7H4z M13 13.5h7v7h-7z M8.5 4h7v7h-7z',
  flag:'M5.5 21V3.5 M5.5 4h12l-2.5 4 2.5 4h-12',
  pin:'M12 21s7-6.4 7-12a7 7 0 0 0-14 0c0 5.6 7 12 7 12z M12 7a2 2 0 1 0 0 4a2 2 0 1 0 0-4z',
  rings:'M14 12a5 5 0 1 1-10 0a5 5 0 1 1 10 0 M20 12a5 5 0 1 1-10 0a5 5 0 1 1 10 0',
  sun:'M12 3.5v2.5 M12 18v2.5 M3.5 12H6 M18 12h2.5 M6 6l1.8 1.8 M16.2 16.2L18 18 M6 18l1.8-1.8 M16.2 7.8L18 6 M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z',
  up:'M4 20.5h16 M12 16.5V4 M6.5 9.5L12 4l5.5 5.5',
  rocket:'M12 3c3 2 5 5.2 5 9.2L15 16H9l-2-3.8C7 8.2 9 5 12 3z M12 8.5a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 1 0 0-3.2z M9.5 16l-2 4.5 M14.5 16l2 4.5',
  trophy:'M8 4h8v5a4 4 0 0 1-8 0z M8 6H5a3 3 0 0 0 3.5 4 M16 6h3a3 3 0 0 1-3.5 4 M12 13v4 M8.5 20.5h7',
  columns:'M4 20.5h16 M5 9.5h14 M12 3.5l8 5H4z M7.5 10.5v8 M12 10.5v8 M16.5 10.5v8',
  burst:'M12 2.5l2.6 6.9 6.9 2.6-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6z',
  shield:'M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6z',
  jacket:'M8 3.5L4 6l-1 14h4l1-7v8h8v-8l1 7h4L20 6l-4-2.5-4 3z',
  sprout:'M12 21V11 M12 11c0-4 3-7 7-7 0 4-3 7-7 7z M12 14c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5z',
  pathways:'M5 20V12a4 4 0 0 1 4-4h10 M15 4l4 4-4 4 M5 20h0 M12 20v-4a3 3 0 0 1 3-3h1',
  notsale:'M4 12.5l7.5-7.5H20v8.5L12.5 21z M15.5 8.5a.8.8 0 1 0 0 .1 M3 3l18 18',
  eye:'M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z',
  scale:'M12 4v16.5 M7 20.5h10 M5 7.5h14 M5 7.5L2.5 13a2.6 2.6 0 0 0 5 0z M19 7.5L16.5 13a2.6 2.6 0 0 0 5 0z',
  clock:'M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17z M12 7.5V12l3 2',
  box:'M3.5 7.5L12 3.5l8.5 4v9L12 20.5l-8.5-4z M3.5 7.5L12 11.5l8.5-4 M12 11.5v9',
  lock:'M6 11h12v9H6z M8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  circleDash:'M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17z'
};
const icon = (name, size=16, color='currentColor', sw=2) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${G[name]}"/></svg>`;

/* ============================================================
   BADGE SYSTEM — one renderer for screen (digital) and thread (patch)
   ============================================================ */
const SHAPES = (() => {
  const poly = (n, r1, r2, rot) => {
    const pts = [];
    for (let i = 0; i < n * (r2 ? 2 : 1); i++) {
      const r = r2 && i % 2 ? r2 : r1;
      const a = (Math.PI * 2 * i) / (n * (r2 ? 2 : 1)) + rot;
      pts.push((60 + r * Math.cos(a)).toFixed(2) + ' ' + (60 + r * Math.sin(a)).toFixed(2));
    }
    return 'M' + pts.join(' L') + ' Z';
  };
  return {
    circle: 'M60 6 A54 54 0 1 1 59.99 6 Z',
    crest: 'M60 11 C80 11 96 20 106 30 L110 34 Q114 38 114 44 L114 62 Q114 70 108 74 L66 106 Q60 110 54 106 L12 74 Q6 70 6 62 L6 44 Q6 38 10 34 L14 30 C24 20 40 11 60 11 Z',
    hex: poly(6, 56, 0, -Math.PI / 2),
    shield: 'M60 5 L107 19 V57 C107 87 87 105 60 116 C33 105 13 87 13 57 V19 Z',
    seal: poly(14, 57, 50, -Math.PI / 2)
  };
})();
const scaled = (d, s, cy=60) => `<path d="${d}" transform="translate(60 ${cy}) scale(${s}) translate(-60 -${cy})"`;
const TIER_STYLE = {
  legacy:        { base:'#002D72', rim:'#A9C23F', glyph:'#FFFFFF' },
  earned:        { base:'#1F5FAE', rim:'#002D72', glyph:'#FFFFFF' },
  distinguished: { base:'#002D72', rim:'#8FAD15', glyph:'#C7E07A' },
  exceptional:   { base:'#001A45', rim:'#A9C23F', glyph:'#FFFFFF' }
};
/* PATCH_ART is defined in js/config.js */

/* Annual Cortlandian rotation, matching Years 1–3 art: navy, white, green */
const YEAR_ROT = [
  { base:'#002D72', rim:'#A9C23F', label:'#A9C23F', ink:'#FFFFFF' },
  { base:'#FFFFFF', rim:'#A9C23F', label:'#002D72', ink:'#002D72', twill:'twillDark' },
  { base:'#A9C23F', rim:'#002D72', label:'#002D72', ink:'#002D72', twill:'twillDark' }
];
const byId = Object.fromEntries(CONFIG.badges.map(b => [b.id, b]));
const isPatch = b => b.tier !== 'earned';
const typeOf = b => b.tier === 'earned' ? (b.limited ? 'limited' : 'digital') : b.tier === 'legacy' ? 'service' : b.tier;
const typeLabel = b => ({ digital:'Digital badge', limited:'Digital, limited edition', service:'Annual service patch', distinguished:'Distinguished patch', exceptional:'Exceptional patch' })[typeOf(b)];

function badgeSVG(b, size=96, mode='auto', extraAttrs='') {
  if (PATCH_ART[b.id]) return `<svg class="b" width="${size}" height="${size}" viewBox="0 0 120 120" ${extraAttrs} aria-hidden="true" focusable="false"><image href="${PATCH_ART[b.id]}" x="0" y="0" width="120" height="120" preserveAspectRatio="xMidYMid meet"/></svg>`;
  const t = CONFIG.tiers[b.tier], d = SHAPES[t.shape];
  const st = b.year ? YEAR_ROT[(b.year - 1) % 3] : TIER_STYLE[b.tier];
  const patch = mode === 'patch' || (mode === 'auto' && isPatch(b));
  const cy = t.shape === 'shield' ? 56 : 60;
  let inner = '';
  if (b.year) {
    inner = `<text x="60" y="40" text-anchor="middle" font-family="Outfit,Segoe UI,sans-serif" font-size="12" font-weight="600" fill="${st.label}" letter-spacing=".5">Year</text>
      <text x="60" y="${b.year >= 10 ? 76 : 78}" text-anchor="middle" font-family="Outfit,Segoe UI,sans-serif" font-size="${b.year >= 10 ? 34 : 40}" font-weight="800" fill="${st.ink}">${b.year}</text>`;
    if (b.milestone) inner += [-1,0,1].map(k => `<path d="${G.star}" transform="translate(${54 + k*13} 82) scale(.36)" fill="#F1BC02" stroke="#002D72" stroke-width="1.5"/>`).join('');
  } else {
    const gx = 34, gy = cy - 26;
    inner = `<g transform="translate(${gx} ${gy}) scale(2.15)" fill="none" stroke="${st.glyph}" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"><path d="${G[b.glyph] || G.star}"/></g>`;
  }
  let body;
  if (patch) {
    const ms = b.milestone;
    body = `<path d="${d}" fill="${st.rim}"/>` +
      (ms ? `${scaled(d,.92)} fill="#001A45"/>${scaled(d,.87)} fill="${st.rim}"/>` : '') +
      `${scaled(d, ms ? .83 : .87)} fill="${st.base}"/>` +
      `${scaled(d, ms ? .83 : .87)} fill="url(#${st.twill || 'twill'})"/>` +
      `${scaled(d, ms ? .77 : .8)} fill="none" stroke="${st.rim}" stroke-width="1.6" stroke-dasharray="3.2 2.6" opacity=".85"/>` +
      (b.tier === 'exceptional' ? `${scaled(d,.68)} fill="none" stroke="#fff" stroke-width="1.2" opacity=".5"/>` : '') +
      inner +
      `<path d="${d}" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1"/>`;
  } else {
    body = `<path d="${d}" fill="${st.base}"/>` +
      `${scaled(d,.88)} fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.4"/>` +
      inner +
      `<path d="${d}" fill="url(#sheen)"/>`;
  }
  return `<svg class="b" width="${size}" height="${size}" viewBox="0 0 120 120" ${extraAttrs} aria-hidden="true" focusable="false">${body}</svg>`;
}
const shapeMini = (tier, size=16, color='currentColor') =>
  `<svg width="${size}" height="${size}" viewBox="0 0 120 120" aria-hidden="true"><path d="${SHAPES[CONFIG.tiers[tier].shape]}" fill="none" stroke="${color}" stroke-width="12"/></svg>`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[c]);

/* ============================================================
   HERO ART — five patches on one thread (single load moment)
   ============================================================ */
function renderHero() {
  const pts = [[96,330],[196,252],[300,312],[382,196],[438,98]];
  const sizes = [80,80,80,80,116];
  const thread = 'M24 392 Q60 350 96 330 S168 240 196 252 S270 336 300 312 S356 214 382 196 S428 128 438 98 S470 40 500 30';
  let s = `<svg viewBox="0 0 520 440" aria-hidden="true">
    <rect x="8" y="12" width="504" height="416" rx="34" fill="#01245C"/>
    <rect x="8" y="12" width="504" height="416" rx="34" fill="url(#twill)"/>
    <rect x="22" y="26" width="476" height="388" rx="24" fill="none" stroke="rgba(169,194,63,.35)" stroke-width="1.5" stroke-dasharray="5 5"/>
    <path d="${thread}" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="2.5" stroke-dasharray="7 6" stroke-linecap="round"/>
    <path class="hero-thread-live" pathLength="1" d="${thread}" fill="none" stroke="#A9C23F" stroke-width="3" stroke-linecap="round"/>`;
  pts.forEach(([x,y], i) => {
    const b = byId['y' + (i+1)], sz = sizes[i];
    s += `<g class="hero-patch" style="animation-delay:${0.55 + i*0.32}s"><svg x="${x - sz/2}" y="${y - sz/2}" width="${sz}" height="${sz}" viewBox="0 0 120 120">${badgeSVG(b, sz, 'patch').replace(/^<svg[^>]*>|<\/svg>$/g,'')}</svg></g>`;
  });
  s += `</svg>`;
  document.getElementById('heroArt').innerHTML = s;
}

/* ============================================================
   JACKETS — conceptual mockups (not approved merchandise)
   Patch slots are identical on both jackets (standardized zones).
   ============================================================ */
const SLOTS = {
  front: [ // left sleeve ×4, right sleeve ×3, front panels ×2
    {x:88,y:170,r:17,z:'Left sleeve'},{x:82,y:212,r:17,z:'Left sleeve'},{x:76,y:254,r:17,z:'Left sleeve'},{x:70,y:296,r:17,z:'Left sleeve'},
    {x:312,y:170,r:17,z:'Right sleeve'},{x:318,y:212,r:17,z:'Right sleeve'},{x:324,y:254,r:17,z:'Right sleeve'},
    {x:158,y:268,r:19,z:'Front panel'},{x:242,y:268,r:19,z:'Front panel'}
  ],
  back: [ {x:150,y:326,r:19,z:'Lower back'},{x:250,y:326,r:19,z:'Lower back'} ]
};
const SLOT_ORDER = [...SLOTS.front.map((s,i)=>['front',i]), ...SLOTS.back.map((s,i)=>['back',i])];
const stripSvg = s => s.replace(/^<svg[^>]*>|<\/svg>$/g,'');
const nest = (b, x, y, sz, mode='patch') => `<svg x="${x}" y="${y}" width="${sz}" height="${sz}" viewBox="0 0 120 120">${stripSvg(badgeSVG(b, sz, mode))}</svg>`;

function milestoneCrest(kind, cx, cy, w) {
  const s = w/120, ten = kind === 'letterman';
  const stars = [-1,0,1].map(k => `<path d="${G.star}" transform="translate(${56+k*12} 80) scale(.34)" fill="#F1BC02" stroke="#002D72" stroke-width="1.5"/>`).join('');
  return `<g transform="translate(${cx-60*s} ${cy-60*s}) scale(${s})">
    <path d="${SHAPES.crest}" fill="${ten?'#A9C23F':'#A9C23F'}"/>
    ${scaled(SHAPES.crest,.9)} fill="#001A45"/>${scaled(SHAPES.crest,.86)} fill="url(#twill)"/>
    ${scaled(SHAPES.crest,.8)} fill="none" stroke="#A9C23F" stroke-width="1.5" stroke-dasharray="3 2.6"/>
    <path d="M30 44 L38 36 L38 44 M42 44 V32 L50 26 V44 M54 44 V30 H62 V44 M66 44 V24 L74 30 V44 M78 44 V34 L88 40 V44" fill="none" stroke="#fff" stroke-width="2.2" stroke-linejoin="round"/>
    <text x="60" y="57" text-anchor="middle" font-family="Outfit,sans-serif" font-size="9" font-weight="800" letter-spacing="1" fill="#fff">CORTLANDIAN</text>
    <text x="60" y="75" text-anchor="middle" font-family="Outfit,sans-serif" font-size="${ten?14:17}" font-weight="800" letter-spacing="1" fill="#A9C23F">${ten?'LEGACY':'FIVE'}</text>
    ${stars}
  </g>`;
}

function jacketSVG(kind, view='front', o={}) {
  const W = o.width ? `width="${o.width}"` : '';
  const ten = kind === 'letterman';
  const label = `${ten?'Ten-year letterman':'Five-year denim'} jacket concept, ${view} view. Illustrative only.`;
  const SL='M128 70 L66 98 Q52 106 50 122 L36 330 L82 340 L116 160 Z', SR='M272 70 L334 98 Q348 106 350 122 L364 330 L318 340 L284 160 Z';
  const CL='M36 330 L82 340 L80 360 L34 350 Z', CR='M364 330 L318 340 L320 360 L366 350 Z';
  const stitch = 'fill="none" stroke="#F1BC02" stroke-width="1.3" stroke-dasharray="3 3" opacity=".8"';
  const body = ten ? '#002D72' : '#22355F', sleeve = ten ? '#D9D2C1' : '#1E2F57', light = ten ? '#0A3A85' : '#2E4676';
  let s = `<svg viewBox="0 0 400 440" ${W} role="img" aria-label="${label}"><defs>
    <pattern id="denimTex" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><line x1="0" y1="0" x2="0" y2="4" stroke="rgba(255,255,255,.07)" stroke-width="1.4"/></pattern>
    <pattern id="ribTex" width="5" height="5" patternUnits="userSpaceOnUse"><rect width="5" height="5" fill="#002D72"/><rect width="2.5" height="5" fill="#00245C"/></pattern></defs>`;
  const ribStripes = (path) => `<path d="${path}" fill="url(#ribTex)"/>`;
  // sleeves
  s += `<path d="${SL}" fill="${sleeve}"/><path d="${SR}" fill="${sleeve}"/>`;
  if (!ten) s += `<path d="${SL}" fill="url(#denimTex)"/><path d="${SR}" fill="url(#denimTex)"/>`;
  else s += `<path d="M116 160 L82 340" stroke="rgba(0,0,0,.08)" stroke-width="6"/><path d="M284 160 L318 340" stroke="rgba(0,0,0,.08)" stroke-width="6"/>`;
  // cuffs
  if (ten) s += ribStripes(CL)+ribStripes(CR)+`<path d="M35 339 L81 349 M365 339 L319 349" stroke="#A9C23F" stroke-width="3"/><path d="M34.5 345 L80.5 355 M365.5 345 L319.5 355" stroke="#fff" stroke-width="2"/>`;
  else s += `<path d="${CL}" fill="${light}"/><path d="${CR}" fill="${light}"/><path d="M37 336 L81 346 M363 336 L319 346" ${stitch}/>`;
  // body
  const B = view==='front' ? 'M128 70 L168 54 L200 76 L232 54 L272 70 L286 372 L114 372 Z' : 'M128 70 L272 70 L286 372 L114 372 Z';
  s += `<path d="${B}" fill="${body}"/><path d="${B}" fill="url(#${ten?'twill':'denimTex'})"/>`;
  // hem
  if (ten) s += `<rect x="113" y="352" width="174" height="30" rx="5" fill="url(#ribTex)"/><rect x="113" y="360" width="174" height="3.5" fill="#A9C23F"/><rect x="113" y="367" width="174" height="2.5" fill="#fff"/>`;
  else s += `<rect x="113" y="352" width="174" height="22" rx="3" fill="${light}"/><path d="M116 358 H284 M116 368 H284" ${stitch}/>`;
  if (view === 'front') {
    if (ten) {
      s += ribStripes('M164 50 Q200 88 236 50 L228 41 Q200 76 172 41 Z') + `<path d="M168 46 Q200 82 232 46" fill="none" stroke="#A9C23F" stroke-width="2.5"/>`;
      s += `<line x1="200" y1="78" x2="200" y2="352" stroke="#00245C" stroke-width="2"/>`;
      s += [96,136,176,216,256,296,334].map(y => `<circle cx="200" cy="${y}" r="5" fill="#E8E3D6" stroke="#9B9584" stroke-width="1.2"/>`).join('');
      s += `<path d="M136 236 L154 300 M264 236 L246 300" stroke="#D9D2C1" stroke-width="6" stroke-linecap="round"/>`;
      // Ten-year chest crest
      s += `<g transform="translate(222 112) scale(.38)"><path d="${SHAPES.crest}" fill="#A9C23F"/>${scaled(SHAPES.crest,.88)} fill="#001A45"/>${scaled(SHAPES.crest,.8)} fill="none" stroke="#A9C23F" stroke-width="2" stroke-dasharray="3 3"/><text x="60" y="66" text-anchor="middle" font-family="Outfit,sans-serif" font-size="36" font-weight="800" fill="#fff">10</text><text x="60" y="88" text-anchor="middle" font-family="Outfit,sans-serif" font-size="12" font-weight="700" letter-spacing="1.5" fill="#A9C23F">YEARS</text></g>`;
    } else {
      s += `<path d="M166 52 L200 78 L180 108 L144 72 Z" fill="${light}"/><path d="M234 52 L200 78 L220 108 L256 72 Z" fill="${light}"/>`;
      s += `<path d="M128 98 Q200 114 272 98" ${stitch}/><line x1="200" y1="78" x2="200" y2="352" stroke="#17264A" stroke-width="2"/><line x1="204" y1="78" x2="204" y2="352" ${stitch}/>`;
      s += [124,166,208,250,292,334].map(y => `<circle cx="200" cy="${y}" r="4.5" fill="#C9A24A" stroke="#8A6D2A" stroke-width="1"/>`).join('');
      s += `<path d="M138 128 h44 v12 l-22 9 l-22 -9 z" fill="${light}"/><path d="M218 128 h44 v12 l-22 9 l-22 -9 z" fill="${light}"/>`;
      s += `<rect x="140" y="152" width="40" height="34" ${stitch}/><rect x="220" y="152" width="40" height="34" ${stitch}/>`;
      s += `<path d="M160 194 L156 352 M240 194 L244 352" ${stitch}/>`;
      s += `<g transform="translate(229 157) scale(.19)"><path d="${SHAPES.crest}" fill="#002D72" stroke="#A9C23F" stroke-width="9"/></g>`;
    }
  } else {
    if (ten) s += ribStripes('M156 58 Q200 74 244 58 L246 72 Q200 88 154 72 Z') + `<path d="M156 66 Q200 82 244 66" fill="none" stroke="#A9C23F" stroke-width="2.5"/>`
      + `<text x="200" y="124" text-anchor="middle" font-family="Outfit,sans-serif" font-size="10" font-weight="700" letter-spacing="1.8" fill="#fff">CORTLAND LEGACY</text>`;
    else s += `<path d="M156 58 Q200 70 244 58 L246 74 Q200 86 154 74 Z" fill="${light}"/><path d="M128 112 L200 132 L272 112" ${stitch}/><path d="M128 114 L200 134 L272 114" fill="none" stroke="#17264A" stroke-width="1.5"/><path d="M166 136 L160 352 M234 136 L240 352" ${stitch}/>`
      + `<text x="200" y="102" text-anchor="middle" font-family="Outfit,sans-serif" font-size="8" font-weight="700" letter-spacing="2.5" fill="#A9C23F">CORTLANDIAN</text>`;
    s += milestoneCrest(kind, 200, 222, ten ? 120 : 108);
  }
  // patches and zones
  const placed = o.placed || {front:[], back:[]};
  (SLOTS[view]||[]).forEach((sl,i) => {
    const pid = placed[view][i];
    if (pid) s += nest(byId[pid], sl.x-sl.r*1.25, sl.y-sl.r*1.25, sl.r*2.5);
    else if (o.zones) s += `<circle cx="${sl.x}" cy="${sl.y}" r="${sl.r}" fill="rgba(169,194,63,.12)" stroke="#A9C23F" stroke-width="1.6" stroke-dasharray="4 3"/>`;
  });
  return s + '</svg>';
}
const miniJacket = (kind, w) => jacketSVG(kind, 'front', { width:w });

/* ============================================================
   THREE EXPERIENCES
   ============================================================ */
function renderXP() {
  const ex = ['core','comm','onec'].map(id => badgeSVG(byId[id], 92, 'digital')).join('');
  const px = badgeSVG(byId.y1, 104, 'patch') + badgeSVG(byId.mentor, 96, 'patch');
  const J = CONFIG.jackets;
  const cards = [
    { cls:'digital', vis:`<div class="stack">${ex}</div>`, kind:'Everyday growth, shown in Companion', title:'Digital Achievement Badges',
      sum:'Recognize learning, skills, goals, and participation, big and small. They appear in your Companion profile.',
      more:`<h4>Digital badges recognize</h4><ul class="tick">${['Learning completion','Demonstrated competencies','Goal milestones','Professional development','Engagement and participation','Department-specific challenges','Smaller achievements','Progress toward advanced recognition'].map(x=>`<li>${x}</li>`).join('')}</ul>
        <p class="callout">Not every digital badge qualifies for a physical patch.</p>` },
    { cls:'patch', vis:`<div class="stack">${px}</div>`, kind:'Exclusive, physical, and verified', title:'Earned Physical Patches',
      sum:'Annual Cortlandian patches for every year of service, plus distinguished patches for verified accomplishments. Never purchased or redeemed.',
      more:`<div class="path-block"><h4>Annual Cortlandian Patches</h4><ul class="tick"><li>One patch for every completed year of service</li><li>Consistent crest, Cortland skyline, and an annual star progression</li><li>Available across departments and job levels</li><li>Displayed on eligible jackets, backpacks, or approved accessories</li></ul></div>
        <div class="path-block"><h4>Distinguished Achievement Patches</h4><ul class="tick"><li>Awarded for meaningful, verified accomplishments</li><li>Clearly defined qualification requirements</li><li>Intentionally more difficult to earn</li></ul></div>
        <div class="path-block"><h4>15, 20, 25 years and beyond</h4><ul class="tick"><li>Annual patches continue every year</li><li>Major anniversaries may get special-edition designs and added recognition</li><li>No additional jackets beyond the ten-year milestone</li></ul></div>` },
    { cls:'jacket', vis:`<div class="stack jk2">${miniJacket('denim',150)}${miniJacket('letterman',150)}</div>`, kind:'Two wearable milestones', title:'Denim at Five. Letterman at Ten.',
      sum:'Company-gifted jackets for five and ten years of commitment, consistency, and growth. Never sold, redeemed, or billed to associates.',
      more:`<div class="path-block"><h4>${J.denim.name}</h4><p>${J.denim.message}</p></div>
        <div class="path-block"><h4>${J.letterman.name}</h4><p>${J.letterman.message}</p></div>
        <p class="callout">Neither jacket requires a promotion, a title, or distinguished patches.</p>
        <a class="btn ghost" href="#collection">Explore the collection</a>` }
  ];
  document.getElementById('xpGrid').innerHTML = cards.map((c,i) => `
    <article class="xp">
      <div class="xp-visual ${c.cls}">${c.vis}</div>
      <div class="xp-body">
        <span class="xp-kind">${c.kind}</span>
        <h3>${c.title}</h3>
        <p>${c.sum}</p>
        <button class="xp-toggle" type="button" aria-expanded="false" aria-controls="xpm${i}">Show details ${icon('chevrons',16).replace(G.chevrons,'M6 9l6 6 6-6')}</button>
        <div class="xp-more" id="xpm${i}" hidden>${c.more}</div>
      </div>
    </article>`).join('');
  document.querySelectorAll('.xp-toggle').forEach(btn => btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    btn.firstChild.textContent = open ? 'Show details ' : 'Hide details ';
    document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
  }));
}

/* ============================================================
   TEN-YEAR JOURNEY
   ============================================================ */
let personaIdx = 0, sel = 0; // sel: 0–9 = year, 'denim' | 'letterman'
const NODE_POS = [[7,70],[24,30],[41,70],[58,30],[75,70],[92,40]];
const goalIcon = g => g==='met' ? icon('check',12,'#A9C23F',3) : g==='upcoming' ? icon('circleDash',12,'currentColor',2) : g==='partial' ? icon('clock',12,'#FFE89A',2.4) : icon('repeat',12,'currentColor',2.4);
const goalShort = { met:'Goals met', recovered:'Plan completed', revised:'Revised goals met', partial:'Records limited', upcoming:'Upcoming' };
function statusPill(st) {
  const [cls, txt] = CONFIG.milestoneStatus[st];
  const ic = cls==='ok' ? icon('check',13,'currentColor',3) : cls==='warn' ? icon('clock',13,'currentColor',2.4) : icon('circleDash',13,'currentColor',2.2);
  return `<span class="pill ${cls==='ok'?'':cls}">${ic}${txt}</span>`;
}
function renderPersonaBar() {
  document.getElementById('personaBar').innerHTML = CONFIG.personas.map((p,i) =>
    `<button class="persona-btn" type="button" aria-pressed="${i===personaIdx}" data-i="${i}"><small>Example ${i+1}</small><b>${p.name}</b></button>`).join('');
  document.querySelectorAll('.persona-btn').forEach(b => b.addEventListener('click', () => {
    personaIdx = +b.dataset.i; sel = 0; renderPersonaBar(); renderJourney();
  }));
}
function trailHTML(p, from, kind) {
  const W = 1000, H = 300, P = NODE_POS.map(([x,y]) => [x/100*W, y/100*H]);
  let d = `M${P[0][0]} ${P[0][1]}`;
  for (let i = 1; i < P.length; i++) { const [x0,y0]=P[i-1],[x1,y1]=P[i],mx=(x0+x1)/2; d += ` C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`; }
  let html = `<svg class="thread" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
    <path d="M-40 ${P[0][1]} L${P[0][0]} ${P[0][1]}" fill="none" stroke="rgba(169,194,63,.5)" stroke-width="3" stroke-dasharray="7 6" vector-effect="non-scaling-stroke"/>
    <path d="${d}" fill="none" stroke="#A9C23F" stroke-width="3" stroke-dasharray="9 7" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg>`;
  for (let k = 0; k < 5; k++) {
    const i = from + k, y = p.years[i], g = y[0], b = byId['y'+(i+1)], up = NODE_POS[k][1] < 50, sz = (i===4||i===9) ? 80 : 68;
    html += `<button class="node${up?' up':''}${g==='upcoming'?' future':''}" type="button" style="left:${NODE_POS[k][0]}%;top:${NODE_POS[k][1]}%;--o:${sz/2+6}px" aria-pressed="${sel===i}" data-s="${i}" aria-label="Year ${i+1}: ${CONFIG.goalLabels[g]}">
      <span class="patchwrap">${badgeSVG(b, sz, 'patch')}${y[2] ? `<span class="flag-dot" style="background:#A9C23F" title="Distinguished patch earned">${icon('shield',13,'#002D72',2.4)}</span>` : ''}</span>
      <span class="txt"><span class="nl">Year ${i+1}</span><span class="ns">${goalIcon(g)}${goalShort[g]}</span></span></button>`;
  }
  const m = p.milestones[kind], J = CONFIG.jackets[kind];
  html += `<button class="node jk up" type="button" style="left:${NODE_POS[5][0]}%;top:${NODE_POS[5][1]}%;--o:66px" aria-pressed="${sel===kind}" data-s="${kind}" aria-label="${J.name}: ${CONFIG.milestoneStatus[m.status][1]}">
      <span class="patchwrap jkwrap ${kind}">${miniJacket(kind, 104)}</span>
      <span class="txt"><span class="nl">${J.short}</span><span class="ns">${J.years}-year milestone</span></span></button>`;
  return html;
}
function renderJourney() {
  const p = CONFIG.personas[personaIdx];
  document.getElementById('personaSummary').innerHTML =
    `<span class="demo-flag">${icon('eye',14,'currentColor',2.2)}Fictional example, not an eligibility decision</span>` +
    `<span class="fact">${esc(p.role)}</span>` + p.facts.map(f => `<span class="fact">${esc(f)}</span>`).join('');
  document.getElementById('trail1').innerHTML = trailHTML(p, 0, 'denim');
  document.getElementById('trail2').innerHTML = trailHTML(p, 5, 'letterman');
  document.querySelectorAll('#journey .node').forEach(n => n.addEventListener('click', () => {
    const v = n.dataset.s; sel = isNaN(+v) ? v : +v;
    document.querySelectorAll('#journey .node').forEach(m => m.setAttribute('aria-pressed', String(m === n)));
    renderPanel();
    const panel = document.getElementById('yrPanel'), r = panel.getBoundingClientRect();
    if (r.top > innerHeight - 120) panel.scrollIntoView({ block:'nearest' });
  }));
  renderPanel();
}
function renderPanel() {
  const p = CONFIG.personas[personaIdx], el = document.getElementById('yrPanel');
  el.classList.remove('celebrate');
  if (sel === 'denim' || sel === 'letterman') {
    const J = CONFIG.jackets[sel], m = p.milestones[sel], N = J.years;
    const ys = p.years.slice(0, N), done = ys.filter(y => y[0] !== 'upcoming').length;
    const verified = ys.filter(y => y[0] === 'met').length;
    const groups = {};
    ys.forEach((y,i) => { if (y[0]!=='met' && y[0]!=='upcoming') (groups[y[0]] = groups[y[0]] || []).push(i+1); });
    const notes = Object.entries(groups).map(([g,yrs]) => `${yrs.length>1 ? 'Years '+yrs[0]+'–'+yrs[yrs.length-1] : 'Year '+yrs[0]}: ${CONFIG.goalLabels[g].toLowerCase()}`);
    const T = CONFIG.tenureOptions;
    el.innerHTML = `<div class="ms-art ${sel}">${jacketSVG(sel,'front',{width:150})}${jacketSVG(sel,'back',{width:150})}</div>
      <div>
        <span class="ms-kicker">${J.years}-Year Milestone</span>
        <h3 class="ms-title">${J.name}</h3>
        <p class="ms-statement">${J.statement}</p>
        <p style="color:var(--muted);margin-top:4px">${esc(p.name)}, ${esc(p.role)}</p>
        <div class="yr-rows">
          <div class="yr-row"><span>Service</span><b>${done} of ${N} years completed</b></div>
          <div class="yr-row"><span>Annual goal verification</span><b>${verified} of ${N} years verified${notes.length ? '<br><small style="font-weight:500;color:var(--muted)">'+notes.join('; ')+'</small>' : ''}</b></div>
          <div class="yr-row"><span>Qualification (demonstration)</span><b>${statusPill(m.status)}</b></div>
          <div class="yr-row"><span>Fulfillment scenario</span><b>${esc(m.fulfill)}</b></div>
        </div>
        ${p.id==='tenured' ? `<div class="opt-mini">${T.map(o => `<div><b>Option ${o.id}: ${o.name}</b><span>${o.id==='A' ? 'Both jackets, distribution phased' : o.id==='B' ? 'Letterman first; denim under a separate transition policy' : 'Letterman only as initial recognition'}</span></div>`).join('')}</div><p class="note" style="margin-top:8px">No option is selected. See Existing associates for the comparison.</p>` : ''}
        <p class="yr-extra" style="font-size:15px">${esc(p.note)}</p>
        <p class="yr-disclaim">Fictional example. Sample progress and outcomes are not approved eligibility decisions.</p>
      </div>`;
    if (m.status === 'meets') requestAnimationFrame(() => el.classList.add('celebrate'));
    return;
  }
  const i = sel, y = p.years[i], g = y[0], b = byId['y'+(i+1)];
  const extras = (y[2]||[]).map(id => byId[id]);
  const phase = i < 4 ? 'Years 1–4: building the foundation' : i === 4 ? 'Year 5: denim jacket milestone year' : i < 9 ? 'Years 6–9: continued growth toward ten years' : 'Year 10: letterman jacket milestone year';
  el.innerHTML = `<div>${badgeSVG(b, 130, 'patch')}</div>
    <div>
      <span class="ms-kicker">${phase}</span>
      <h3>Year ${i+1}</h3>
      <p style="color:var(--muted);margin-top:6px">${esc(p.name)}, ${esc(p.role)}</p>
      <div class="yr-rows">
        <div class="yr-row"><span>Annual Cortlandian patch</span><b>Year ${i+1}${b.milestone ? ' milestone edition' : ''}, ${g==='upcoming' ? 'upcoming' : 'awarded'}</b></div>
        <div class="yr-row"><span>Annual goals</span><b>${g==='met' ? icon('check',14,'#4D6B12',3) : ''} ${CONFIG.goalLabels[g]}</b></div>
        <div class="yr-row"><span>Growth milestone</span><b>${y[1] ? esc(y[1]) : 'Not yet reached'}</b></div>
        <div class="yr-row"><span>Review status</span><b>${CONFIG.reviewLabels[g]}</b></div>
        ${i===4||i===9 ? `<div class="yr-row"><span>Milestone check</span><b>${i===4?'Five':'Ten'}-year qualification verification</b></div>` : ''}
      </div>
      ${extras.length ? `<div class="yr-extra"><span class="note">Distinguished patch earned this year:</span>${extras.map(e => `<span class="pill neutral">${badgeSVG(e,28,'patch')}${esc(e.name)}</span>`).join('')}</div>` : ''}
      ${g==='recovered' ? `<p class="yr-extra" style="font-size:15px">Growth can include recovery. Under the proposed approach, a completed and documented development plan is reviewed rather than treated as an automatic disqualification.</p>` : ''}
      <p class="yr-disclaim">Fictional example data. Not a verified performance record.</p>
    </div>`;
}
/* ============================================================
   LEVELS
   ============================================================ */
function renderLevels() {
  const sample = { legacy:'y2', earned:'cross', distinguished:'mentor', exceptional:'impact' };
  const borders = { legacy:'Merrowed rim', earned:'Fine ring, digital only', distinguished:'Merrowed rim, stitched shield', exceptional:'Rim plus inner ring' };
  document.getElementById('levelsGrid').innerHTML = Object.entries(CONFIG.tiers).map(([k,t],i) => `
    <div class="level">
      <span class="bar" style="background:${['#A9C23F','#1F5FAE','#8FAD15','#001A45'][i]}"></span>
      <div class="shape">${badgeSVG(byId[sample[k]], 100)}</div>
      <span class="step">Level ${i+1} of 4</span>
      <h3>${t.name}</h3>
      <span class="sub">${t.sub}</span>
      <p>${t.desc}</p>
      <p style="display:flex;gap:8px;align-items:center;font-size:14px;color:var(--ink)">${shapeMini(k,16)} ${{circle:'Circle',crest:'Crest',hex:'Hexagon',shield:'Shield',seal:'Seal'}[t.shape]}, ${borders[k].toLowerCase()}</p>
      <div class="how"><b>Verified by (proposed)</b>${t.how}<br><b style="margin-top:8px">Recognition</b>${t.patch}</div>
    </div>`).join('');
}

/* ============================================================
   GALLERY
   ============================================================ */
let fColl = 'all', fType = 'all', lastFocus = null;
function renderLegend() {
  const items = [
    [badgeSVG(byId.comm,30,'digital'),'Digital badge: flat, fine ring'],
    [badgeSVG(byId.y1,30,'patch'),'Service patch: crest, stitched edge'],
    [badgeSVG(byId.mentor,30,'patch'),'Distinguished patch: shield'],
    [badgeSVG(byId.impact,30,'patch'),'Exceptional patch: seal, inner ring']
  ];
  document.getElementById('legend').innerHTML = items.map(([s,l]) => `<span>${s}${l}</span>`).join('');
}
function renderFilters() {
  const c = document.getElementById('fColl'), t = document.getElementById('fType');
  c.insertAdjacentHTML('beforeend', [{id:'all',name:'All collections'}, ...CONFIG.collections].map(x =>
    `<button class="chip" type="button" data-c="${x.id}" aria-pressed="${x.id===fColl}">${x.name}</button>`).join(''));
  t.querySelector('.count').insertAdjacentHTML('beforebegin', CONFIG.types.map(x =>
    `<button class="chip" type="button" data-t="${x.id}" aria-pressed="${x.id===fType}">${x.label}</button>`).join(''));
  c.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (!b) return; fColl = b.dataset.c; c.querySelectorAll('[data-c]').forEach(x => x.setAttribute('aria-pressed', String(x===b))); renderGallery(); });
  t.addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (!b) return; fType = b.dataset.t; t.querySelectorAll('[data-t]').forEach(x => x.setAttribute('aria-pressed', String(x===b))); renderGallery(); });
}
function matchType(b) {
  if (fType === 'all') return true;
  const ty = typeOf(b);
  if (fType === 'digital') return ty === 'digital' || ty === 'limited';
  if (fType === 'exceptional') return ty === 'exceptional' || !!b.limited;
  return ty === fType;
}
function renderGallery() {
  const out = document.getElementById('galleryOut');
  let n = 0, html = '';
  CONFIG.collections.forEach(col => {
    if (fColl !== 'all' && fColl !== col.id) return;
    const list = CONFIG.badges.filter(b => b.coll === col.id && matchType(b));
    if (!list.length) return;
    n += list.length;
    html += `<div class="coll"><div class="coll-h"><h3>${col.name}</h3><span>${col.blurb}</span></div><div class="bgrid">` +
      list.map(b => `<button class="btile" type="button" data-b="${b.id}">${badgeSVG(b, 96)}<b>${esc(b.name)}</b>
        <span class="meta">${shapeMini(b.tier,13)} ${CONFIG.tiers[b.tier].name}</span>
        <span class="meta">${isPatch(b) ? icon('circleDash',13,'currentColor',2.4).replace('stroke-width="2.4"','stroke-width="2.4" stroke-dasharray="3 3"') + 'Patch + digital' : icon('eye',13) + (b.limited ? 'Digital, limited' : 'Digital only')}</span></button>`).join('') +
      `</div></div>`;
  });
  out.innerHTML = html || `<div class="empty-state">No badges match these filters. Choose “All types” or another collection to see more.</div>`;
  document.getElementById('gCount').textContent = `${n} badge${n===1?'':'s'} shown`;
}
function openBadge(id) {
  const b = byId[id], t = CONFIG.tiers[b.tier], col = CONFIG.collections.find(c => c.id === b.coll);
  const patchPrev = isPatch(b)
    ? `<div class="patch-prev">${badgeSVG(b, 110, 'patch')}<div><b>Embroidered patch concept</b><p>${PATCH_ART[b.id] ? 'Example artwork for discussion, not a final design. ' : ''}About 3 in., merrowed edge, five or fewer thread colors. Size, backing, and placement are open decisions.</p></div></div>`
    : `<div class="no-patch"><strong>Digital only.</strong> Earned-level badges stay in the Companion and build toward Distinguished recognition. No physical patch is proposed.</div>`;
  document.getElementById('dlgBody').innerHTML = `
    <div class="dlg-info">
      <span class="proposed">Proposed concept, not approved</span>
      <h2 id="dlgTitle">${esc(b.name)}</h2>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        <span class="pill neutral">${shapeMini(b.tier,14)} ${t.name}: ${t.sub}</span>
        <span class="pill neutral">${typeLabel(b)}</span>
      </div>
      <div class="dl"><span>Collection</span>${col.name}</div>
      <div class="dl"><span>Proposed earning criteria</span>${esc(b.criteria)}</div>
      <div class="dl"><span>Evidence or verification</span><ul class="tick">${b.evidence.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>
      <div class="dl"><span>Who confirms it (proposed)</span>${t.how}</div>
    </div>
    <div class="dlg-prev">
      <h3>How it might appear in Companion</h3>
      <div class="cmp-card">${badgeSVG(b, 64, 'digital')}<div><div class="cmp-top">My Digital Collection</div><b>${esc(b.name)}</b><span>Earned Oct 2026 (example) · ${t.name}</span></div></div>
      <h3>Physical patch</h3>
      ${patchPrev}
    </div>`;
  const dlg = document.getElementById('badgeDlg');
  lastFocus = document.activeElement;
  dlg.showModal();
  document.getElementById('dlgClose').focus();
}

/* ============================================================
   BUDGET MODEL — illustrative only; never double-counts 10+ cohort
   ============================================================ */
const BS = { ...CONFIG.budget };
const money = n => '$' + Math.round(n).toLocaleString('en-US');
const num = n => Math.round(n).toLocaleString('en-US');
function calc(opt = BS.option, T = BS.years) {
  const H = BS.horizon, c = BS.central/100;
  const ong5 = BS.new5*BS.denim, ong10 = BS.new10*BS.letter, ongoing = ong5 + ong10;
  const bl59 = BS.ex59*BS.denim, bl10D = BS.ex10*BS.denim, bl10L = BS.ex10*BS.letter;
  const earned = opt==='C' ? bl59 + bl10L : bl59 + bl10D + bl10L;
  const deferred = opt==='B' ? bl10D : 0;
  const scheduled = earned - deferred;
  const schedDenim = bl59 + (opt==='A' ? bl10D : 0), schedLet = bl10L;
  const bc = BS.backlogFund==='central' ? 1 : BS.backlogFund==='costcenter' ? c : .5;
  const years = Array.from({length:H}, (_,k) => {
    const back = k < T ? scheduled/T : 0;
    const central = ongoing*c + back*bc;
    return { back, ongoing, total: ongoing+back, central, community: ongoing+back-central };
  });
  const sum = f => years.reduce((a,y) => a + y[f], 0);
  return {
    ong5, ong10, ongoing, earned, deferred, scheduled, years,
    denimTotal: ong5*H + schedDenim, letterTotal: ong10*H + schedLet,
    denimUnits: BS.new5*H + BS.ex59 + (opt==='A' ? BS.ex10 : 0), letterUnits: BS.new10*H + BS.ex10,
    deferredUnits: opt==='B' ? BS.ex10 : 0,
    total: sum('total'), central: sum('central'), community: sum('community'),
    peak: Math.max(...years.map(y => y.total))
  };
}

/* ============================================================
   COLLECTION + PATCH STUDIO
   ============================================================ */
const views = { denim:'front', letterman:'front' };
let showZones = true;
function renderCollection() {
  const J = CONFIG.jackets;
  document.getElementById('collGrid').innerHTML = ['denim','letterman'].map(k => `
    <article class="jcard ${k}">
      <div class="jstage ${k}">
        <span class="proposed illus-tag">Conceptual mockup, not approved</span>
        <div class="jview" role="group" aria-label="${J[k].short} view">
          <button type="button" class="chip sm" data-k="${k}" data-v="front" aria-pressed="${views[k]==='front'}">Front</button>
          <button type="button" class="chip sm" data-k="${k}" data-v="back" aria-pressed="${views[k]==='back'}">Back</button>
        </div>
        <div class="jart" id="jart-${k}"></div>
      </div>
      <div class="jbody">
        <span class="jyears">${J[k].tier}</span>
        <h3>${J[k].name}</h3>
        <p class="jtag">“${J[k].tagline}”</p>
        <p class="jmsg">${J[k].message}</p>
        <details class="jd" open><summary>Design concept</summary><ul class="tick">${J[k].design.map(x=>`<li>${x}</li>`).join('')}</ul></details>
        <details class="jd"><summary>Proposed qualification</summary><ul class="tick">${J[k].qualify.map(x=>`<li>${x}</li>`).join('')}</ul><p class="not-req">${J[k].notRequired}</p></details>
        <details class="jd"><summary>Fulfillment considerations</summary><ul class="tick">${J[k].fulfillment.map(x=>`<li>${x}</li>`).join('')}</ul></details>
        <div class="jcost"><span>Estimated cost, fully delivered</span><b data-cost="${k}"></b><small>Illustrative planning figure, not a supplier quote. Adjust it in the budget calculator.</small></div>
      </div>
    </article>`).join('');
  document.querySelectorAll('.jview').forEach(g => g.addEventListener('click', e => {
    const b = e.target.closest('[data-v]'); if (!b) return;
    views[b.dataset.k] = b.dataset.v;
    g.querySelectorAll('[data-v]').forEach(x => x.setAttribute('aria-pressed', String(x===b)));
    drawCollectionArt();
  }));
  document.getElementById('zoneToggle').addEventListener('click', e => {
    showZones = !showZones; e.currentTarget.setAttribute('aria-pressed', String(showZones)); drawCollectionArt();
  });
  document.getElementById('specs').innerHTML = CONFIG.patchSpecs.map(([a,b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('');
  drawCollectionArt();
}
function drawCollectionArt() {
  ['denim','letterman'].forEach(k => {
    document.getElementById('jart-'+k).innerHTML = jacketSVG(k, views[k], { zones:showZones });
  });
}

const STUDIO_PALETTE = ['y1','y2','y3','y4','y5','y6','y7','y8','y9','y10','mentor','service','eia','culture','above','impact'];
const studio = { jacket:'letterman', view:'front', picks:new Set(['y1','y2','y3','y4','y5','y6','y7','y8','y9','y10','mentor','service']) };
function placeStudio() {
  const order = [...studio.picks].sort((a,b) => STUDIO_PALETTE.indexOf(a) - STUDIO_PALETTE.indexOf(b));
  const placed = { front:[], back:[] }, overflow = [];
  order.forEach((id,i) => { if (i < SLOT_ORDER.length) { const [v,idx] = SLOT_ORDER[i]; placed[v][idx] = id; } else overflow.push(id); });
  return { placed, overflow, used: Math.min(order.length, SLOT_ORDER.length) };
}
function renderStudio() {
  const pal = document.getElementById('studioPalette');
  pal.innerHTML = STUDIO_PALETTE.map(id => `<button type="button" class="pchip" data-p="${id}" aria-pressed="${studio.picks.has(id)}">${badgeSVG(byId[id], 30, 'patch')}<span>${esc(byId[id].name)}</span></button>`).join('');
  pal.addEventListener('click', e => {
    const b = e.target.closest('[data-p]'); if (!b) return;
    const id = b.dataset.p; studio.picks.has(id) ? studio.picks.delete(id) : studio.picks.add(id);
    b.setAttribute('aria-pressed', String(studio.picks.has(id))); drawStudio();
  });
  document.getElementById('studioCtl').addEventListener('click', e => {
    const b = e.target.closest('[data-sj],[data-sv]'); if (!b) return;
    if (b.dataset.sj) studio.jacket = b.dataset.sj; if (b.dataset.sv) studio.view = b.dataset.sv;
    document.querySelectorAll('#studioCtl [data-sj]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.sj===studio.jacket)));
    document.querySelectorAll('#studioCtl [data-sv]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.sv===studio.view)));
    drawStudio();
  });
  drawStudio();
}
function drawStudio() {
  const r = placeStudio();
  document.getElementById('studioArt').innerHTML = jacketSVG(studio.jacket, studio.view, { placed:r.placed, zones:true });
  document.getElementById('studioStatus').innerHTML =
    `<b>${r.used} of ${SLOT_ORDER.length} patch spaces used</b>` +
    (r.overflow.length ? `<span class="pill warn">${icon('clock',13,'currentColor',2.4)}${r.overflow.length} selected patch${r.overflow.length>1?'es don’t':' doesn’t'} fit. Associates would choose what to display.</span>` : `<span class="note">Placement follows the standard zones, which are the same on both jackets.</span>`);
}

/* ============================================================
   EXISTING TENURED ASSOCIATES
   ============================================================ */
function renderTransition() {
  document.getElementById('optGrid').innerHTML = CONFIG.tenureOptions.map(o => `
    <article class="opt">
      <div class="opt-h"><span class="opt-letter">${o.id}</span><div><h3>Option ${o.id}</h3><p>${o.name}</p></div></div>
      <dl>
        <div><dt>Recognition</dt><dd>${o.recognition}</dd></div>
        <div><dt>Cost for the 10+ group</dt><dd data-optcost="${o.id}"></dd></div>
        <div><dt>Fulfillment</dt><dd>${o.fulfillment}</dd></div>
        <div><dt>Fairness</dt><dd>${o.fairness}</dd></div>
      </dl>
      <span class="pill neutral">${icon('circleDash',13,'currentColor',2.2)}Not selected</span>
    </article>`).join('');
}
function updateTransitionCosts() {
  const d = BS.ex10*BS.denim, l = BS.ex10*BS.letter;
  const txt = { A:`${money(d+l)}<small>${num(BS.ex10)} denim + ${num(BS.ex10)} letterman jackets</small>`,
                B:`${money(l)} scheduled<small>plus ${money(d)} earned denim obligation, timing set by the transition policy</small>`,
                C:`${money(l)}<small>${num(BS.ex10)} letterman jackets; no denim for this group</small>` };
  document.querySelectorAll('[data-optcost]').forEach(el => el.innerHTML = txt[el.dataset.optcost]);
  document.querySelectorAll('[data-cost]').forEach(el => el.textContent = money(el.dataset.cost==='denim' ? BS.denim : BS.letter));
  document.getElementById('ex10count').textContent = num(BS.ex10);
  document.getElementById('ex59count').textContent = num(BS.ex59);
}

/* ============================================================
   BUDGET CALCULATOR UI
   ============================================================ */
const BUDGET_INPUTS = [
  ['denim','Denim jacket cost','$',1], ['letter','Letterman jacket cost','$',1],
  ['new5','Newly qualifying for 5 years, per year','',1], ['new10','Newly qualifying for 10 years, per year','',1],
  ['ex59','Existing associates with 5–9 years','',1], ['ex10','Existing associates with 10+ years','',1]
];
function seg(name, opts, cur) {
  return `<div class="seg" role="group" aria-label="${name}">${opts.map(([v,l]) => `<button type="button" data-${name}="${v}" aria-pressed="${String(v)===String(cur)}">${l}</button>`).join('')}</div>`;
}
function renderBudget() {
  document.getElementById('bInputs').innerHTML = `
    <div class="bfields">${BUDGET_INPUTS.map(([k,l,pre]) => `<label class="bf"><span>${l}</span><span class="bin">${pre?`<i>${pre}</i>`:''}<input type="number" min="0" step="1" inputmode="numeric" data-in="${k}" value="${BS[k]}"></span></label>`).join('')}</div>
    <div class="bf"><span>Backlog distribution timeline</span>${seg('years',[[1,'1 year'],[3,'3 years'],[5,'5 years']],BS.years)}</div>
    <div class="bf"><span>Existing-tenure option to model <em class="note">(not a decision)</em></span>${seg('option',CONFIG.tenureOptions.map(o=>[o.id,`${o.id}: ${o.short}`]),BS.option)}</div>
    <label class="bf"><span>Central funding for jackets: <b id="cOut"></b></span><input type="range" min="0" max="100" step="5" data-in="central" value="${BS.central}" aria-describedby="cOut"></label>
    <div class="bf"><span>Backlog funding approach</span>${seg('fund',CONFIG.backlogFunding.map(f=>[f.id,f.label]),BS.backlogFund)}</div>
    <button type="button" class="btn ghost" id="bReset">Reset to illustrative defaults</button>`;
  const root = document.getElementById('bInputs');
  root.addEventListener('input', e => {
    const k = e.target.dataset.in; if (!k) return;
    const v = Math.max(0, Math.min(k==='central'?100:1e7, Math.round(+e.target.value || 0)));
    BS[k] = v; updateBudget();
  });
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-years],[data-option],[data-fund]');
    if (b) {
      if (b.dataset.years) BS.years = +b.dataset.years;
      if (b.dataset.option) BS.option = b.dataset.option;
      if (b.dataset.fund) BS.backlogFund = b.dataset.fund;
      b.parentElement.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x===b)));
      updateBudget();
    }
    if (e.target.id === 'bReset') { Object.assign(BS, CONFIG.budget); renderBudget(); updateBudget(); }
  });
  document.getElementById('fundTable').innerHTML = CONFIG.fundingTable.map(([a,b]) => `<tr><th scope="row">${a}</th><td>${b}</td></tr>`).join('');
}
function updateBudget() {
  const r = calc(), H = BS.horizon;
  document.getElementById('cOut').textContent = `${BS.central}% central · ${100-BS.central}% community/department`;
  document.getElementById('bKpis').innerHTML = `
    <div class="kpi big"><span>${H}-year planning total</span><b>${money(r.total)}</b><small>Option ${BS.option}, ${BS.years}-year backlog timeline</small></div>
    <div class="kpi"><span>Five-year denim jackets</span><b>${money(r.denimTotal)}</b><small>${num(r.denimUnits)} jackets scheduled</small></div>
    <div class="kpi"><span>Ten-year letterman jackets</span><b>${money(r.letterTotal)}</b><small>${num(r.letterUnits)} jackets scheduled</small></div>
    <div class="kpi"><span>Annual milestone fulfillment</span><b>${money(r.ongoing)}<em>/yr</em></b><small>${money(r.ong5)} denim + ${money(r.ong10)} letterman</small></div>
    <div class="kpi"><span>Existing-tenure backlog</span><b>${money(r.earned)}</b><small>Earned obligation: ${money(r.scheduled)} scheduled${r.deferred ? `, ${money(r.deferred)} deferred (${num(r.deferredUnits)} denim)` : ''}</small></div>
    <div class="kpi"><span>Year 1 distribution cost</span><b>${money(r.years[0].total)}</b><small>Central ${money(r.years[0].central)} · Community ${money(r.years[0].community)}</small></div>`;
  const max = Math.max(...r.years.map(y => y.total), 1);
  document.getElementById('bBars').innerHTML = r.years.map((y,i) => `
    <div class="brow"><span class="by">Year ${i+1}</span>
      <div class="btrack" role="img" aria-label="Year ${i+1}: ${money(y.total)} total, ${money(y.central)} central, ${money(y.community)} community or department">
        <i class="bc" style="width:${y.central/max*100}%"></i><i class="bm" style="width:${y.community/max*100}%"></i>
      </div>
      <span class="bv">${money(y.total)}${y.back ? '<small>incl. backlog</small>' : ''}</span></div>`).join('') +
    `<div class="bsplit"><span><i class="sw bc"></i>Central ${money(r.central)}</span><span><i class="sw bm"></i>Community/department ${money(r.community)}</span></div>`;
  document.getElementById('tlTable').innerHTML = `<thead><tr><th scope="col">Backlog timeline</th>${[1,3,5].map(t=>`<th scope="col"${t===BS.years?' class="cur"':''}>${t}-year</th>`).join('')}</tr></thead><tbody>` +
    [['Year 1 cost', t => money(calc(BS.option,t).years[0].total)], ['Peak annual cost', t => money(calc(BS.option,t).peak)], [`${H}-year total`, t => money(calc(BS.option,t).total)]]
      .map(([l,f]) => `<tr><th scope="row">${l}</th>${[1,3,5].map(t=>`<td${t===BS.years?' class="cur"':''}>${f(t)}</td>`).join('')}</tr>`).join('') + '</tbody>';
  document.getElementById('optTable').innerHTML = `<thead><tr><th scope="col">Existing-tenure option</th><th scope="col">10+ group receives</th><th scope="col">Earned obligation</th><th scope="col">Scheduled in plan</th><th scope="col">Deferred</th><th scope="col">${H}-year total</th></tr></thead><tbody>` +
    CONFIG.tenureOptions.map(o => { const c = calc(o.id); return `<tr${o.id===BS.option?' class="cur"':''}><th scope="row">${o.id}: ${o.name}</th><td>${o.id==='C'?'Letterman only':o.id==='B'?'Letterman now, denim later':'Denim + letterman'}</td><td>${money(c.earned)}</td><td>${money(c.scheduled)}</td><td>${c.deferred?money(c.deferred):'None'}</td><td>${money(c.total)}</td></tr>`; }).join('') + '</tbody>';
  updateTransitionCosts();
}

/* ============================================================
   COMPANION DASHBOARD PREVIEW
   ============================================================ */
function msCard(kind, D) {
  const J = CONFIG.jackets[kind], N = J.years, done = Math.min(D.year, N), pct = done/N*100;
  return `<div class="d-card ms ${kind}">
    <div class="ms-top">${miniJacket(kind, 64)}<div><span class="cmp-top">${N}-Year Milestone</span><h3 style="display:block">${J.name}</h3></div></div>
    <div class="prog-item"><div class="pt"><b>Service progress</b><span style="color:#4A5878">${done} of ${N} years</span></div><div class="meter" role="img" aria-label="${done} of ${N} years"><i style="width:${pct}%"></i></div></div>
    <dl class="ms-dl">
      <div><dt>Annual goal verification</dt><dd>${done} of ${N} years verified</dd></div>
      <div><dt>Qualification status</dt><dd><span class="sp ship">${icon('circleDash',12,'currentColor',2.2)}In progress</span></dd></div>
      <div><dt>Recognition status</dt><dd>${kind==='denim' ? 'Digital milestone unlocks at Year 5' : 'Digital milestone unlocks at Year 10'}</dd></div>
      <div><dt>Physical fulfillment</dt><dd>Not started</dd></div>
    </dl></div>`;
}
function renderShell() {
  const D = CONFIG.dash;
  const tabs = [['Home','#C9D3F7'],['My Work','#A8DDF2'],['Learning','#CFE8A9'],['My Goals','#F6DD8E'],['Toolbox','#F3C6A5'],['Our Culture','#DCCBF4']];
  const spIcon = { ok:icon('check',12,'currentColor',3), ship:icon('box',12,'currentColor',2.2), rev:icon('clock',12,'currentColor',2.4) };
  const strip = Array.from({length:10},(_,k) => {
    const n = k+1, done = n <= D.year;
    let h = `<span class="js-y" style="opacity:${done?1:.5}">${badgeSVG(byId['y'+n], 40, 'patch')}<small>${n}</small></span>`;
    if (n===5 || n===10) h += `<span class="js-j ${n===5?'denim':'letterman'}">${miniJacket(n===5?'denim':'letterman', 44)}<small>${n===5?'Denim':'Letterman'}</small></span>`;
    return h;
  }).join('<span class="js-l"></span>');
  document.getElementById('shell').innerHTML = `
    <div class="s-top">
      <svg width="34" height="34" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="none" stroke="#A6CE39" stroke-width="5"/><circle cx="20" cy="20" r="9" fill="none" stroke="#fff" stroke-width="3"/></svg>
      <strong style="font-size:17px">Cortland Companion</strong>
      <span class="s-search" aria-hidden="true">Search guides, tools and checklists</span>
      <span class="s-who"><span>${D.name} <span style="opacity:.75">(example)</span></span><i aria-hidden="true">${D.initials}</i></span>
    </div>
    <div class="s-tabs" aria-hidden="true">${tabs.map(([l,c]) => `<span class="s-tab${l==='My Goals'?' on':''}" style="background:${c}">${l}</span>`).join('')}</div>
    <div class="s-body">
      <div class="s-aside">
        <div class="s-pages" aria-hidden="true"><span>My Development Goals</span><span class="on">My Legacy Journey<em>New</em></span></div>
        <div class="s-note"><b>Preview data</b>Every name, date, and status here is a fictional example for discussion.</div>
      </div>
      <div class="s-main">
        <div class="data-flag">${icon('eye',16,'currentColor',2.2)}<span><strong>Concept preview.</strong> Not a live performance evaluation system. Existing Companion demo metrics are not treated as verified records.</span></div>
        <div class="d-hero">
          <div><p class="k">${D.role} · Hired ${D.hire}</p><h3>My Legacy Journey</h3><p>Year ${D.year} complete. Every year builds your story; every achievement adds to your legacy.</p></div>
        </div>
        <div class="d-card wide"><h3>One connected journey <small>Years 1 to 10</small></h3><div class="jstrip">${strip}</div></div>
        <div class="d-grid">
          ${msCard('denim', D)}${msCard('letterman', D)}
          <p class="priv">${icon('lock',14,'#0B3A7A',2.2)}Goal verification details are visible only to you and authorized program owners. Neither milestone depends on promotion.</p>
          <div class="d-card"><h3>My Digital Collection <small>${D.digital.length} badges</small></h3>
            <div class="d-badges">${D.digital.map(id => `<span title="${esc(byId[id].name)}">${badgeSVG(byId[id], 50, 'digital')}<span class="sr-only">${esc(byId[id].name)}</span></span>`).join('')}</div></div>
          <div class="d-card"><h3>My Patch Collection <small>Verification status</small></h3>
            <div class="d-patches">${D.patches.map(p => `<div class="d-patch">${badgeSVG(byId[p.id], 50, 'patch')}<div><b>${esc(byId[p.id].name)}</b><span class="s">${p.when}</span></div><span class="sp ${p.status}">${spIcon[p.status]}${p.label}</span></div>`).join('')}</div></div>
          <div class="d-card"><h3>Achievements in Progress</h3>
            <div class="prog">${D.inProgress.map(x => `<div class="prog-item"><div class="pt"><b>${esc(byId[x.id].name)}</b><span style="color:#4A5878">${x.pct}%</span></div>
              <div class="meter" role="img" aria-label="${x.pct} percent complete"><i style="width:${x.pct}%"></i></div>
              <ul>${x.reqs.map(([s,t]) => `<li>${s==='done' ? icon('check',13,'#4D6B12',3) : icon('circleDash',13,'#4A5878',2)}${esc(t)}</li>`).join('')}</ul></div>`).join('')}</div></div>
          <div class="d-card"><h3>Recommended Opportunities <small>For your role</small></h3>
            <div class="rec">${D.recommended.map(r => `<div class="rec-item">${badgeSVG(byId[r.id], 44)}<div><b>${esc(byId[r.id].name)}</b><span>${esc(r.why)}</span></div></div>`).join('')}</div></div>
          <div class="d-card"><h3>My Growth Story</h3>
            <ul class="story">${D.story.map(([d,t]) => `<li><span>${d}</span>${esc(t)}</li>`).join('')}</ul></div>
          <div class="d-card"><h3>Recognition History <small>Verified awards</small></h3>
            <div class="tblwrap"><table class="hist"><thead><tr><th scope="col">Date</th><th scope="col">Recognition</th><th scope="col">Confirmed by</th></tr></thead><tbody>${D.history.map(([d,a,v]) => `<tr><td>${d}</td><td>${esc(a)}</td><td>${esc(v)}</td></tr>`).join('')}</tbody></table></div></div>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   DECISIONS (session-only markers, never saved)
   ============================================================ */
const decState = {};
function renderDecisions() {
  document.getElementById('decGrid').innerHTML = CONFIG.decisions.map((d,n) => {
    decState[d.id] = decState[d.id] ?? 0;
    return `<article class="dec">
      <div class="dec-h"><span class="ic">${icon(d.icon,22,'currentColor',1.8)}</span><div><span class="dec-n">Decision ${n+1} · <span class="dec-st ${d.status.toLowerCase()}">${d.status}</span></span><h3>${d.title}</h3><p class="q">${d.q}</p></div></div>
      <div class="stepper" role="group" aria-label="${d.title} discussion marker, not saved" data-d="${d.id}">
        ${CONFIG.stages.map((s,i) => `<button type="button" data-s="${i}" aria-pressed="${i===decState[d.id]}" class="${i<decState[d.id]?'past':''}">${s}</button>`).join('')}
      </div>
    </article>`;
  }).join('');
  document.querySelectorAll('.stepper').forEach(g => g.addEventListener('click', e => {
    const b = e.target.closest('[data-s]'); if (!b) return;
    const v = +b.dataset.s; decState[g.dataset.d] = v;
    g.querySelectorAll('button').forEach((x,i) => { x.setAttribute('aria-pressed', String(i===v)); x.classList.toggle('past', i<v); });
  }));
}
/* ============================================================
   PRINCIPLES
   ============================================================ */
function renderPrinciples() {
  document.getElementById('princGrid').innerHTML = CONFIG.principles.map(p =>
    `<div class="pr">${icon(p.glyph,40,'#8FAD15',1.6)}<h3>${p.title}</h3><p>${p.text}</p></div>`).join('');
}

/* ============================================================
   SECTION NAV highlight
   ============================================================ */
function wireNav() {
  const links = [...document.querySelectorAll('#secnav a')];
  const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.removeAttribute('aria-current'));
        const a = map.get(en.target.id);
        if (a) {
          a.setAttribute('aria-current','true');
          /* Slide only the menu bar sideways; never scroll the page itself */
          const ul = document.getElementById('secnav');
          const ar = a.getBoundingClientRect(), ur = ul.getBoundingClientRect();
          if (ar.left < ur.left) ul.scrollLeft += ar.left - ur.left - 12;
          else if (ar.right > ur.right) ul.scrollLeft += ar.right - ur.right + 12;
        }
      }
    });
  }, { rootMargin:'-45% 0px -50% 0px' });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* ============================================================
   INIT
   ============================================================ */
renderHero(); renderXP(); renderCollection(); renderStudio(); renderPersonaBar(); renderJourney(); renderLevels();
renderLegend(); renderFilters(); renderGallery(); renderTransition(); renderBudget(); updateBudget();
renderShell(); renderDecisions(); renderPrinciples();
document.getElementById('galleryOut').addEventListener('click', e => { const t = e.target.closest('[data-b]'); if (t) openBadge(t.dataset.b); });
const dlg = document.getElementById('badgeDlg');
document.getElementById('dlgClose').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('close', () => { if (lastFocus) lastFocus.focus(); });
wireNav();
