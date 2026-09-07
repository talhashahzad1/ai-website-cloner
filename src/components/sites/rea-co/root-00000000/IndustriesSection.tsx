import Image from "next/image";
import Link from "next/link";
import type { IndustryLink } from "@/types/rea-co";

const industries: IndustryLink[] = [
  { label: "Property Management", href: "/property-management/" },
  { label: "Commercial Real Estate", href: "/commercial/" },
  { label: "Owner Operators", href: "/owner-operators/" },
  { label: "Developers", href: "/developers/" },
  { label: "Construction", href: "/construction/" },
  { label: "HOAs", href: "/hoa/" },
  { label: "Syndicators", href: "/real-estate-syndication-accounting/" },
  { label: "Assisted Living", href: "/assisted-living/" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 relative isolate overflow-hidden bg-navy"
    >
      {/* Background Image */}
      <Image
        src="/sites/rea-co/root-00000000/images/commercial-aerial.webp"
        alt=""
        aria-hidden
        fill
        className="absolute inset-0 h-full w-full object-cover"
        unoptimized
      />

      {/* Solid Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(7,33,58,0.82)" }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            Industries We Work With
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal-light">
            Specialized Expertise Across Every Real Estate Vertical
          </h3>
          <p className="measure mt-5 leading-relaxed text-white/80">
            From property management and commercial real estate to HOAs,
            construction, and assisted living.
          </p>
        </div>

        {/* Industry Cards — 4 cols on lg */}
        <ul className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <li key={industry.label}>
              <Link
                href={industry.href}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm transition-colors hover:border-teal/60 hover:bg-white/15"
              >
                <span className="font-heading text-[0.98rem] font-semibold text-white">
                  {industry.label}
                </span>
                <span
                  aria-hidden
                  className="text-teal transition-transform group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}