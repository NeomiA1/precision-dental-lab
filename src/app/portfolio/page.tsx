import type { Metadata } from "next";
import Link from "next/link";
import { CASES, CASE_CATEGORIES, type CaseCategory } from "@/lib/cases";
import { CaseImage, CaseCaption } from "@/components/ui/CaseCard";
import { CONTACT } from "@/lib/constants";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}): Promise<Metadata> {
  const { category } = await searchParams;
  const cat = CASE_CATEGORIES.find((c) => c.value === category);

  if (cat) {
    return {
      title: `${cat.label} Cases`,
      description: `Browse our ${cat.label.toLowerCase()} dental laboratory cases from Fort Lauderdale, Florida — fabricated to exacting clinical standards.`,
      alternates: { canonical: `/portfolio?category=${cat.value}` },
    };
  }

  return {
    title: "Case Portfolio",
    description:
      "Browse the Precision Prosthetics case portfolio — full arch restorations, implants, crowns, and zirconia prosthetics from Fort Lauderdale, Florida.",
    alternates: { canonical: "/portfolio" },
  };
}

const ALL_FILTERS = [
  { label: "All", value: "all" as const },
  ...CASE_CATEGORIES,
];

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category ?? "all";

  const filteredCases =
    activeCategory === "all"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  const categoryCounts = CASE_CATEGORIES.reduce<Record<string, number>>(
    (acc, { value }) => {
      acc[value] = CASES.filter((c) => c.category === value).length;
      return acc;
    },
    {}
  );

  return (
    <main>

      {/* ── Page hero ── */}
      <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl">
            <SectionEyebrow label="Case Portfolio" className="mb-6" />
            <h1 className="mb-5 text-[44px] font-light leading-[1.06] tracking-[-0.025em] text-gray-900 sm:text-[52px]">
              Precision work,
              <br />
              <span className="font-normal">case by case.</span>
            </h1>
            <p className="max-w-md text-[15px] leading-[1.75] text-gray-500">
              {CASES.length} documented cases across full arch, crowns, implants, and zirconia restorations.
              Each fabricated to exacting clinical standards.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters + gallery ── */}
      <section className="bg-gray-50 pb-24 pt-0 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Category filters */}
          <div className="mb-12 border-b border-gray-200">
            <div className="flex items-end gap-8 overflow-x-auto pb-0 scrollbar-none">
              {ALL_FILTERS.map(({ label, value }) => {
                const isActive = activeCategory === value;
                const count = value === "all" ? CASES.length : (categoryCounts[value] ?? 0);
                const href =
                  value === "all" ? "/portfolio" : `/portfolio?category=${value}`;

                return (
                  <Link
                    key={value}
                    href={href}
                    className={`relative shrink-0 pb-4 transition-colors duration-200 ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    <span
                      className={`text-[13px] tracking-[0.01em] ${
                        isActive ? "font-medium" : "font-normal"
                      }`}
                    >
                      {label}
                    </span>
                    <span className="ml-1.5 text-[11px] text-gray-300">
                      ({count})
                    </span>

                    {/* Active underline */}
                    {isActive && (
                      <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gray-900" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Case grid */}
          {filteredCases.length > 0 ? (
            <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCases.map((item) => (
                <div key={item.id} className="flex flex-col gap-4">
                  <CaseImage item={item} className="aspect-[3/4]" />
                  <CaseCaption item={item} size="md" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-24 text-center">
              <p className="text-[15px] font-medium text-gray-900">No cases in this category yet.</p>
              <p className="text-[13px] text-gray-400">Check back soon — new cases are added regularly.</p>
            </div>
          )}

        </div>
      </section>

      {/* ── Page CTA ── */}
      <section className="bg-gray-900 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mx-auto max-w-xl text-center">

            <SectionEyebrow
              label="Partner With Us"
              variant="dark"
              centered
              className="mb-8"
            />

            <h2 className="mb-5 text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px]">
              Ready to start
              <br />
              <span className="font-normal">your next case?</span>
            </h2>

            <p className="mb-12 text-[15px] leading-[1.75] text-gray-400">
              Send us your case details and we&apos;ll respond within one business day.
              We work with dental practices of all sizes across South Florida.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.03em] text-gray-900 transition-colors duration-200 hover:bg-gray-100"
              >
                Start a Case
              </Link>
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-200"
              >
                {CONTACT.phoneFormatted}
              </a>
            </div>

            <p className="mt-12 text-[11px] uppercase tracking-[0.14em] text-gray-600">
              {CONTACT.location}
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}
