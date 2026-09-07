interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  heading?: string;
}

export function TestimonialsSection({
  testimonials,
  heading = "What Our Clients Say",
}: TestimonialsSectionProps) {
  return (
    <section className="bg-[#f7f6f2] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
          {heading}
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-[#dbe0e7] bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-[#435e6b]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 border-t border-[#dbe0e7] pt-4">
                <p className="font-heading text-sm font-semibold text-[#07213a]">
                  {t.author}
                </p>
                <p className="text-xs text-[#435e6b]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
