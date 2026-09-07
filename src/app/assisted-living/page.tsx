import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Assisted Living Accounting Services | REA",
  description: "Expert accounting for assisted living facilities including resident billing, level-of-care revenue, and property accounting. 230+ property accountants.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "Resident Billing", description: "Accurate billing for level-of-care services, rent, and additional services for each resident." },
  { title: "Level-of-Care Revenue", description: "Proper tracking and allocation of revenue based on each resident's care level." },
  { title: "Property Accounting", description: "Monthly bookkeeping for assisted living properties including trust and corporate accounting." },
  { title: "Bank Reconciliations", description: "Every facility bank account reconciled with proper resident-level tracking." },
  { title: "Financial Reporting", description: "Monthly packages including occupancy reports, revenue by care level, and facility-level P&Ls." },
  { title: "Tax Preparation", description: "Entity returns, K-1s, and year-round tax planning for assisted living operators." },
];

const testimonials = [
  { quote: "REA understands the unique revenue model of assisted living. Their level-of-care tracking is spot-on.", author: "Karen Mitchell", role: "Facility Director" },
  { quote: "The resident billing REA produces is accurate and clear. Our families appreciate the transparency.", author: "Robert Chang", role: "Assisted Living Operator" },
  { quote: "REA's assisted living expertise saved us from billing errors that could have been costly.", author: "Lisa Morgan", role: "Facility Manager" },
];

const faqs = [
  { question: "How do you handle level-of-care revenue?", answer: "We track and allocate revenue based on each resident's specific care level, ensuring accurate billing and financial reporting." },
  { question: "Can you manage resident billing?", answer: "Yes. We produce accurate resident billing statements including rent, care services, and additional charges." },
  { question: "Do you understand assisted living regulations?", answer: "Yes. We stay current with assisted living accounting requirements and ensure compliance with state regulations." },
  { question: "What software do you use for assisted living accounting?", answer: "We work with Yardi, RealPage, and other platforms commonly used by assisted living operators." },
];

export default function AssistedLivingPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Assisted Living Accounting Services" description="Expert accounting for assisted living facilities including resident billing, level-of-care revenue, and property accounting." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Assisted Living Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Assisted Living Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert Assisted Living Accounting?" description="Schedule a call to learn how REA can manage your assisted living accounting with precision." />
    </SiteLayout>
  );
}
