import Link from "next/link";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const TRUST_ITEMS = [
  { stat: "3,000+", label: "Successful Cases" },
  { stat: "Fort Lauderdale", label: "Florida" },
  { stat: "Full Arch & Implants", label: "Specialists" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-white pt-20">

      {/* Main content — fills remaining height, centers grid */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-20 lg:px-12 lg:py-0">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] xl:gap-24">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col">

            <SectionEyebrow label="Fort Lauderdale Dental Laboratory" className="mb-10" />

            {/* Headline */}
            <h1 className="mb-7 text-[44px] font-light leading-[1.06] tracking-[-0.025em] text-gray-900 sm:text-[52px] lg:text-[58px] xl:text-[64px]">
              Dental restorations
              <br />
              <span className="font-normal">crafted to</span>
              <br />
              clinical precision.
            </h1>

            {/* Description */}
            <p className="mb-12 max-w-[420px] text-[15px] leading-[1.75] text-gray-500">
              Full arch restorations, implants, and crowns engineered
              to exacting tolerances — trusted by dental professionals
              across South Florida.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-full bg-gray-900 px-8 py-3.5 text-[13px] font-medium tracking-[0.03em] text-white transition-colors duration-200 hover:bg-gray-700"
              >
                View Cases
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-900"
              >
                Contact Us
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

          </div>

          {/* ── Right: Visual composition ── */}
          <div className="relative hidden lg:block">
            <div className="relative ml-auto max-w-[440px]">

              {/* Offset accent — top right */}
              <div className="absolute -right-4 -top-4 h-[88px] w-[88px] border border-gray-200" />

              {/* Main panel */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden border border-gray-200 bg-gray-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              >
                {/* Precision mark — centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-5">
                    <div className="relative h-[52px] w-[52px]">
                      <div className="absolute inset-0 border border-gray-300" />
                      <div className="absolute inset-[7px] border border-gray-200" />
                      <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gray-300">
                      Laboratory
                    </span>
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="absolute inset-x-0 bottom-0 border-t border-gray-200/70 bg-white/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.14em] text-gray-400">
                    Precision Prosthetics · Fort Lauderdale
                  </p>
                </div>
              </div>

              {/* Offset accent — bottom left */}
              <div className="absolute -bottom-4 -left-4 h-[52px] w-[52px] bg-gray-100" />

            </div>
          </div>

        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex divide-x divide-gray-100 py-5">
            {TRUST_ITEMS.map(({ stat, label }) => (
              <div
                key={label}
                className="first:pr-8 first:sm:pr-12 [&:not(:first-child):not(:last-child)]:px-8 [&:not(:first-child):not(:last-child)]:sm:px-12 last:pl-8 last:sm:pl-12"
              >
                <p className="text-[14px] font-medium text-gray-900">{stat}</p>
                <p className="mt-0.5 text-[11px] tracking-[0.03em] text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
