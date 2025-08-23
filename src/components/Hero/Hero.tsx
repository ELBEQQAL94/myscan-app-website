"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-emerald-600 text-white overflow-hidden">
      <div className="mx-auto grid items-center gap-12 lg:gap-20 px-6 py-12 sm:py-20 lg:py-24 lg:grid-cols-2 max-w-[1400px] relative">
        
        {/* Left: Lifestyle Image */}
        <div className="relative w-full">
          <div className="relative h-80 sm:h-[26rem] lg:h-[30rem] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/grocery-women.jpg"
              alt="Scanning products in a grocery aisle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Floating, iPhone-style phone - Optimal responsive positioning */}
          {/* Soft glow for depth */}
          <div aria-hidden className="absolute -bottom-8 sm:-bottom-10 right-1 sm:-right-6 lg:-bottom-10 lg:-right-8 h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-black/20 blur-2xl" />

          {/* iPhone-style phone (optimal responsive sizing and positioning) */}
          <div className="absolute -bottom-6 right-3 sm:-bottom-6 sm:-right-4 lg:-bottom-6 lg:-right-8 rotate-6">
            <div className="relative w-32 sm:w-40 md:w-44 lg:w-52 rounded-[1.35rem] bg-white p-[3px] shadow-[0_22px_60px_rgba(0,0,0,.45)] ring-1 ring-black/10">
              {/* inner bezel (also tighter) */}
              <div className="relative overflow-hidden rounded-[1.1rem] bg-black p-[3px] ring-1 ring-black/20">
                {/* screen */}
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[0.9rem]">
                  <Image
                    src="/images/scanscreen.jpg"
                    alt="Revela app screen"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 224px, (min-width: 768px) 176px, 128px"
                    priority
                  />
                </div>

                {/* optimal notch sizing */}
                <span
                  aria-hidden
                  className="absolute top-1 left-1/2 -translate-x-1/2 block h-[6px] sm:h-[8px] w-[44px] sm:w-[54px] rounded-b-[8px] sm:rounded-b-[10px] bg-black/90"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Headline + text + badge */}
        <div className="max-w-xl text-left lg:text-left">
          <h1 className="font-poppins text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight lg:whitespace-nowrap">
            Stay healthy, Stay radiant.
          </h1>

          <p className="mt-6 text-emerald-50 text-lg leading-relaxed">
            With <span className="font-semibold">Revela</span>, every label becomes clear.
            Scan products, decode ingredients, and choose what's right for your health and glow.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <Link href="https://play.google.com" aria-label="Download on the Play Store">
              <Image
                src="/badges/play-store-badge.png"
                alt="Get it on Google Play"
                width={164}
                height={56}
              />
            </Link>

            <Link href="https://apps.apple.com/app/idYOUR_APP_ID" aria-label="Download on the App Store">
              <Image
                src="/badges/ios-store-badge.png"
                alt="Download on the App Store"
                width={164}
                height={56}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}