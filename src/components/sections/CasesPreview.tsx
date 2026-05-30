import Link from "next/link";
import { CASES } from "@/lib/cases";
import { CaseImage, CaseCaption } from "@/components/ui/CaseCard";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

const FEATURED_CASES = CASES.slice(0, 3);

export default function CasesPreview() {
  const [featured, ...secondary] = FEATURED_CASES;

  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <SectionEyebrow label="Featured Cases" />
          <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[40px]">
            Work that speaks
            <br />
            <span className="font-normal">for itself.</span>
          </h2>
        </div>

        {/* ── Desktop: featured left + two stacked right ── */}
        <div className="hidden gap-5 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

          <div className="flex flex-col gap-5">
            <CaseImage item={featured} className="h-[490px]" />
            <CaseCaption item={featured} size="md" />
          </div>

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
          {FEATURED_CASES.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <CaseImage item={item} className="aspect-[4/3]" />
              <CaseCaption item={item} size="sm" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center border-t border-gray-200 pt-14">
          <Link
            href="/portfolio"
            className="inline-flex items-center rounded-full border border-gray-800 px-9 py-3.5 text-[13px] font-medium tracking-[0.03em] text-gray-900 transition-all duration-200 hover:bg-gray-900 hover:text-white"
          >
            View Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}
