import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Owner Operator Real Estate Accounting Services | REA",
  description: "Expert accounting for real estate owner operators. Buy units without adding accounting headcount. 30-50% less than in-house.",
};

const stats = [
  { value: "30-50%", label: "Less Than In-House" },
  { value: "230+", label: "Property Accountants" },
  { value: "8", label: "Platforms Supported" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "Trust & Corporate Bookkeeping", description: "Accurate monthly bookkeeping for owner operators directly in your accounting software." },
  { title: "Bank Reconciliations", description: "Every property bank account reconciled with trust accounting compliance." },
  { title: "Accounts Payable & Receivable", description: "End-to-end management of vendor invoices, tenant receipts, and owner distributions." },
  { title: "Financial Reporting", description: "Monthly packages including balance sheets, P&Ls, and per-property statements." },
  { title: "Cleanup & Catch-Up", description: "Correcting back-books and getting your accounting back on track." },
  { title: "Tax Preparation", description: "Entity returns, K-1s, and year-round tax planning for real estate owners." },
];

const testimonials = [
  { quote: "REA allows me to focus on acquiring properties while they handle all the accounting. I've saved 40% compared to my previous bookkeeper.", author: "Steve Wilko", role: "Owner Operator" },
  { quote: "As a small portfolio owner, REA gives me enterprise-level accounting at a fraction of the cost.", author: "Nancy Johnson", role: "Owner Operator" },
  { quote: "The team's real estate expertise means they understand my business better than a generic accountant.", author: "Brian Cook", role: "Owner Operator" },
];

const faqs = [
  { question: "Can I add properties without adding accounting staff?", answer: "Yes. Our services scale with your portfolio. Add properties without the burden of hiring, training, and managing new accounting employees." },
  { question: "What software do you support for owner operators?", answer: "We support AppFolio, Yardi, Buildium, Rent Manager, Entrata, RealPage, QuickBooks, MRI, and Propertyware." },
  { question: "How much can I save compared to in-house accounting?", answer: "Most owner operators save 30-50% compared to hiring an in-house accounting team, while getting enterprise-level expertise." },
  { question: "Can you handle multiple entities?", answer: "Yes. We manage accounting across multiple LLCs, trusts, and entities — keeping each property's books separate and compliant." },
];

export default function OwnerOperatorsPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Owner Operator Real Estate Accounting Services" description="Buy units without adding accounting headcount. Cost-effective, accurate bookkeeping for real estate owner operators." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Accounting Services for Owner Operators</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Owner Operators Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready to Scale Without Adding Overhead?" description="Schedule a call to learn how REA's accounting services let you focus on growing your portfolio." />
    </SiteLayout>
  );
}
