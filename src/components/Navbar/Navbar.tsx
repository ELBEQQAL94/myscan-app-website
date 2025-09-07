"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";

// Main nav items
const NAV = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
] as const;

// Keep in sync with header height: h-20 = 5rem
const HEADER_H_REM = 5;

// Same background as the navbar (so the panel matches perfectly)
const NAV_BG =
  "bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 border-b border-gray-200/50";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [open, mounted]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    if (mq.matches) setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      aria-label="Primary"
      className={`${NAV_BG} sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white/98" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Image
                src="/logo-ultimate.svg"
                alt="MyScan Logo"
                width={40}
                height={40}
                className="w-full h-full"
                priority
              />
            </div>
            <span className="font-bold text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
              My<span className="text-emerald-600">Scan</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:text-[16px] text-gray-700 font-medium">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-all duration-300 text-[18px] hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg px-3 py-2 hover:bg-emerald-50 ${
                    pathname === item.href ? "text-emerald-600 bg-emerald-50" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-4 h-4" />
              Download App
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-panel"
            aria-expanded={open}
          >
            {!open ? (
              <Menu className="w-5 h-5 text-gray-700" />
            ) : (
              <X className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mounted &&
        open &&
        createPortal(
          <div
            id="mobile-panel"
            role="dialog"
            aria-modal="true"
            className="fixed left-0 right-0 z-[9999] overflow-auto"
            style={{
              top: `${HEADER_H_REM}rem`,
              height: `calc(100dvh - ${HEADER_H_REM}rem)`,
            }}
            onClick={() => setOpen(false)}
          >
            <div
              className={`h-full w-full ${NAV_BG} shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-gray-200`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full w-full max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                  <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-800">
                    {NAV.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`hover:text-emerald-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg px-4 py-2 hover:bg-emerald-50 ${
                            pathname === item.href ? "text-emerald-600 bg-emerald-50" : ""
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg"
                    onClick={() => setOpen(false)}
                  >
                    <Download className="w-5 h-5" />
                    Download the App
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
}