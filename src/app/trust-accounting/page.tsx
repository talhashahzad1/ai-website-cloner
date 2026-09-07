import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Trust Accounting Services for Property Managers | REA",
  description: "Expert trust accounting services. Owner-by-owner reconciliation — the test a regulator actually applies. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "100%", label: "Trust Compliant" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Trust Bookkeeping", description: "Accurate monthly trust bookkeeping with owner-by-owner tracking and compliance verification." },
  { title: "Owner-by-Owner Reconciliation", description: "Each owner's ledger tied to the backing trust balance — the test a regulator actually applies." },
  { title: "Trust Compliance Verification", description: "Comprehensive trust compliance verification delivered with detailed reporting for state audits." },
  { title: "Security Deposit Tracking", description: "Proper tracking of security deposits in trust accounts, separated from operating funds." },
  { title: "Owner Distributions", description: "Accurate and timely owner distributions based on each owner's trust balance." },
  { title: "Audit Support", description: "Documentation and support for state trust account audits and compliance reviews." },
];

const testimonials = [
  { quote: "REA's trust accounting is flawless. Their owner-by-owner reconciliation gives us complete confidence in our compliance.", author: "Patricia Adams", role: "Property Manager" },
  { quote: "The trust compliance verification REA provides has prepared us for audits we never thought we'd pass.", author: "Kevin Brown", role: "Real Estate Investor" },
  { quote: "REA found trust compliance gaps our previous bookkeeper missed. They saved us from potential regulatory issues.", author: "Diana Ross", role: "Property Manager" },
];

const faqs = [
  { question: "What is trust accounting?", answer: "Trust accounting tracks money held on behalf of others — owner funds, security deposits, and tenant prepayments — in segregated trust accounts separate from your operating funds." },
  { question: "Why is owner-by-owner reconciliation important?", answer: "A bank reconciliation tying at the account level can still hide an owner owed money the trust does not have. Owner-by-owner reconciliation is the test a regulator actually applies." },
  { question: "How do you ensure trust compliance?", answer: "We reconcile each owner's ledger to the backing trust balance monthly, document the reconciliation, and provide audit-ready reports for state compliance reviews." },
  { question: "What states do you provide trust accounting for?", answer: "We provide trust accounting services across all 50 states, with expertise in each state's specific trust accounting requirements." },
];

export default function TrustAccountingPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Trust Accounting Services" description="Owner-by-owner trust reconciliation and compliance verification — the test a regulator actually applies." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Trust Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Trust Accounting" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Trust-Compliant Accounting?" description="Schedule a call to learn how REA's trust accounting services keep your books compliant and audit-ready." />
    </SiteLayout>
  );
}
