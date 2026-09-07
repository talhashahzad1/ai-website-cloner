import Link from "next/link";

interface FinalCtaProps {
  heading?: string;
  description?: string;
  CTAlabel?: string;
  CTAhref?: string;
}

export function FinalCta({
  heading = "Ready to Get Started?",
  description = "Schedule a call to learn how REA's outsourced real estate accounting services can help you reduce costs, improve accuracy, and focus on growing your portfolio.",
  CTAlabel = "Schedule a Call",
  CTAhref = "#get-started",
}: FinalCtaProps) {
  return (
    <section
      id="get-started"
      className="scroll-mt-20 px-5 sm:px-8"
      style={{
        backgroundColor: "#07213a",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1.4px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="mx-auto max-w-3xl py-20 text-center sm:py-24">
        <h2 className="font-heading text-[clamp(1.5rem,3vw,2.2rem)] font-semibold leading-tight text-white">
          {heading}
        </h2>
        <p className="mt-5 leading-relaxed text-white/80">{description}</p>
        <Link
          href={CTAhref}
          className="mt-8 inline-block rounded-full bg-[#20949d] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#1a7a82]"
        >
          {CTAlabel}
        </Link>
      </div>
    </section>
  );
}
