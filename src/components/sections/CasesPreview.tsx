import Link from "next/link";

const CASES = [
  { id: "01", type: "Full Arch Restoration", material: "Monolithic Zirconia" },
  { id: "02", type: "Implant Bridge", material: "PFM · 6 Units" },
  { id: "03", type: "Anterior Crowns", material: "IPS e.max · 4 Units" },
];

export default function CasesPreview() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
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
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 self-start text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-900 lg:self-auto lg:pb-1"
          >
            View All Cases
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Gallery */}
        <div className="grid gap-6 sm:grid-cols-3">
          {CASES.map(({ id, type, material }) => (
            <div key={id} className="group flex flex-col gap-4">

              {/* Image placeholder */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden border border-gray-200 bg-gray-100"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              >
                {/* Precision mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-10 w-10">
                    <div className="absolute inset-0 border border-gray-300" />
                    <div className="absolute inset-[6px] border border-gray-200" />
                  </div>
                </div>

                {/* Case ID — top right */}
                <span className="absolute right-4 top-4 text-[10px] font-medium tracking-[0.1em] text-gray-300">
                  {id}
                </span>

                {/* Hover wash */}
                <div className="absolute inset-0 bg-gray-900/0 transition-colors duration-300 group-hover:bg-gray-900/4" />
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-1">
                <p className="text-[13px] font-medium tracking-[-0.005em] text-gray-900">
                  {type}
                </p>
                <p className="text-[12px] text-gray-400">{material}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
