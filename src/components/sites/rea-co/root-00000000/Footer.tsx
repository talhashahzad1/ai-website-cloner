import Image from "next/image";
import Link from "next/link";
import {
  PhoneIcon,
  MailIcon,
  LinkedInIcon,
  XTwitterIcon,
  InstagramIcon,
  FacebookIcon,
} from "../shared/icons";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Real Estate Accounting", href: "/accounting/" },
      { label: "Income Tax Services", href: "/tax/" },
      { label: "Fractional CFO", href: "/cfo/" },
      { label: "Lease Compliance", href: "/lease-abstraction-services/" },
    ],
  },
  {
    title: "Back Office",
    links: [
      { label: "Trust Accounting", href: "/trust-accounting/" },
      { label: "Bank Reconciliation Services", href: "/bank-reconciliation-services/" },
      { label: "Accounts Payable & Receivable", href: "/accounts-payable-receivable/" },
      { label: "Bookkeeping Cleanup & Catch-Up", href: "/bookkeeping-cleanup/" },
      { label: "CAM Reconciliation", href: "/cam-reconciliation/" },
    ],
  },
  {
    title: "Software",
    links: [
      { label: "AppFolio", href: "/appfolio/" },
      { label: "Yardi", href: "/yardi/" },
      { label: "Buildium", href: "/buildium/" },
      { label: "Rent Manager", href: "/rent-manager/" },
      { label: "Entrata", href: "/entrata/" },
      { label: "RealPage", href: "/realpage/" },
      { label: "QuickBooks", href: "/quickbooks-real-estate/" },
      { label: "MRI", href: "/mri/" },
      { label: "Propertyware", href: "/propertyware/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Property Management", href: "/property-management/" },
      { label: "Commercial Real Estate", href: "/commercial/" },
      { label: "Owner Operators", href: "/owner-operators/" },
      { label: "Developers", href: "/developers/" },
      { label: "Construction", href: "/construction/" },
      { label: "HOAs", href: "/hoa/" },
      { label: "Syndicators", href: "/real-estate-syndication-accounting/" },
      { label: "Assisted Living", href: "/assisted-living/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "Meet Vertex", href: "/meet-rea/" },
      { label: "Resources", href: "/blog/" },
      { label: "Careers", href: "/working-at-rea/" },
      { label: "Locations", href: "/locations/" },
      { label: "Pricing", href: "/pricing/" },
    ],
  },
];

const socialLinks = [
  { icon: LinkedInIcon, label: "Vertex on LinkedIn", href: "https://www.linkedin.com/company/realestateaccountingco/" },
  { icon: XTwitterIcon, label: "Vertex on X", href: "https://twitter.com/reabookkeeping" },
  { icon: InstagramIcon, label: "Vertex on Instagram", href: "https://www.instagram.com/reaaccounting/" },
  { icon: FacebookIcon, label: "Vertex on Facebook", href: "https://www.facebook.com/reabookkeeping" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-10 py-14 md:grid-cols-3 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr_0.85fr]">
        {/* Logo + Description */}
        <div>
          <Image
            src="/sites/rea-co/shared/vertex-logo.svg"
            alt="Vertex Accounting Real Estate Accounting & Tax"
            height={52}
            width={160}
            className="h-12 w-auto"
            unoptimized
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
            One of the largest real estate accounting firms in the US providing
            outsourced monthly bookkeeping, tax preparation, and lease
            compliance services.
          </p>
        </div>

        {/* Nav Columns */}
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="font-heading text-[0.9rem] font-semibold text-[#51cec8]">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.85rem] font-semibold text-white/60 transition-colors hover:text-[#51cec8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-6xl border-t border-white/10 py-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Left: Copyright + Contact */}
          <div>
            <p className="text-[13px] text-white/40">
              &copy; {new Date().getFullYear()} Vertex Accounting LLC. All Rights Reserved.
            </p>
            <p className="mt-1 text-[12px] text-white/30">
              All third-party company and product names referenced on this website are trademarks of their respective owners.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-[13px] text-white/60">
              <a
                href="tel:8583586008"
                className="flex items-center gap-1.5 transition-colors hover:text-[#51cec8]"
              >
                <PhoneIcon className="h-4 w-4" />
                (858) 358-6008
              </a>
              <a
                href="mailto:hello@rea.co"
                className="flex items-center gap-1.5 transition-colors hover:text-[#51cec8]"
              >
                <MailIcon className="h-4 w-4" />
                hello@rea.co
              </a>
            </div>
          </div>

          {/* Right: CTA + Social */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-4">
              <a
                href="#get-started"
                className="rounded-lg bg-[#20949d] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a7a82]"
              >
                Let&apos;s Connect
              </a>
              <a
                href="#"
                className="text-sm text-white/40 transition-colors hover:text-[#51cec8]"
              >
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/40 transition-colors hover:text-[#51cec8]"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
