import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "MRI Software Bookkeeping Services for Property Managers | REA",
  description: "Expert MRI bookkeeping services for property managers and investors. 230+ property accountants working directly inside your MRI instance.",
};

const stats = [
  { value: "130K+", label: "Units Under Management" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for managers, investors, and HOAs directly in MRI." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled within MRI's trust accounting system." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, management fees, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages from MRI including balance sheets, P&Ls, and general ledgers." },
  { title: "MRI Cleanup & Diagnostics", description: "Correcting back-books, fixing misapplied transactions, and troubleshooting issues." },
  { title: "1099 Filings & Tax Preparation", description: "Vendor/contractor 1099s, entity returns, K-1s, and year-round tax planning." },
];

const testimonials = [
  { quote: "REA understands MRI's trust accounting nuances. The trust wall was never the priority for our previous bookkeeper — but it is for REA.", author: "William Harris", role: "Property Manager" },
  { quote: "Our MRI books are now clean and compliant. The team's expertise in MRI is evident in every monthly close.", author: "Elizabeth Clark", role: "Real Estate Investor" },
  { quote: "REA saved us from a potential audit issue by identifying trust compliance gaps in our MRI setup.", author: "Steven Lewis", role: "Owner Operator" },
];

const faqs = [
  { question: "What MRI versions do you support?", answer: "We support MRI Commercial Management, MRI Residential Management, and other MRI platforms. Our team has deep expertise across the MRI suite." },
  { question: "How do you handle trust accounting in MRI?", answer: "The trust wall in MRI was often not the priority during setup. We ensure proper trust segregation and compliance within MRI." },
  { question: "How do you access our MRI instance?", answer: "Clients create and administer individual user access for REA personnel. REA does not provide or resell software access." },
  { question: "Can you clean up messy MRI books?", answer: "Yes. We specialize in cleanup and diagnostics — correcting back-books, fixing misapplied transactions, and getting your MRI instance back on track." },
];

export default function MRIPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Expert MRI Bookkeeping Services For Property Investors & Managers" description="Cost-effective, accurate, on-time bookkeeping for MRI users. We work directly inside your MRI instance." badgeLabel="MRI Partner" showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">MRI Bookkeeping Services from REA</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">Done Inside Your MRI, Not Exported Out</p>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About MRI Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate MRI Books?" description="Schedule a call for compliant trust accounting, on-time closes, and a growth-focused team." />
    </SiteLayout>
  );
}
