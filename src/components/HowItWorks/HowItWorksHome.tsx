"use client";

import { 
  Download,
  Settings,
  Scan,
  Shield,
  CheckCircle
} from "lucide-react";
import Image from "next/image";

const steps = [
  {
    step: "01",
    icon: Download,
    title: "Download & Login",
    description: "Get MyScan from your app store and create your account.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    step: "02", 
    icon: Settings,
    title: "Build Profile",
    description: "Set up your health profile with diseases and allergies.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    step: "03",
    icon: Scan,
    title: "Start Scanning",
    description: "Point your camera at any product barcode for instant analysis.",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    step: "04",
    icon: Shield,
    title: "Get Results",
    description: "View health scores and personalized recommendations.",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

export default function HowItWorksHome() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-emerald-600">MyScan</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your shopping experience in just 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Number & Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full ${step.bgColor} border-4 border-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className={`text-2xl font-bold ${step.color}`}>{step.step}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-emerald-200 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-emerald-200 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* App Screenshots */}
        <div className="mt-20 flex justify-center items-center gap-12">
          <div className="w-48 h-96 bg-black rounded-3xl p-1 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              <Image
                src="/images/login.jpeg"
                alt="MyScan App - Login"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-48 h-96 bg-black rounded-3xl p-1 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              <Image
                src="/images/scanscreen.jpg"
                alt="MyScan App - Scanning"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-48 h-96 bg-black rounded-3xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
              <Image
                src="/images/scanned_product_list.jpeg"
                alt="MyScan App - Results"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
