import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-x-16 gap-y-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_1fr]">
        {/* Left Column */}
        <div>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-tight tracking-[-0.02em] text-navy">
            About REA
          </h2>
          <h3 className="mt-2 text-[1.08rem] font-bold leading-snug text-teal">
            Built Exclusively for Real Estate
          </h3>
          <p className="measure mt-5 text-[17px] leading-relaxed text-slate">
            REA provides outsourced accounting, tax, and lease compliance
            services exclusively for the real estate industry.
          </p>
          <p className="measure mt-4 text-[17px] leading-relaxed text-slate">
            Our team becomes an extension of your finance department, providing
            the people, processes, and accounting infrastructure needed to
            produce accurate financials, strengthen controls, and scale without
            building a large internal accounting team.
          </p>
          <p className="mt-4 text-[1.25rem] font-bold leading-7 text-navy">
            230+ property accounting professionals
          </p>
          <p className="measure mt-4 text-[17px] leading-relaxed text-slate">
            From growing operators managing a few hundred units to institutional
            organizations overseeing hundreds of thousands of units and millions
            of square feet, REA is built to support real estate businesses at
            every stage of growth.
          </p>
        </div>

        {/* Right Column */}
        <figure className="relative">
          <Image
            src="/sites/rea-co/root-00000000/images/founders-adam-mark.webp"
            alt="Adam & Mark, Co-Founders"
            width={600}
            height={450}
            className="w-full rounded-3xl object-cover shadow-[0_30px_60px_-25px_rgba(7,33,58,0.45)]"
            unoptimized
          />
          <figcaption className="mt-3 font-sans text-sm text-slate-light">
            Adam &amp; Mark, Co-Founders
          </figcaption>
        </figure>
      </div>
    </section>
  );
}