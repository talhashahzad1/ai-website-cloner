import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Pricing | REA",
  description: "Transparent, tailored pricing for real estate accounting services. 30-50% less than hiring in-house.",
};

const pricingFactors = [
  { title: "Portfolio Size", description: "Number of properties and units under management." },
  { title: "Software Platform", description: "Which accounting software you currently use." },
  { title: "Service Scope", description: "Bookkeeping only, or full-service including tax and CFO." },
  { title: "Complexity", description: "Number of entities, trust structures, and reporting requirements." },
];

const plans = [
  {
    name: "Bookkeeping",
    description: "Monthly bookkeeping, reconciliations, AP/AR, and financial reporting.",
    features: [
      "Monthly close & reconciliation",
      "Trust & corporate bookkeeping",
      "AP & AR management",
      "Owner distributions",
      "Monthly financial reports",
      "Dedicated accounting team",
    ],
  },
  {
    name: "Bookkeeping + Tax",
    description: "Everything in Bookkeeping plus tax preparation and planning.",
    features: [
      "Everything in Bookkeeping",
      "1099 preparation & filing",
      "Entity tax returns (1065, 1120)",
      "K-1 preparation",
      "Year-round tax planning",
      "Multi-state compliance",
    ],
    popular: true,
  },
  {
    name: "Full Service",
    description: "Bookkeeping, tax, fractional CFO, and lease compliance.",
    features: [
      "Everything in Bookkeeping + Tax",
      "Fractional CFO services",
      "Budgeting & forecasting",
      "Lease abstraction & compliance",
      "CAM reconciliation",
      "Lender reporting",
    ],
  },
];

export default function PricingPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Transparent, Tailored Pricing"
        description="Every real estate company is different. We provide customized pricing based on your portfolio size, software, and service needs."
        showDotGrid
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            What Determines Your Price
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingFactors.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm text-center">
                <h3 className="font-heading text-sm font-semibold text-[#20949d]">{f.title}</h3>
                <p className="mt-2 text-sm text-[#435e6b]">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Service Tiers
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">
            Choose the level of service that fits your needs. All plans include a dedicated team and access to your accounting software.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border bg-white p-6 shadow-sm ${
                  plan.popular ? "border-[#20949d] shadow-md" : "border-[#dbe0e7]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#20949d] px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-lg font-semibold text-[#07213a]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[#435e6b]">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#435e6b]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#20949d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#get-started"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-[#20949d] text-white hover:bg-[#1a7a82]"
                      : "border border-[#dbe0e7] text-[#07213a] hover:border-[#20949d] hover:text-[#20949d]"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Ready for a Custom Quote?" description="Schedule a call to discuss your specific needs. We'll provide a transparent, tailored quote for your portfolio." />
    </SiteLayout>
  );
}
