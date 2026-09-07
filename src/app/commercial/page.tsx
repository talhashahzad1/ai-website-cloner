import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Commercial Real Estate Accounting Services | REA",
  description: "Expert commercial real estate accounting services including lease administration, CAM reconciliation, and financial reporting. 30M+ commercial sq. ft. managed.",
};

const stats = [
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "CAM Reconciliation", description: "Common area maintenance pools built from lease terms, reconciled against actuals, billed or credited with a defensible tenant statement." },
  { title: "Lease Administration", description: "Abstract key lease terms, track escalations, recoveries, and options. Ensure every lease obligation is captured in your books." },
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for commercial properties directly in your accounting software." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled with trust accounting compliance." },
  { title: "Financial Reporting", description: "Monthly packages including balance sheets, P&Ls, and owner statements for commercial portfolios." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning for commercial entities." },
];

const propertyTypes = [
  "Office", "Retail", "Industrial", "Mixed-Use", "Medical Office", "Data Centers",
];

const testimonials = [
  { quote: "REA's CAM reconciliation expertise saved us from significant billing errors. Their attention to lease terms is unmatched.", author: "Michael Torres", role: "Commercial Property Manager" },
  { quote: "We manage 5M+ sq. ft. of commercial space and REA handles all our bookkeeping flawlessly.", author: "Jennifer Park", role: "CRE Investor" },
  { quote: "The team understands the complexity of triple-net leases and CAM calculations better than any firm we've worked with.", author: "David Chen", role: "Owner Operator" },
];

const faqs = [
  { question: "What commercial property types do you handle?", answer: "We handle office, retail, industrial, mixed-use, medical office, and data centers. Our team has asset-class-specific expertise across all commercial property types." },
  { question: "How does CAM reconciliation work?", answer: "We build CAM pools from lease terms, reconcile against actual expenses, and produce defensible tenant statements. Each tenant's share is calculated per their specific lease provisions." },
  { question: "Do you handle triple-net (NNN) leases?", answer: "Yes. We manage the complexity of NNN leases including expense recoveries, tenant billings, and reconciliation statements." },
  { question: "What software do you use for commercial accounting?", answer: "We work with Yardi, MRI, RealPage, AppFolio, QuickBooks, and other platforms used by commercial property managers." },
];

export default function CommercialPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Commercial Real Estate Accounting Services" description="Expert accounting for commercial property managers including lease administration, CAM reconciliation, and financial reporting." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Commercial Real Estate Accounting from REA</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h3 className="font-heading text-base font-semibold text-[#07213a]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#435e6b]">{s.description}</p>
                <Link href="#get-started" className="mt-4 inline-block text-sm font-medium text-[#20949d] hover:underline">See how it works →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Property Types We Serve</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {propertyTypes.map((t) => (
              <span key={t} className="rounded-full border border-[#dbe0e7] bg-white px-5 py-2.5 text-sm font-medium text-[#07213a]">{t}</span>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection testimonials={testimonials} heading="What Our Commercial Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Commercial Real Estate Accounting?" description="Schedule a call to learn how REA can manage your commercial property accounting with precision." />
    </SiteLayout>
  );
}
