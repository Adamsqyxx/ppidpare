/**
 * Ikon Material Symbols (outlined) — pembungkus tipis supaya
 * className/tone konsisten di seluruh halaman.
 */
type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  size?: number;
  "aria-hidden"?: boolean;
};

export function Icon({
  name,
  className = "",
  filled = false,
  size = 20,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={`material-symbols-outlined select-none leading-none ${className}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {name}
    </span>
  );
}
