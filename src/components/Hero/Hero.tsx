"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[length:60px_60px] opacity-30" />
      
      <div className="mx-auto grid items-center gap-12 lg:gap-16 px-6 sm:px-8 py-16 sm:py-24 lg:py-32 lg:grid-cols-2 max-w-7xl relative">
        
        {/* Left: Lifestyle Image */}
        <div className="relative w-full">
          <div className="relative h-56 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/grocery-women.jpg"
              alt="Scanning products in a grocery aisle"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating, iPhone-style phone - Optimal responsive positioning */}
          {/* Soft glow for depth */}
          <div aria-hidden className="absolute -bottom-8 sm:-bottom-10 right-1 sm:-right-6 lg:-bottom-10 lg:-right-8 h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-white/10 blur-2xl" />

          {/* iPhone-style phone (optimal responsive sizing and positioning) */}
          <div className="absolute -bottom-3 right-1 sm:-bottom-3 sm:-right-1 lg:-bottom-3 lg:-right-2 rotate-6">
            <div className="relative w-24 sm:w-32 md:w-36 lg:w-40 rounded-[1.2rem] bg-white p-[2px] shadow-[0_15px_40px_rgba(0,0,0,.4)] ring-1 ring-white/20">
              {/* inner bezel (also tighter) */}
              <div className="relative overflow-hidden rounded-[1.1rem] bg-black p-[3px] ring-1 ring-black/20">
                {/* screen */}
                <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[0.9rem]">
                  <Image
                    src="/images/scanscreen.jpg"
                    alt="MyScan app screen"
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
        <div className="max-w-lg text-left lg:text-left">

          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Scan Smart,
            <span className="block text-emerald-200">Live Healthy</span>
          </h1>

          <p className="text-lg text-emerald-100 leading-relaxed mb-6">
            Transform your shopping experience with <span className="font-semibold">MyScan</span>. 
            Instantly decode ingredients, detect allergens, and make informed choices for your health and wellness.
          </p>



          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.myscan.appmyscan&hl=en-US&ah=18noWpdmfPucrIRUnO0pPFZG4S8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-all duration-300 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 rounded-lg"
              />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-all duration-300 rounded-lg shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-10 rounded-lg"
              />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 flex items-center gap-4 text-sm text-emerald-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Free to download
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              No ads
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Privacy focused
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}