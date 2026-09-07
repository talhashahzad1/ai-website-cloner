import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Accounts Payable & Receivable Services | REA",
  description: "Expert AP/AR services for real estate companies. Vendor invoices coded and paid, tenant receipts applied, owner distributions on time.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "100%", label: "On-Time Payments" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Accounts Payable", description: "Vendor invoices coded, approved, and paid on schedule with proper property-level allocation." },
  { title: "Accounts Receivable", description: "Tenant receipts applied, late fees tracked, and collections managed for optimal cash flow." },
  { title: "Owner Distributions", description: "Accurate and timely owner distributions based on each owner's net income and trust balance." },
  { title: "Management Fee Processing", description: "Management fees calculated and taken accurately per your fee structure and agreement terms." },
  { title: "Vendor Management", description: "Vendor setup, W-9 collection, and 1099 preparation for year-end filing." },
  { title: "Payment Processing", description: "Check runs, ACH payments, and wire transfers processed accurately and on time." },
];

const testimonials = [
  { quote: "REA's AP/AR services have transformed our payment process. Vendors are paid on time and tenant receipts are applied accurately.", author: "Karen Mitchell", role: "Property Manager" },
  { quote: "The owner distributions REA prepares are always accurate and on time. Our owners appreciate the reliability.", author: "Robert Chang", role: "Real Estate Investor" },
  { quote: "REA handles our AP/AR across 200+ units seamlessly. The monthly close is always smooth.", author: "Lisa Morgan", role: "Owner Operator" },
];

const faqs = [
  { question: "How do you handle accounts payable?", answer: "We code vendor invoices to the correct property and expense category, obtain approvals, and process payments on schedule via check, ACH, or wire." },
  { question: "How do you manage accounts receivable?", answer: "We apply tenant receipts, track late fees, manage collections, and ensure cash flow is optimized across your portfolio." },
  { question: "Can you handle owner distributions?", answer: "Yes. We calculate and process owner distributions based on each owner's net income, trust balance, and agreement terms." },
  { question: "Do you handle management fee calculations?", answer: "Yes. We calculate management fees per your fee structure and process them accurately each month." },
];

export default function APARPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Accounts Payable & Receivable Services" description="Vendor invoices coded and paid, tenant receipts applied, owner distributions on time — every month." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">AP/AR Services from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About AP/AR Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate AP/AR Management?" description="Schedule a call to learn how REA's AP/AR services keep your payments on schedule and collections optimized." />
    </SiteLayout>
  );
}
