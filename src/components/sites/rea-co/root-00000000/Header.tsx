"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const dropdowns: NavDropdown[] = [
  {
    label: "Software",
    items: [
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
    label: "Industries",
    items: [
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
    label: "Services",
    items: [
      { label: "Real Estate Accounting", href: "/accounting/" },
      { label: "Income Tax Services", href: "/tax/" },
      { label: "Fractional CFO", href: "/cfo/" },
      { label: "Lease Compliance", href: "/lease-abstraction-services/" },
    ],
  },
];

const plainLinks = [
  { label: "Meet Vertex", href: "/meet-rea/" },
  { label: "Blog", href: "/blog/" },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      className={className}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function DropdownButton({
  dropdown,
  isOpen,
  onToggle,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between border-b border-[#dbe0e7] py-4 text-left font-heading text-base text-[#121c2b]"
    >
      {dropdown.label}
      <ChevronIcon
        className={`h-3 w-3 text-[#435e6b] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const handleDropdownToggle = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    if (openDropdown && !mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [openDropdown, mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-[#dbe0e7] bg-white/95 backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-3 sm:px-8" style={{ padding: "12px 32px" }}>
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/sites/rea-co/shared/vertex-logo.png"
            alt="Vertex Accounting - Real Estate Accounting & Tax"
            width={180}
            height={48}
            unoptimized
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <nav aria-label="Primary" className="relative flex items-center gap-0.5">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label} className="relative">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(dropdown.label)}
                  className="flex items-center gap-1.5 rounded-full px-3 py-2 font-heading text-[0.9rem] text-[#121c2b] transition-colors hover:text-[#20949d]"
                >
                  {dropdown.label}
                  <ChevronIcon
                    className={`h-2 w-2 transition-transform duration-150 ${openDropdown === dropdown.label ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === dropdown.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-[#dbe0e7] bg-white p-2 shadow-lg">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block rounded-lg px-4 py-2.5 text-sm text-[#121c2b] transition-colors hover:bg-[#f7f6f2] hover:text-[#20949d]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {plainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 font-heading text-[0.9rem] text-[#121c2b] transition-colors hover:text-[#20949d]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/thank-you/"
            className="ml-2 rounded-full bg-[#20949d] text-[13.28px] font-semibold text-white transition-colors hover:bg-[#1a7a82]"
            style={{ padding: "9.92px 22.4px" }}
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile: Schedule a Call + Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/thank-you/"
            className="rounded-full bg-[#20949d] text-[13.28px] font-semibold text-white transition-colors hover:bg-[#1a7a82]"
            style={{ padding: "9.92px 22.4px" }}
          >
            Schedule a Call
          </Link>
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenDropdown(null);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dbe0e7] p-2 transition-colors hover:bg-[#f7f6f2]"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <XIcon className="h-5 w-5 text-[#121c2b]" />
            ) : (
              <MenuIcon className="h-5 w-5 text-[#121c2b]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu — white dropdown panel below header */}
      {mobileOpen && (
        <div className="border-t border-[#dbe0e7] bg-white px-5 pb-8 lg:hidden sm:px-8">
          <nav className="mx-auto max-w-[1280px]">
            {dropdowns.map((dropdown) => (
              <div key={dropdown.label}>
                <DropdownButton
                  dropdown={dropdown}
                  isOpen={openDropdown === dropdown.label}
                  onToggle={() => handleDropdownToggle(dropdown.label)}
                />
                {openDropdown === dropdown.label && (
                  <div className="pb-2 pl-4">
                    {dropdown.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm text-[#435e6b] transition-colors hover:text-[#20949d]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {plainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[#dbe0e7] py-4 font-heading text-base text-[#121c2b]"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-6">
              <Link
                href="/thank-you/"
                onClick={() => setMobileOpen(false)}
                className="mb-3 block font-heading text-base font-medium text-[#20949d]"
              >
                Let&apos;s Connect
              </Link>
              <Link
                href="/thank-you/"
                onClick={() => setMobileOpen(false)}
                className="inline-block rounded-full bg-[#20949d] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a7a82]"
              >
                Schedule a Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
