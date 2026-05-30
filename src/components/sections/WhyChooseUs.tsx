const REASONS = [
  {
    number: "01",
    title: "Precision Craftsmanship",
    description:
      "Every restoration is built to exact specifications using advanced digital scanning, design, and milling technology.",
  },
  {
    number: "02",
    title: "Fast Turnaround",
    description:
      "Streamlined production workflows ensure reliable delivery timelines your practice can schedule around.",
  },
  {
    number: "03",
    title: "Digital Workflow",
    description:
      "Fully integrated CAD/CAM systems from scan to final product — reducing errors and improving predictability.",
  },
  {
    number: "04",
    title: "Reliable Communication",
    description:
      "Dedicated case management with clear updates at every stage. No surprises, no delays, no guesswork.",
  },
];

import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <SectionEyebrow label="Why Clinics Choose Us" />
          <h2 className="max-w-lg text-[34px] font-light leading-[1.1] tracking-[-0.02em] text-gray-900 sm:text-[40px]">
            Built around the
            <br />
            <span className="font-normal">needs of your practice.</span>
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid gap-px bg-gray-100 outline outline-1 outline-gray-100 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ number, title, description }) => (
            <div
              key={number}
              className="flex flex-col gap-6 bg-white p-8 lg:p-9"
            >
              <span className="text-[11px] font-medium tracking-[0.1em] text-gray-300">
                {number}
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-[15px] font-medium leading-snug tracking-[-0.005em] text-gray-900">
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.8] text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
