import { placeholderDataUri } from "../../lib/placeholder";

/**
 * ---------------------------------------------------------------------------
 * HOW TO ADD THE REAL MRWOOD PHOTOS
 * ---------------------------------------------------------------------------
 * Drop the photo into this folder using the exact path written in the data
 * files (src/data/doors.js, projects.js, site.js). Extension does not matter —
 * .jpg, .jpeg, .png, .webp and .avif all resolve.
 *
 *   data says:  image: "doors/modern/mr-001.jpg"
 *   you save:   src/assets/images/doors/modern/mr-001.jpg   ✅ done
 *
 * Nothing else to change. Until the file exists, a generated placeholder is
 * shown in its place so the layout never breaks.
 * ---------------------------------------------------------------------------
 */

const files = import.meta.glob("./**/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

// "doors/modern/mr-001.jpg" -> resolved url, keyed without the extension too
const registry = {};
for (const [path, url] of Object.entries(files)) {
  const clean = path.replace(/^\.\//, "");
  registry[clean] = url;
  registry[clean.replace(/\.[^.]+$/, "")] = url;
}

const RATIOS = {
  portrait: [900, 1200],
  landscape: [1600, 1067],
  wide: [1920, 1080],
  square: [1000, 1000],
};

/**
 * Resolve an image path from src/assets/images, falling back to a placeholder.
 * @param {string} path   e.g. "doors/modern/mr-001.jpg"
 * @param {object} [opts] { ratio: "portrait"|"landscape"|"wide"|"square", label }
 */
export function img(path, opts = {}) {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path)) return path;

  const key = path.replace(/^\.?\//, "");
  const found = registry[key] || registry[key.replace(/\.[^.]+$/, "")];
  if (found) return found;

  const [w, h] = RATIOS[opts.ratio] || RATIOS.portrait;
  return placeholderDataUri(key, w, h, opts.label || "");
}

/** True when the real photo is in place (used only by the dev banner). */
export function hasImage(path) {
  if (!path) return false;
  const key = path.replace(/^\.?\//, "");
  return Boolean(registry[key] || registry[key.replace(/\.[^.]+$/, "")]);
}

export default img;
