import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "CAM Reconciliation Services | REA",
  description: "Expert CAM reconciliation services for commercial properties. Common area maintenance pools built from lease terms, reconciled against actuals.",
};

const stats = [
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "230+", label: "Property Accountants" },
  { value: "100%", label: "Accuracy Rate" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "CAM Pool Calculation", description: "Build common area maintenance pools from lease terms with accurate pro-rata share calculations." },
  { title: "Actual Expense Reconciliation", description: "Reconcile budgeted CAM charges against actual expenses with variance analysis." },
  { title: "Tenant Statement Preparation", description: "Produce defensible tenant statements showing over/under payments and adjustments." },
  { title: "Cap Tracking", description: "Track capital expenditure caps per lease and apply carryover provisions where applicable." },
  { title: "Gross-Up Calculations", description: "Apply occupancy-based gross-up adjustments when required by lease provisions." },
  { title: "Audit Support", description: "Documentation and support for tenant CAM audit requests and reconciliation reviews." },
];

const testimonials = [
  { quote: "REA's CAM reconciliation is always accurate and defensible. Our tenants trust the statements we provide.", author: "Michael Torres", role: "CRE Property Manager" },
  { quote: "The gross-up calculations REA applies are exactly per our lease terms. No more tenant disputes.", author: "Jennifer Park", role: "CRE Investor" },
  { quote: "REA handles CAM reconciliation across our entire commercial portfolio. The accuracy is remarkable.", author: "David Chen", role: "Commercial Operator" },
];

const faqs = [
  { question: "What is CAM reconciliation?", answer: "CAM reconciliation is the annual process of comparing budgeted common area maintenance charges to actual expenses, then billing or crediting tenants for the difference based on their lease terms." },
  { question: "How do you calculate pro-rata shares?", answer: "We calculate each tenant's pro-rata share based on their specific lease provisions, which may use rentable square footage, usable square footage, or other methods." },
  { question: "Do you handle CAM caps?", answer: "Yes. We track capital expenditure caps per lease and apply carryover provisions where applicable, ensuring tenants are not overcharged." },
  { question: "Can you handle gross-up calculations?", answer: "Yes. We apply occupancy-based gross-up adjustments when required by lease provisions to ensure fair CAM allocation." },
];

export default function CAMReconciliationPage() {
  return (
    <SiteLayout>
      <SubPageHero title="CAM Reconciliation Services" description="Common area maintenance pools built from lease terms, reconciled against actuals, billed or credited with defensible tenant statements." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">CAM Reconciliation from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About CAM Reconciliation" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Accurate CAM Reconciliation?" description="Schedule a call to learn how REA's CAM reconciliation services produce defensible tenant statements." />
    </SiteLayout>
  );
}
