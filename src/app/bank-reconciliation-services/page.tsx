import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Bank Reconciliation Services for Real Estate | REA",
  description: "Expert bank reconciliation services for real estate companies. Every property account reconciled with trust compliance. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "100%", label: "Reconciled Monthly" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust Account Reconciliation", description: "Every trust bank account reconciled with owner-by-owner tie-out for regulatory compliance." },
  { title: "Operating Account Reconciliation", description: "All operating accounts reconciled with proper categorization and variance analysis." },
  { title: "Petty Cash Reconciliation", description: "Petty cash accounts tracked and reconciled with supporting documentation." },
  { title: "Credit Card Reconciliation", description: "Corporate and property credit card statements reconciled with proper expense allocation." },
  { title: "Intercompany Reconciliation", description: "Transactions between related entities properly identified and eliminated." },
  { title: "Variance Analysis", description: "Investigation and resolution of variances between bank records and book balances." },
];

const testimonials = [
  { quote: "REA's bank reconciliations are always thorough and on time. Every account is properly reconciled each month.", author: "Michael Torres", role: "Property Manager" },
  { quote: "The trust account reconciliation REA provides gives us complete confidence in our compliance posture.", author: "Jennifer Park", role: "Real Estate Investor" },
  { quote: "REA found bank reconciliation errors that our previous bookkeeper had been hiding for months.", author: "David Chen", role: "Owner Operator" },
];

const faqs = [
  { question: "How often do you reconcile bank accounts?", answer: "We reconcile all bank accounts monthly, ensuring every property's accounts are properly reconciled and trust-compliant." },
  { question: "What types of accounts do you reconcile?", answer: "We reconcile trust accounts, operating accounts, petty cash, credit cards, and intercompany accounts." },
  { question: "How do you handle trust account reconciliation?", answer: "We reconcile trust accounts at the owner level, not just the account level, ensuring each owner's balance is accurate." },
  { question: "Can you clean up back reconciliations?", answer: "Yes. We specialize in catching up missed reconciliations and correcting historical errors." },
];

export default function BankReconciliationPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Bank Reconciliation Services" description="Every property bank account reconciled monthly with trust compliance and variance analysis." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Bank Reconciliation from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Bank Reconciliation" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate Bank Reconciliations?" description="Schedule a call to learn how REA's bank reconciliation services keep your accounts accurate and compliant." />
    </SiteLayout>
  );
}
