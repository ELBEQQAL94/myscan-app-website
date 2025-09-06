"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
<<<<<<< HEAD

// Main nav items (const so types are narrow)
=======
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";

// Main nav items
>>>>>>> feat/hero-feature-section
const NAV = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
] as const;

// Keep in sync with header height: h-20 = 5rem
const HEADER_H_REM = 5;

// Same background as the navbar (so the panel matches perfectly)
<<<<<<< HEAD
const NAV_BG = "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // true after first client render (needed for portals)
  const pathname = usePathname(); // current route

  // We are on the client now
  useEffect(() => setMounted(true), []);

  // Lock page scroll when the mobile panel is open
=======
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

>>>>>>> feat/hero-feature-section
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.style.overflow = open ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [open, mounted]);

<<<<<<< HEAD
  // Close the panel when the viewport goes to desktop (>= md)
=======
>>>>>>> feat/hero-feature-section
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
<<<<<<< HEAD
    // Run once in case we're already on desktop
=======
>>>>>>> feat/hero-feature-section
    if (mq.matches) setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

<<<<<<< HEAD
  // Close the panel after navigating to a new route
=======
>>>>>>> feat/hero-feature-section
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
<<<<<<< HEAD
    // The site header. Stays visible (logo + MENU/X).
    <nav
      aria-label="Primary"
      className={`${NAV_BG} border-b border-slate-200 shadow-sm`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header bar (logo + links + menu button) */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo (left) */}
          <Link href="/" className="font-extrabold text-3xl text-slate-900">
            My<span className="text-[#00C853]">Scan</span>
          </Link>

          {/* Desktop links (center/right) */}
          <ul className="hidden md:flex items-center gap-10 lg:text-[16px] text-slate-700 font-medium">
=======
    <nav
      aria-label="Primary"
      className={`${NAV_BG} sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white/98" : "shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <Image
                src="/logo-ultimate.svg"
                alt="NutriScan Logo"
                width={40}
                height={40}
                className="w-full h-full"
                priority
              />
            </div>
            <span className="font-bold text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
              Nutri<span className="text-emerald-600">Scan</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 lg:text-[16px] text-gray-700 font-medium">
>>>>>>> feat/hero-feature-section
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
<<<<<<< HEAD
                  className="transition-colors text-[20px] hover:text-[#00C853] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded"
=======
                  className={`transition-all duration-300 text-[18px] hover:text-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg px-3 py-2 hover:bg-emerald-50 ${
                    pathname === item.href ? "text-emerald-600 bg-emerald-50" : ""
                  }`}
>>>>>>> feat/hero-feature-section
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

<<<<<<< HEAD
          {/* Mobile: MENU -> X (right) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded"
=======
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
>>>>>>> feat/hero-feature-section
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-panel"
            aria-expanded={open}
          >
            {!open ? (
<<<<<<< HEAD
              <>
                <span className="text-[20px] font-bold tracking-widest text-slate-900">
                  MENU
                </span>
                {/* 3-line burger icon */}
                <span aria-hidden className="relative block h-4 w-5">
                  <span className="absolute left-0 top-0 block h-0.5 w-5 bg-slate-900" />
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 block h-0.5 w-5 bg-slate-900" />
                  <span className="absolute left-0 bottom-0 block h-0.5 w-5 bg-slate-900" />
                </span>
              </>
            ) : (
              // X icon when open
              <span aria-hidden className="relative block h-5 w-5">
                <span className="absolute inset-0 block h-0.5 w-5 bg-slate-900 rotate-45 top-1/2 -translate-y-1/2" />
                <span className="absolute inset-0 block h-0.5 w-5 bg-slate-900 -rotate-45 top-1/2 -translate-y-1/2" />
              </span>
=======
              <Menu className="w-5 h-5 text-gray-700" />
            ) : (
              <X className="w-5 h-5 text-gray-700" />
>>>>>>> feat/hero-feature-section
            )}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile panel (under the header), rendered into <body> to avoid layout constraints */}
=======
      {/* Mobile panel */}
>>>>>>> feat/hero-feature-section
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
<<<<<<< HEAD
            onClick={() => setOpen(false)} // click outside content closes
          >
            <div
              className={`h-full w-full ${NAV_BG} shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-slate-200`}
              onClick={(e) => e.stopPropagation()} // keep inner clicks
            >
              {/* Center the content; give side space so the shadow is visible */}
              <div className="h-full w-full max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                  {/* Mobile links (center) */}
                  <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-slate-800">
=======
            onClick={() => setOpen(false)}
          >
            <div
              className={`h-full w-full ${NAV_BG} shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-gray-200`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full w-full max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                  <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-gray-800">
>>>>>>> feat/hero-feature-section
                    {NAV.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
<<<<<<< HEAD
                          className="hover:text-[#00C853] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2 rounded"
=======
                          className={`hover:text-emerald-600 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg px-4 py-2 hover:bg-emerald-50 ${
                            pathname === item.href ? "text-emerald-600 bg-emerald-50" : ""
                          }`}
>>>>>>> feat/hero-feature-section
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

<<<<<<< HEAD
                  {/* CTA button */}
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-bold text-white bg-[#00C853] hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853] focus-visible:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    Download the app
=======
                  <Link
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg"
                    onClick={() => setOpen(false)}
                  >
                    <Download className="w-5 h-5" />
                    Download the App
>>>>>>> feat/hero-feature-section
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
