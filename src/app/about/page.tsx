import type { Metadata } from "next";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "About REA | Real Estate Accounting & Tax",
  description: "Learn about REA — one of the largest real estate accounting firms in the US. 230+ property accountants, 130K+ units managed.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50+", label: "States Served" },
];

const values = [
  { title: "Real Estate Only", description: "We exclusively serve real estate companies. Every accountant on our team specializes in property accounting — not generic bookkeeping." },
  { title: "Software Expertise", description: "We work inside the platform you already run — AppFolio, Yardi, Buildium, and 6 more — not exporting to a parallel ledger." },
  { title: "Named Teams", description: "You get a dedicated team with names, not a ticket queue. Reachable via email, phone, video, or Slack." },
  { title: "Trust Compliance", description: "We reconcile owner by owner, not just account by account. The test a regulator actually applies." },
];

const timeline = [
  { year: "Founded", event: "REA was founded with a mission to provide specialized real estate accounting services." },
  { year: "Growth", event: "Expanded to 230+ property accountants serving clients across all 50 states." },
  { year: "Today", event: "One of the largest real estate accounting firms in the US, managing 130K+ units and 30M+ commercial sq. ft." },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="About REA"
        description="One of the largest real estate accounting firms in the US. We exclusively serve real estate companies with outsourced bookkeeping, tax preparation, and lease compliance services."
        showDotGrid
      />
      <StatsBar stats={stats} />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Why REA Exists
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-[#435e6b]">
            Real estate accounting is not generic bookkeeping. It requires understanding trust obligations, owner statements, software platforms, and state-specific regulations. REA was built to serve this specialized need — exclusively.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Our Values
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm">
                <h3 className="font-heading text-base font-semibold text-[#20949d]">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#435e6b]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            Our Journey
          </h2>
          <div className="mt-10 space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#20949d] font-heading text-sm font-bold text-white">
                  {t.year.charAt(0)}
                </div>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-[#07213a]">{t.year}</h3>
                  <p className="mt-1 text-sm text-[#435e6b]">{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Ready to Work With REA?" description="Schedule a call to learn how our specialized real estate accounting team can help your business." />
    </SiteLayout>
  );
}
