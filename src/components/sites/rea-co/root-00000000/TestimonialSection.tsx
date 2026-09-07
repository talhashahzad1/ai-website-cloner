import Image from "next/image";
import { StarIcon } from "../shared/icons";

export function TestimonialSection() {
  return (
    <section className="bg-sand px-5 sm:px-8">
      <div className="mx-auto max-w-6xl py-20 sm:py-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="font-heading text-2xl font-bold leading-snug text-navy">
              The firm property managers keep getting asked about
            </h2>
<p className="mt-5 font-sans text-sm leading-relaxed text-slate">
            REA has been featured on Fox Business and Bloomberg for the way
            outsourced accounting is changing how property management companies
            scale. Watch the two-minute version of what we actually do.
          </p>

            {/* Logos */}
            <div className="mt-8 flex items-center gap-8">
              <Image
                src="/sites/rea-co/root-00000000/images/fox-business.webp"
                alt="Fox Business"
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
                unoptimized
              />
              <Image
                src="/sites/rea-co/root-00000000/images/bloomberg-logo.webp"
                alt="Bloomberg"
                width={120}
                height={32}
                className="h-7 w-auto object-contain"
                unoptimized
              />
            </div>

            {/* CTA Button */}
            <button className="mt-8 rounded-full border border-border-line bg-white px-6 py-3 font-sans text-sm font-medium text-navy transition-colors hover:bg-gray-50">
              Watch: how REA works with property managers
            </button>
          </div>

          {/* Right Column — Testimonial Card */}
          <div className="rounded-2xl border border-border-line bg-white p-8 shadow-sm">
            <div className="mb-4 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-teal" />
              ))}
            </div>
            <blockquote className="font-sans text-base leading-relaxed text-navy">
              &ldquo;I highly recommend REA services. They truly are great and
              have helped us tremendously. I felt very comfortable giving up all
              my accounting responsibilities to this team. Nothing less than an
              amazing experience!&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-teal/10" />
              <div>
                <p className="font-sans text-sm font-semibold text-navy">
                  Tracy Collins
                </p>
                <p className="font-sans text-xs text-slate">
                  Property Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
