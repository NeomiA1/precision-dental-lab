import type { DentalCase } from "@/lib/cases";

export function CaseImage({
  item,
  className = "",
}: {
  item: DentalCase;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-stone-100 ${className}`}>

      {/* ── Swap for: <Image src={item.imagePath} fill className="object-cover" alt={item.title} /> ── */}

      {/* Case ID */}
      <span className="absolute left-4 top-4 z-10 select-none text-[10px] font-medium tracking-[0.12em] text-stone-400">
        {item.id}
      </span>

      {/* Gradient overlay — survives when a real photo is placed beneath */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/30 via-black/10 to-transparent pb-4 pl-4 pr-4 pt-16">
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white/75">
          {item.type}
        </span>
      </div>

      {/* Hover veil */}
      <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/[0.06]" />
    </div>
  );
}

export function CaseCaption({
  item,
  size = "md",
}: {
  item: DentalCase;
  size?: "sm" | "md";
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3
        className={`font-medium tracking-[-0.01em] text-gray-900 ${
          size === "md" ? "text-[15px]" : "text-[13px]"
        }`}
      >
        {item.title}
      </h3>
      <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-gray-400">
        {item.type}
      </p>
      <p
        className={`mt-0.5 leading-[1.75] text-gray-500 ${
          size === "md" ? "text-[13px]" : "text-[12px]"
        }`}
      >
        {item.description}
      </p>
    </div>
  );
}
