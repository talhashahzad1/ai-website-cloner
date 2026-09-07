import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";

export const metadata: Metadata = {
  title: "Thank You | REA",
  description: "Thank you for reaching out to REA. Our team will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <SiteLayout>
      <section className="flex min-h-[70vh] items-center justify-center px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#20949d]/10">
            <svg className="h-10 w-10 text-[#20949d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-8 font-heading text-[clamp(2rem,4vw,3rem)] font-semibold text-[#07213a]">
            Thank You!
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#435e6b]">
            Your message has been received. Our team will review your inquiry and get back to you within one business day.
          </p>
          <p className="mt-3 text-sm text-[#435e6b]">
            In the meantime, feel free to explore our services or learn more about our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/accounting/"
              className="rounded-full bg-[#20949d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a7a82]"
            >
              Our Services
            </Link>
            <Link
              href="/meet-rea/"
              className="rounded-full border border-[#dbe0e7] px-7 py-3 text-sm font-semibold text-[#07213a] transition-colors hover:border-[#20949d] hover:text-[#20949d]"
            >
              Meet Our Team
            </Link>
            <Link
              href="/"
              className="rounded-full border border-[#dbe0e7] px-7 py-3 text-sm font-semibold text-[#07213a] transition-colors hover:border-[#20949d] hover:text-[#20949d]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
