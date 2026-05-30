import Link from "next/link";
import { SERVICES } from "@/lib/services";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function ServicesPreview() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionEyebrow label="Our Services" />
            <h2 className="text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[40px]">
              Precision at every
              <br />
              <span className="font-normal">stage of the process.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start text-[13px] font-normal tracking-[0.02em] text-gray-500 transition-colors duration-200 hover:text-gray-900 lg:self-auto lg:pb-1"
          >
            All Services
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>

        {/* Card grid — gap-px with bg-gray-100 creates hairline dividers */}
        <div className="grid gap-px bg-gray-100 outline outline-1 outline-gray-100 sm:grid-cols-2">
          {SERVICES.map(({ number, title, description }) => (
            <div
              key={number}
              className="group flex flex-col justify-between gap-10 bg-white p-8 transition-colors duration-200 hover:bg-gray-50 lg:p-10"
            >
              <div className="flex flex-col gap-5">
                <span className="text-[11px] font-medium tracking-[0.1em] text-gray-300">
                  {number}
                </span>
                <div>
                  <h3 className="mb-3 text-[16px] font-medium leading-snug tracking-[-0.01em] text-gray-900">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[1.75] text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
              <span className="inline-block text-gray-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-gray-500">
                →
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
