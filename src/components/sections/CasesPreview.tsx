import Link from "next/link";

const CASES = [
  {
    id: "01",
    title: "Full Arch Implant Restoration",
    type: "All-on-4 · Monolithic Zirconia",
    description:
      "Complete upper and lower arch reconstruction requiring full-arch implant support. Fabricated in high-strength monolithic zirconia for long-term durability and lifelike optical properties.",
    featured: true,
  },
  {
    id: "02",
    title: "Anterior Aesthetic Veneers",
    type: "Veneers · IPS e.max",
    description:
      "Six-unit anterior case demanding precise shade matching and natural translucency. Minimal-preparation design preserved maximum tooth structure.",
    featured: false,
  },
  {
    id: "03",
    title: "Posterior Implant Bridge",
    type: "Fixed Bridge · Screw-Retained",
    description:
      "Three-unit posterior bridge on titanium abutments, engineered for optimal occlusal loading and unobstructed hygienic access.",
    featured: false,
  },
];

type CaseItem = (typeof CASES)[number];

function CaseImage({
  item,
  className = "",
}: {
  item: CaseItem;
  className?: string;
}) {
  return (
    <div className={`group relative overflow-hidden bg-stone-100 ${className}`}>

      {/* ─── Drop <Image fill className="object-cover" alt="..." /> here ─── */}

      {/* Case ID — top left */}
      <span className="absolute left-4 top-4 z-10 select-none text-[10px] font-medium tracking-[0.12em] text-stone-400">
        {item.id}
      </span>

      {/* Photo-style gradient overlay — persists when real image is added */}
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

function CaseCaption({
  item,
  size = "md",
}: {
  item: CaseItem;
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

export default function CasesPreview() {
  const [featured, ...secondary] = CASES;

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-6 shrink-0 bg-gray-300" />
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-gray-400">
              Featured Cases
            </span>
          </div>
          <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[40px]">
            Work that speaks
            <br />
            <span className="font-normal">for itself.</span>
          </h2>
        </div>

        {/* ── Desktop: featured left + two stacked right ── */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          {/* Featured case — tall portrait */}
          <div className="flex flex-col gap-5">
            <CaseImage item={featured} className="h-[490px]" />
            <CaseCaption item={featured} size="md" />
          </div>

          {/* Two secondary cases — half height each */}
          <div className="flex flex-col gap-5">
            {secondary.map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <CaseImage item={item} className="h-[228px]" />
                <CaseCaption item={item} size="sm" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="flex flex-col gap-10 lg:hidden">
          {CASES.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <CaseImage item={item} className="aspect-[4/3]" />
              <CaseCaption item={item} size="sm" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center border-t border-gray-200 pt-14">
          <Link
            href="/cases"
            className="inline-flex items-center rounded-full border border-gray-800 px-9 py-3.5 text-[13px] font-medium tracking-[0.03em] text-gray-900 transition-all duration-200 hover:bg-gray-900 hover:text-white"
          >
            View Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
