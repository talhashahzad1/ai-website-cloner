import Link from "next/link";
import Image from "next/image";

interface SubPageHeroProps {
  title: string;
  description: string;
  badge?: string;
  badgeLabel?: string;
  badgeImage?: string;
  CTALabel?: string;
  CTAHref?: string;
  showDotGrid?: boolean;
}

export function SubPageHero({
  title,
  description,
  badge,
  badgeLabel,
  badgeImage,
  CTALabel = "Schedule a Call",
  CTAHref = "#get-started",
  showDotGrid = false,
}: SubPageHeroProps) {
  return (
    <section
      className="px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20"
      style={
        showDotGrid
          ? {
              backgroundColor: "#07213a",
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1.4px)",
              backgroundSize: "28px 28px",
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-4xl text-center">
        {(badge || badgeLabel) && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dbe0e7]/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
            {badgeImage && (
              <Image
                src={badgeImage}
                alt=""
                className="h-5 w-5 rounded-sm"
                width={20}
                height={20}
                unoptimized
              />
            )}
            {badge && (
              <Image
                src={badge}
                alt=""
                className="h-5 w-5 rounded-sm"
                width={20}
                height={20}
                unoptimized
              />
            )}
            {badgeLabel}
          </div>
        )}
        <h1
          className={`font-heading text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.025em] ${showDotGrid ? "text-white" : "text-[#07213a]"}`}
        >
          {title}
        </h1>
        <p
          className={`mx-auto mt-5 max-w-3xl text-lg leading-relaxed ${showDotGrid ? "text-white/80" : "text-[#435e6b]"}`}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href={CTAHref}
            className="rounded-full bg-[#20949d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a7a82]"
          >
            {CTALabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
