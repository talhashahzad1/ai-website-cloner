import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "HOA Accounting Services & Bookkeeping | REA",
  description: "Expert HOA accounting services including assessments, reserves, and board-ready reporting. Separate operating and reserve funds with confidence.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "30M+", label: "Commercial Sq. Ft." },
  { value: "50%", label: "Saved vs In-House" },
  { value: "100%", label: "On-Time Close" },
];

const services = [
  { title: "HOA Bookkeeping", description: "Accurate monthly bookkeeping for homeowner associations with proper fund separation." },
  { title: "Reserve Fund Tracking", description: "Separate tracking of reserve funds with proper allocation and board-ready reporting." },
  { title: "Assessment Billing", description: "Accurate assessment calculations and billing for HOA members." },
  { title: "Bank Reconciliations", description: "Every HOA bank account reconciled with proper operating and reserve fund separation." },
  { title: "Financial Reporting", description: "Board-ready monthly financial packages including balance sheets, P&Ls, and reserve studies." },
  { title: "Tax Preparation", description: "HOA tax returns and year-round tax planning for community associations." },
];

const testimonials = [
  { quote: "REA separated our operating and reserve funds properly for the first time. The board finally has accurate financials.", author: "Patricia Adams", role: "HOA Board President" },
  { quote: "The board-ready reporting REA provides has transformed our quarterly meetings. Everything is clear and accurate.", author: "Kevin Brown", role: "Property Manager" },
  { quote: "REA's HOA expertise saved us from a potential reserve fund shortfall. Their analysis was invaluable.", author: "Diana Ross", role: "HOA Board Member" },
];

const faqs = [
  { question: "How do you handle operating vs reserve funds?", answer: "We properly separate operating and reserve funds within your accounting software, ensuring each fund is tracked independently and reported accurately." },
  { question: "Can you prepare board-ready financial reports?", answer: "Yes. We produce monthly financial packages designed for board presentations including balance sheets, P&Ls, and reserve fund schedules." },
  { question: "Do you handle special assessments?", answer: "Yes. We track special assessments, their collection, and proper allocation to the appropriate funds." },
  { question: "What software do you use for HOA accounting?", answer: "We work with AppFolio, Buildium, and other platforms commonly used by HOA management companies." },
];

export default function HOAPage() {
  return (
    <SiteLayout>
      <SubPageHero title="HOA Accounting Services & Bookkeeping" description="Expert accounting for homeowner associations including assessments, reserves, and board-ready reporting." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">HOA Accounting from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our HOA Clients Say" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for Expert HOA Accounting?" description="Schedule a call to learn how REA can manage your HOA accounting with precision and board-ready reporting." />
    </SiteLayout>
  );
}
