/**
 * Procedural placeholder artwork.
 *
 * These SVGs only exist so the layout can be judged before MRWOOD's real
 * photography is in place. The moment a real file is dropped into
 * `src/assets/images/...`, the loader in `src/assets/images/index.js` picks it
 * up and the placeholder is never generated for that slot again.
 *
 * Nothing else in the app imports this file directly.
 */

const PALETTES = [
  { wall: "#efe9df", floor: "#ddd2c1", wood: ["#9a6b40", "#7c5231", "#5f3d24"] }, // walnut
  { wall: "#f4efe6", floor: "#e3d9c8", wood: ["#c9a377", "#ab8355", "#8c6840"] }, // oak
  { wall: "#eae4da", floor: "#d6cab8", wood: ["#6a4a33", "#4d3524", "#382518"] }, // wenge
  { wall: "#f2ece2", floor: "#e0d5c3", wood: ["#d8c3a3", "#bfa47f", "#9d8460"] }, // ash
  { wall: "#e9e3d8", floor: "#d3c8b5", wood: ["#8a5f3c", "#6d472b", "#523520"] }, // sapele
];

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function grain(seed, x, y, w, h, tone) {
  let lines = "";
  const count = 9;
  for (let i = 0; i < count; i += 1) {
    const t = (i + 1) / (count + 1);
    const gx = x + w * t + (((seed >> i) % 7) - 3);
    const sway = ((seed >> (i + 3)) % 9) - 4;
    lines +=
      `<path d="M${gx.toFixed(1)} ${y} C ${(gx + sway).toFixed(1)} ${y + h * 0.3},` +
      ` ${(gx - sway).toFixed(1)} ${y + h * 0.7}, ${gx.toFixed(1)} ${y + h}"` +
      ` stroke="${tone}" stroke-opacity="0.22" stroke-width="1" fill="none"/>`;
  }
  return lines;
}

/**
 * @param {string} seedKey  stable key (image path) so a slot always looks the same
 * @param {number} w        viewBox width
 * @param {number} h        viewBox height
 * @param {string} label    small caption drawn in the corner
 */
export function placeholderImage(seedKey = "mrwood", w = 900, h = 1200, label = "") {
  const seed = hash(seedKey);
  const p = PALETTES[seed % PALETTES.length];
  const [light, mid, dark] = p.wood;

  const portrait = h >= w;
  const doorW = portrait ? w * 0.52 : w * 0.3;
  const doorH = portrait ? h * 0.78 : h * 0.72;
  const doorX = portrait ? (w - doorW) / 2 : w * 0.12 + (seed % 3) * w * 0.06;
  const doorY = h - doorH - h * 0.1;
  const frame = Math.max(6, w * 0.012);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label || "MRWOOD placeholder"}">
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${p.wall}"/>
      <stop offset="1" stop-color="${p.floor}"/>
    </linearGradient>
    <linearGradient id="slab" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${dark}"/>
      <stop offset="0.28" stop-color="${light}"/>
      <stop offset="0.62" stop-color="${mid}"/>
      <stop offset="1" stop-color="${dark}"/>
    </linearGradient>
    <linearGradient id="light" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="0.55" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#wall)"/>
  <rect y="${h * 0.9}" width="${w}" height="${h * 0.1}" fill="${p.floor}"/>
  <rect y="${h * 0.9}" width="${w}" height="2" fill="#000" opacity="0.06"/>

  <rect x="${doorX - frame}" y="${doorY - frame}" width="${doorW + frame * 2}" height="${doorH + frame}" fill="${p.wall}" opacity="0.9"/>
  <rect x="${doorX - frame}" y="${doorY - frame}" width="${doorW + frame * 2}" height="${doorH + frame}" fill="none" stroke="#000" stroke-opacity="0.08"/>

  <rect x="${doorX}" y="${doorY}" width="${doorW}" height="${doorH}" fill="url(#slab)"/>
  ${grain(seed, doorX, doorY, doorW, doorH, dark)}
  <rect x="${doorX}" y="${doorY}" width="${doorW}" height="${doorH}" fill="url(#light)"/>
  <rect x="${doorX + doorW * 0.08}" y="${doorY + doorH * 0.06}" width="${doorW * 0.84}" height="${doorH * 0.88}" fill="none" stroke="#000" stroke-opacity="0.12"/>
  <rect x="${doorX + doorW * 0.86}" y="${doorY + doorH * 0.48}" width="${Math.max(4, doorW * 0.035)}" height="${doorH * 0.055}" rx="${Math.max(2, doorW * 0.017)}" fill="#2b2622" opacity="0.75"/>

  <rect x="${doorX + doorW + frame}" y="${doorY - frame}" width="${w * 0.03}" height="${doorH + frame}" fill="#000" opacity="0.05"/>

  <text x="${w * 0.04}" y="${h - h * 0.035}" font-family="Inter, Arial, sans-serif" font-size="${Math.round(w * 0.022)}" fill="#2b2622" fill-opacity="0.5" letter-spacing="2">${label || "MRWOOD"}</text>
</svg>`;
}

export function placeholderDataUri(seedKey, w, h, label) {
  const svg = placeholderImage(seedKey, w, h, label);
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
