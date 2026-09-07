import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Lease Abstraction & Compliance Services | REA",
  description: "Expert lease abstraction and compliance services for commercial and residential properties. Extract key terms, track obligations, ensure compliance.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "Accuracy Rate" },
];

const services = [
  { title: "Lease Abstraction", description: "Extract key terms from complex leases including rent escalations, options, recoveries, and termination clauses." },
  { title: "CAM Reconciliation", description: "Build common area maintenance pools from lease terms, reconcile against actuals, and produce tenant statements." },
  { title: "Lease Compliance Tracking", description: "Monitor lease obligations, critical dates, and compliance requirements across your portfolio." },
  { title: "Tenant Billing", description: "Accurate tenant billing based on lease provisions including base rent, CAM, taxes, and insurance." },
  { title: "Escalation Calculations", description: "Track and calculate rent escalations, CPI adjustments, and percentage rent thresholds." },
  { title: "Reporting & Analytics", description: "Portfolio-level lease analytics including expiry tracking, rent rolls, and revenue forecasting." },
];

const testimonials = [
  { quote: "REA's lease abstraction saved us months of work. Every key term was captured accurately.", author: "Michael Torres", role: "CRE Property Manager" },
  { quote: "The CAM reconciliation REA produces is always defensible and accurate. Our tenants trust the statements.", author: "Jennifer Park", role: "CRE Investor" },
  { quote: "REA's lease compliance tracking has prevented several potential issues. Invaluable for our portfolio.", author: "David Chen", role: "Commercial Operator" },
];

const faqs = [
  { question: "What lease types do you abstract?", answer: "We abstract all commercial lease types including office, retail, industrial, NNN, gross, and modified gross leases." },
  { question: "How do you handle CAM reconciliation?", answer: "We build CAM pools from lease terms, reconcile against actual expenses, and produce defensible tenant statements with accurate pro-rata shares." },
  { question: "Can you track critical lease dates?", answer: "Yes. We monitor renewal options, termination rights, rent escalation dates, and other critical lease milestones." },
  { question: "Do you handle percentage rent calculations?", answer: "Yes. We track tenant sales thresholds and calculate percentage rent based on each tenant's specific lease provisions." },
];

export default function LeaseAbstractionPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Lease Abstraction & Compliance Services" description="Expert lease abstraction, CAM reconciliation, and compliance tracking for commercial and residential properties." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Lease Services from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Lease Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Lease Abstraction?" description="Schedule a call to learn how REA can manage your lease administration with precision." />
    </SiteLayout>
  );
}
