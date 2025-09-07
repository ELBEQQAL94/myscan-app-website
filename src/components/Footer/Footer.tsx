"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Healthy Journey?
          </h3>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl mx-auto">
            Join millions of users who are making healthier choices with MyScan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </div>

        {/* Footer Content */}
        <div className="border-t border-emerald-500 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <Image
                  src="/logo-ultimate.svg"
                  alt="MyScan Logo"
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold">MyScan</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="/" className="text-emerald-100 hover:text-white transition-colors">Home</a>
              <a href="/features" className="text-emerald-100 hover:text-white transition-colors">Features</a>
              <a href="/pricing" className="text-emerald-100 hover:text-white transition-colors">Pricing</a>
              <a href="/how-it-works" className="text-emerald-100 hover:text-white transition-colors">How It Works</a>
              <a href="/contact" className="text-emerald-100 hover:text-white transition-colors">Contact</a>
            </div>

            {/* Copyright */}
            <p className="text-emerald-100 text-sm">
              © 2025 MyScan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
