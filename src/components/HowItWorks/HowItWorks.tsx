"use client";

import { 
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
    borderColor: "border-blue-200",
    screenshot: "/images/login.jpeg"
  },
  {
    step: "02", 
    icon: Settings,
    title: "Build Health Profile",
    description: "Set up your health profile with diseases (diabetes, heart conditions) and allergies (nuts, gluten, dairy) for personalized recommendations.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    screenshot: "/images/comprensive_product.jpeg"
  },
  {
    step: "03",
    icon: Scan,
    title: "Start Scanning",
    description: "Point your camera at any product barcode. Our AI instantly recognizes the product and analyzes it against your health profile.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    screenshot: "/images/scanscreen.jpg"
  },
  {
    step: "04",
    icon: Shield,
    title: "See Results & Score",
    description: "View the product picture, health score, and detailed AI analysis showing exactly how it affects your specific conditions and allergies.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    screenshot: "/images/details_scan_product.jpeg"
  },
  {
    step: "05",
    icon: CheckCircle,
    title: "Track Your History",
    description: "Access your scanned products history tab to see all products with their scores, helping you make better shopping decisions over time.",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    screenshot: "/images/scanned_product_list.jpeg"
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
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="w-full lg:w-1/2 max-w-lg">
                <div className="space-y-6">
                  {/* Step Number & Title */}
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center font-bold text-lg ${step.color}`}>
                      {step.step}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step Visual */}
              <div className="w-full lg:w-1/2 max-w-md">
                <div className="relative group">
                  <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                      {/* Full Screenshot - No overlays */}
                      <div className="absolute top-0 left-0 right-0 bottom-0">
                        {index === 0 ? (
                          <Image
                            src="/images/login.jpeg"
                            alt="MyScan App - Login Screen"
                            width={256}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ filter: 'none' }}
                          />
                        ) : index === 1 ? (
                          <div className="flex items-center justify-center gap-4 h-full">
                            <div className="w-32 h-96 bg-black rounded-xl p-1">
                              <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                                <Image
                                  src="/images/diseases.jpeg"
                                  alt="Disease Setup"
                                  width={128}
                                  height={384}
                                  className="w-full h-full object-cover"
                                  style={{ filter: 'none' }}
                                />
                              </div>
                            </div>
                            <div className="w-32 h-96 bg-black rounded-xl p-1">
                              <div className="w-full h-full bg-white rounded-lg overflow-hidden">
                                <Image
                                  src="/images/allergies.jpeg"
                                  alt="Allergy Setup"
                                  width={128}
                                  height={384}
                                  className="w-full h-full object-cover"
                                  style={{ filter: 'none' }}
                                />
                              </div>
                            </div>
                          </div>
                        ) : index === 2 ? (
                          <Image
                            src="/images/scanscreen.jpg"
                            alt="MyScan App - Scanning Interface"
                            width={256}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ filter: 'none' }}
                          />
                        ) : index === 3 ? (
                          <Image
                            src="/images/details_scan_product.jpeg"
                            alt="MyScan App - Product Results"
                            width={256}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ filter: 'none' }}
                          />
                        ) : (
                          <Image
                            src="/images/scanned_product_list.jpeg"
                            alt="MyScan App - Product History"
                            width={256}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ filter: 'none' }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Step Icon */}
                  <div className={`absolute -top-2 -right-2 w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
