"use client";

import { useEffect, useRef } from "react";

export function CtaSection() {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      return;
    }
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="get-started"
      className="scroll-mt-20 px-5 sm:px-8"
      style={{
        backgroundColor: "#07213a",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1.4px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="mx-auto max-w-5xl py-20 sm:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-white">
            Ready to Streamline Your Accounting?
          </h2>
          <p className="mt-5 leading-relaxed text-white/80">
            Schedule a call with our team to learn how REA&apos;s outsourced real
            estate accounting services can help you reduce costs, improve
            financial accuracy, and focus on growing your portfolio.
          </p>
        </div>

        {/* Calendly Embed */}
        <div
          className="mt-10 bg-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
          style={{ borderRadius: 24, padding: "20px" }}
        >
          <div
            ref={calendlyRef}
            className="calendly-inline-widget w-full"
            data-url="https://calendly.com/d/4wn-dkf-v2d?embed_domain=rea.co&embed_type=Inline&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  );
}
