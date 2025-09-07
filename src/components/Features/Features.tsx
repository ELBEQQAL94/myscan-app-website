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
            Discover how MyScan transforms your shopping experience with cutting-edge technology 
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

      </div>
    </section>
  );
}