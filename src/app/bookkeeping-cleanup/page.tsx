import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { StatsBar } from "@/components/sites/rea-co/shared/StatsBar";
import { TestimonialsSection } from "@/components/sites/rea-co/shared/TestimonialsSection";
import { FaqSection } from "@/components/sites/rea-co/shared/FaqSection";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Bookkeeping Cleanup & Catch-Up Services | REA",
  description: "Expert bookkeeping cleanup and catch-up services for real estate companies. Fix back-books, correct errors, and get back on track.",
};

const stats = [
  { value: "230+", label: "Property Accountants" },
  { value: "130K+", label: "Units Under Management" },
  { value: "100%", label: "Cleanup Success" },
  { value: "50%", label: "Saved vs In-House" },
];

const services = [
  { title: "Back-Books Cleanup", description: "Correct months or years of back-books with accurate categorization and proper trust accounting." },
  { title: "Misapplied Transaction Fix", description: "Identify and correct misapplied transactions, duplicate entries, and coding errors." },
  { title: "Bank Feed Diagnostics", description: "Fix double-posted bank feeds, missing transactions, and reconciliation gaps." },
  { title: "Trust Compliance Audit", description: "Review trust accounting for compliance issues and correct any deficiencies." },
  { title: "Catch-Up Bookkeeping", description: "Bring your books current when they've fallen behind — from one month to multiple years." },
  { title: "Chart of Accounts Cleanup", description: "Reorganize your chart of accounts for proper property-level tracking and reporting." },
];

const testimonials = [
  { quote: "REA cleaned up two years of messy books in just a few weeks. The transformation was remarkable.", author: "Michael Torres", role: "Property Manager" },
  { quote: "Our previous bookkeeper had been making errors for months. REA found and fixed everything.", author: "Jennifer Park", role: "Real Estate Investor" },
  { quote: "REA caught up our books from 6 months behind to current. We finally have accurate financials.", author: "David Chen", role: "Owner Operator" },
];

const faqs = [
  { question: "How far back can you clean up books?", answer: "We've cleaned up books going back multiple years. The scope depends on the complexity and the availability of source documents." },
  { question: "How long does a cleanup take?", answer: "Most cleanups take 2-6 weeks depending on the scope, number of properties, and how far back the books need to go." },
  { question: "What if my books are really messy?", answer: "That's exactly what we specialize in. We've seen it all and can handle even the most complex bookkeeping cleanup situations." },
  { question: "Will I have accurate financials after cleanup?", answer: "Yes. After cleanup, you'll have accurate, trust-compliant books that you can rely on for decision-making and reporting." },
];

export default function BookkeepingCleanupPage() {
  return (
    <SiteLayout>
      <SubPageHero title="Bookkeeping Cleanup & Catch-Up Services" description="Fix back-books, correct errors, and get your accounting back on track. We've seen it all — and fixed it all." showDotGrid />
      <StatsBar stats={stats} />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">Bookkeeping Cleanup from REA</h2>
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
      <TestimonialsSection testimonials={testimonials} heading="What Our Clients Say About Cleanup Services" />
      <FaqSection faqs={faqs} />
      <FinalCta heading="Ready for a Fresh Start?" description="Schedule a call to learn how REA can clean up your books and get you back on track." />
    </SiteLayout>
  );
}
