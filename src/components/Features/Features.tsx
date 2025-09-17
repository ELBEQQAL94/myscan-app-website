"use client";

import Image from "next/image";
import { 
  Scan, 
  Shield, 
  Smartphone,
  Database,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Instant Product Scanning",
    description: "Scan any product barcode or enter the barcode manually to instantly access detailed ingredient information and nutritional data.",
    benefits: ["Millisecond scanning", "Works in low light", "Damaged barcode support"],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    screenshot: "/images/scanscreen.jpg"
  },
  {
    icon: Shield,
    title: "Allergen Detection",
    description: "Advanced AI-powered allergen detection that identifies potential risks and provides personalized safety alerts.",
    benefits: ["AI-powered detection", "Personalized alerts", "Real-time warnings"],
    color: "text-green-600",
    bgColor: "bg-green-50",
    screenshot: "/images/allergies.jpeg"
  },
  {
    icon: CheckCircle,
    title: "Halal/Haram Detection",
    description: "Automatically detect halal and haram ingredients based on barcode scanning, helping you make informed religious dietary choices.",
    benefits: ["Religious compliance", "Ingredient analysis", "Trusted verification"],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    screenshot: "/images/halal_haram_feature.jpeg"
  },
  {
    icon: AlertTriangle,
    title: "Disease Alerts",
    description: "Get personalized alerts for conditions like diabetes, helping you avoid ingredients that could affect your health.",
    benefits: ["Health monitoring", "Personalized alerts", "Medical guidance"],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    screenshot: "/images/diseases.jpeg"
  },
  {
    icon: Database,
    title: "Product Details & Analysis",
    description: "Get comprehensive product information including detailed ingredient lists, nutritional facts, and health impact assessments.",
    benefits: ["Detailed analysis", "Nutritional facts", "Health insights"],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    screenshot: "/images/details_scan_product.jpeg"
  },
  {
    icon: Smartphone,
    title: "Personal Profile Setup",
    description: "Create your personal health profile to receive customized alerts for allergies, diseases, and dietary restrictions.",
    benefits: ["Customized alerts", "Health tracking", "Personalized experience"],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    screenshot: "/images/diseases.jpeg"
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access millions of products with detailed ingredient lists, nutritional facts, and health impact assessments.",
    benefits: ["Millions of products", "Detailed analysis", "Health insights"],
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    screenshot: "/images/comprensive_product.jpeg"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-emerald-600"> Smart Shopping</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Make informed decisions about what you eat with our powerful scanning technology and detailed health analysis.
          </p>
        </div>

        {/* Features with Mobile Screenshots */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center justify-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Mobile Screenshot */}
              <div className="w-full lg:w-1/2 max-w-sm">
                {feature.title === "Personal Profile Setup" ? (
                  // Special layout for Profile feature with two screenshots
                  <div className="relative group">
                    <div className="flex gap-4 justify-center">
                      {/* Disease Screenshot */}
                      <div className="relative">
                        <div className="relative mx-auto w-56 h-[450px] bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                            {/* Full Screenshot - No overlays */}
                            <div className="absolute top-0 left-0 right-0 bottom-0">
                              <Image
                                src="/images/diseases.jpeg"
                                alt="Disease Alerts - App Screenshot"
                                width={224}
                                height={450}
                                className="w-full h-full object-cover"
                                style={{ filter: 'none' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                          Disease Alerts
                        </div>
                      </div>
                      
                      {/* Allergy Screenshot */}
                      <div className="relative">
                        <div className="relative mx-auto w-56 h-[450px] bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl">
                          <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                            {/* Full Screenshot - No overlays */}
                            <div className="absolute top-0 left-0 right-0 bottom-0">
                              <Image
                                src="/images/allergies.jpeg"
                                alt="Allergy Detection - App Screenshot"
                                width={224}
                                height={450}
                                className="w-full h-full object-cover"
                                style={{ filter: 'none' }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-medium">
                          Allergy Detection
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Feature Icon */}
                    <div className={`absolute -top-2 -right-2 w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>
                ) : (
                  // Regular single screenshot layout
                  <div className="relative group">
                    <div className="relative mx-auto w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-1.5 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                        {/* Full Screenshot - No overlays */}
                        <div className="absolute top-0 left-0 right-0 bottom-0">
                          <Image
                            src={feature.screenshot}
                            alt={`${feature.title} - App Screenshot`}
                            width={256}
                            height={500}
                            className="w-full h-full object-cover"
                            style={{ filter: 'none' }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className={`absolute -top-2 -right-2 w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>
                )}
              </div>

              {/* Feature Description */}
              <div className="w-full lg:w-1/2 max-w-lg">
                <div className="space-y-6">
                  {/* Feature Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}