interface SectionEyebrowProps {
  label: string;
  /** Tailwind margin class applied to the wrapper — defaults to "mb-5" */
  className?: string;
  /** "light" (default) renders one line on a light background.
   *  "dark" renders two flanking lines on a dark background. */
  variant?: "light" | "dark";
  centered?: boolean;
}

export default function SectionEyebrow({
  label,
  className = "mb-5",
  variant = "light",
  centered = false,
}: SectionEyebrowProps) {
  const lineColor = variant === "dark" ? "bg-gray-700" : "bg-gray-300";
  const labelColor = variant === "dark" ? "text-gray-500" : "text-gray-400";

  return (
    <div
      className={`flex items-center gap-4 ${centered ? "justify-center" : ""} ${className}`}
    >
      <span className={`h-px w-6 shrink-0 ${lineColor}`} />
      <span className={`text-[11px] font-medium uppercase tracking-[0.14em] ${labelColor}`}>
        {label}
      </span>
      {centered && <span className={`h-px w-6 shrink-0 ${lineColor}`} />}
    </div>
  );
}
