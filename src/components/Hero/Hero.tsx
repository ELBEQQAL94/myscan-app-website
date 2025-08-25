"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[length:60px_60px] opacity-30" />
      
      <div className="mx-auto grid items-center gap-12 lg:gap-20 px-6 py-16 sm:py-24 lg:py-32 lg:grid-cols-2 max-w-[1400px] relative">
        
        {/* Left: Lifestyle Image */}
        <div className="relative w-full">
          <div className="relative h-80 sm:h-[28rem] lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
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
          <div className="absolute -bottom-6 right-3 sm:-bottom-6 sm:-right-4 lg:-bottom-6 lg:-right-8 rotate-6">
            <div className="relative w-32 sm:w-40 md:w-44 lg:w-52 rounded-[1.35rem] bg-white p-[3px] shadow-[0_25px_70px_rgba(0,0,0,.5)] ring-1 ring-white/20">
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
        <div className="max-w-xl text-left lg:text-left">

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Scan Smart,
            <span className="block text-emerald-200">Live Healthy</span>
          </h1>

          <p className="text-xl text-emerald-100 leading-relaxed mb-8">
            Transform your shopping experience with <span className="font-semibold">NutriScan</span>. 
            Instantly decode ingredients, detect allergens, and make informed choices for your health and wellness.
          </p>



          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="https://play.google.com" 
              aria-label="Download on the Play Store"
              className="group bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="https://apps.apple.com/app/idYOUR_APP_ID" 
              aria-label="Download on the App Store"
              className="group bg-emerald-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-800/70 transition-all duration-300 flex items-center gap-3 border border-white/20"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              Download on App Store
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center gap-6 text-sm text-emerald-200">
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