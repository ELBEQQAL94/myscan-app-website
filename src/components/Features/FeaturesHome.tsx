"use client";

import { 
  Scan, 
  Shield, 
  Zap, 
  Heart,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Instant Scanning",
    description: "Scan any product barcode to get instant ingredient analysis and health insights.",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Shield,
    title: "Allergen Detection",
    description: "Advanced AI detects allergens and harmful ingredients tailored to your profile.",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Get personalized recommendations based on your health conditions and dietary needs.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in milliseconds with our optimized scanning technology.",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  }
];

export default function FeaturesHome() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-emerald-600">MyScan</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed decisions about what you eat with our powerful scanning technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-emerald-200"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
