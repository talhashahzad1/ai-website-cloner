import React from "react";

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130,000+", label: "Residential Units Managed" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "30%+", label: "Avg. Cost Savings" },
];

export function StatsBar() {
  return (
    <section
      className="dot-grid bg-[#07213a] py-16 lg:py-20"
      aria-label="REA by the numbers"
    >
      <div className="mx-auto max-w-[1152px] px-6">
        <p className="mb-10 text-center text-xs font-normal uppercase tracking-widest text-[#51cec8]">
          REA by the numbers
        </p>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="text-left">
              <div className="font-heading text-3xl font-bold text-white lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
