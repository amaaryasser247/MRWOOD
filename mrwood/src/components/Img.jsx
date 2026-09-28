import { useState } from "react";
import img from "../assets/images";

/**
 * Every photo on the site goes through here.
 * - resolves the path from src/assets/images (placeholder until the real file exists)
 * - lazy-loads below the fold
 * - fades in once decoded so the page never flashes
 */
export default function Img({
  src,
  alt = "",
  ratio = "portrait",
  label,
  className = "",
  imgClassName = "",
  eager = false,
  zoom = true,
}) {
  const [loaded, setLoaded] = useState(false);
  const resolved = img(src, { ratio, label });

  return (
    <div className={`relative overflow-hidden bg-muted ${className}`}>
      <img
        src={resolved}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-soft ${
          loaded ? "opacity-100" : "opacity-0"
        } ${zoom ? "group-hover:scale-[1.04]" : ""} ${imgClassName}`}
      />
    </div>
  );
}
