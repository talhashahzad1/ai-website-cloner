import Image from "next/image";

const services = [
  "Bank & Credit Card Reconciliations",
  "Accounts Payables & Receivables",
  "Financial Reporting & Review",
  "Accrual & Cash Basis Financials",
  "Asset & Liability Tracking",
  "Corporate Books",
  "Back Books & Clean-up",
  "Lease Compliance & Audits",
  "New Property & Bank Setup",
  "Tax Preparation & Filings",
  "1099 Filings",
];

function TealCheckIcon() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f7f7]">
      <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden>
        <path d="M2 7.5 6.5 12 16 2" stroke="#10695F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-x-16 gap-y-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.15fr]">
        {/* Left Column — Image with stat card overlay */}
        <div className="relative order-last lg:order-first">
          <Image
            src="/sites/rea-co/root-00000000/images/residential-street.webp"
            alt="Residential apartment buildings managed with Vertex bookkeeping"
            width={600}
            height={450}
            className="w-full rounded-3xl object-cover shadow-[0_30px_60px_-25px_rgba(7,33,58,0.45)]"
            unoptimized
          />
          <div className="absolute right-3 bottom-6 rounded-2xl bg-navy px-5 py-4 shadow-[0_20px_40px_-15px_rgba(7,33,58,0.55)] sm:-right-6">
            <p className="font-heading text-2xl font-bold leading-none text-white">
              130,000+
            </p>
            <p className="mt-1 text-[0.8rem] font-bold text-white/60">
              Residential units managed
            </p>
          </div>
        </div>

        {/* Right Column — Text content */}
        <div>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            Our Services
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal">
            Full-Service Real Estate Accounting
          </h3>
          <p className="measure mt-5 leading-relaxed text-slate">
            From monthly bookkeeping to tax filings and lease compliance, we
            handle every aspect of your real estate accounting and financial
            management.
          </p>

          {/* Service List — 2-column on sm+ */}
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-3">
                <TealCheckIcon />
                <span className="text-[0.98rem] font-semibold text-navy">
                  {service}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#get-started"
            className="mt-9 inline-block rounded-full bg-teal px-8 py-4 font-sans text-sm font-medium text-white transition-colors hover:bg-teal-dark"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}