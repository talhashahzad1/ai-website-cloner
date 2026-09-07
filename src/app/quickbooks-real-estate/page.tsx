import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "QuickBooks Real Estate Bookkeeping Services | REA",
  description: "Expert QuickBooks bookkeeping for real estate investors and managers. 230+ property accountants working directly inside your QuickBooks instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in QuickBooks." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled within QuickBooks with trust accounting compliance." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages from QuickBooks including balance sheets, P&Ls, and general ledgers." },
  { title: "QuickBooks Cleanup & Diagnostics", description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning." },
];

const testimonials = [
  { quote: "REA turned our QuickBooks mess into clean, compliant books. The monthly close is now smooth and on time.", author: "Mark Stevens", role: "Real Estate Investor" },
  { quote: "As a small portfolio owner using QuickBooks, REA gives me enterprise-level accounting at a fraction of the cost.", author: "Nancy Johnson", role: "Owner Operator" },
  { quote: "The team understands real estate accounting in QuickBooks better than anyone we've worked with.", author: "George Taylor", role: "Property Manager" },
];

const faqs = [
  { question: "Which QuickBooks versions do you support?", answer: "We support QuickBooks Online, QuickBooks Desktop, and QuickBooks Enterprise. Our team has deep expertise across all QuickBooks platforms." },
  { question: "How do you handle trust accounting in QuickBooks?", answer: "QuickBooks was not designed for real estate trust accounting. We implement proper trust tracking within QuickBooks to ensure compliance." },
  { question: "Can you fix a messy QuickBooks setup?", answer: "Yes. We specialize in cleanup and diagnostics — correcting back-books, fixing class tracking issues, and getting your QuickBooks back on track." },
  { question: "How do you access our QuickBooks instance?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access." },
];

export default function QuickBooksRealEstatePage() {
  return (
    <SiteLayout>
      <SubPageHero title="Expert QuickBooks Real Estate Bookkeeping Services" description="Cost-effective, accurate, on-time bookkeeping for QuickBooks users in real estate. We work directly inside your QuickBooks instance." badgeLabel="QuickBooks Partner" showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">QuickBooks Real Estate Bookkeeping from REA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside Your QuickBooks, Not Exported Out</p>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About QuickBooks Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate QuickBooks Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
