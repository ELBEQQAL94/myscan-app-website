"use client";

import { 
  Scan, 
  Shield, 
  Zap, 
  Smartphone,
  Database,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Instant Product Scanning",
    description: "Scan any product barcode or QR code to instantly access detailed ingredient information and nutritional data.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Allergen Detection",
    description: "Advanced AI-powered allergen detection that identifies potential risks and provides personalized safety alerts.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: CheckCircle,
    title: "Halal/Haram Detection",
    description: "Automatically detect halal and haram ingredients based on barcode scanning, helping you make informed religious dietary choices.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: AlertTriangle,
    title: "Disease Alerts",
    description: "Get personalized alerts for conditions like diabetes, helping you avoid ingredients that could affect your health.",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized scanning technology that works in milliseconds, even in low-light conditions or with damaged labels.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Smartphone,
    title: "Offline Access",
    description: "Download product databases for offline scanning, ensuring you always have access to critical information.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    icon: Database,
    title: "Comprehensive Database",
    description: "Access millions of products with detailed ingredient lists, nutritional facts, and health impact assessments.",
    color: "text-teal-600",
    bgColor: "bg-teal-50"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for
            <span className="text-emerald-600"> Smart Shopping</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how NutriScan transforms your shopping experience with cutting-edge technology 
            and comprehensive health insights at your fingertips.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Shopping Experience?
            </h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join millions of users who are making healthier choices with NutriScan. 
              Download now and start your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </button>
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                Download on App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
