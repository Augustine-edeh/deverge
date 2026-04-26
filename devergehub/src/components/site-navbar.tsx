"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

type SiteNavbarProps = {
  theme?: "dark" | "light";
};

export function SiteNavbar({ theme = "dark" }: SiteNavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const mobilePanelClass = isDark
    ? "border-white/10 bg-[#0c1618]/95 text-white"
    : "border-slate-200 bg-white text-slate-950";

  const mobileLinkClass = isDark
    ? "text-white/80 hover:text-white"
    : "text-slate-700 hover:text-slate-950";

  const buttonClass = "bg-[#18a85f] text-white hover:bg-[#149953]";

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w- [1280px] items-center justify-between px- 6 py-6  bg-pink-500">
        {/* ✅ LEFT: LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Brandmark.png"
            alt="De-Verge Hub logo"
            width={160}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* ✅ CENTER: NAV */}
        {/* <div className="hidden md:flex flex-1 ">  */}

        
        <nav className="hidden flex-1 justify-center md:flex gap-[60px] ">
          <div className="flex items-center gap-[60px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[1rem] font-medium transition duration-200 ${
                  pathname === item.href
                    ? "text-[#19b768]"
                    : "text-white/80 hover:text-[#19b768]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>


           {/* ✅ RIGHT: BUTTON */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden rounded-full px-6 py-3 text-sm font-semibold transition md:inline-flex ${buttonClass}`}
          >
            Contact Us
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
              isDark
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-white text-slate-900"
            }`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        </nav>

       
        {/* </div> */}
      </div>

      {/* ✅ MOBILE MENU */}
      {menuOpen && (
        <div
          className={`mx-6 mt-4 rounded-2xl border p-4 md:hidden ${mobilePanelClass}`}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${mobileLinkClass} ${
                  pathname === item.href
                    ? isDark
                      ? "bg-white/10 text-[#19b768]"
                      : "bg-emerald-50 text-[#18a85f]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`mt-3 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${buttonClass}`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
