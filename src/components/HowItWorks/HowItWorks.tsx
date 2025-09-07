"use client";

import { 
  Smartphone, 
  Scan, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Download,
  Settings
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download & Login",
    description: "Get MyScan from the App Store or Google Play. Create your account and log in to start your healthy journey.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    step: "02", 
    icon: Settings,
    title: "Build Health Profile",
    description: "Set up your health profile with diseases (diabetes, heart conditions) and allergies (nuts, gluten, dairy) for personalized recommendations.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    step: "03",
    icon: Scan,
    title: "Start Scanning",
    description: "Point your camera at any product barcode. Our AI instantly recognizes the product and analyzes it against your health profile.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    step: "04",
    icon: Shield,
    title: "See Results & Score",
    description: "View the product picture, health score, and detailed AI analysis showing exactly how it affects your specific conditions and allergies.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    step: "05",
    icon: CheckCircle,
    title: "Track Your History",
    description: "Access your scanned products history tab to see all products with their scores, helping you make better shopping decisions over time.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-emerald-600">MyScan</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your shopping experience in just 5 simple steps. 
            Build your health profile, scan products, and track your healthy choices over time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 via-purple-200 via-orange-200 to-teal-200 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${step.borderColor} hover:border-emerald-300 group-hover:-translate-y-2`}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center font-bold text-sm ${step.color}`}>
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="w-6 h-6 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* App Preview */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              See MyScan in Action
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Watch how easy it is to scan products and get instant, personalized health insights.
            </p>
            
            {/* App Screenshots */}
            <div className="relative max-w-6xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Login Screen */}
                <div className="flex items-center justify-center">
                  <div className="w-48 h-96 bg-black rounded-2xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <Image
                        src="/images/login.jpeg"
                        alt="MyScan App - Login Screen"
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Scan Screen */}
                <div className="flex items-center justify-center">
                  <div className="w-48 h-96 bg-black rounded-2xl p-1 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <Image
                        src="/images/scanscreen.jpg"
                        alt="MyScan App - Scanning Interface"
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* History Screen */}
                <div className="flex items-center justify-center">
                  <div className="w-48 h-96 bg-black rounded-2xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                      <Image
                        src="/images/scanned_product_list.jpeg"
                        alt="MyScan App - Product History"
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
