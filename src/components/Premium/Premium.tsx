"use client";

import { 
  Check, 
  Star, 
  Crown,
  Zap,
  Shield,
  Database,
  Download,
  ArrowRight
} from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out our service",
    price: "0",
    period: "",
    badge: "CURRENT PLAN",
    badgeColor: "bg-orange-500",
    borderColor: "border-yellow-300",
    bgColor: "bg-yellow-50",
    features: [
      "Basic barcode scanning (camera)",
      "Product search",
      "Health score analysis", 
      "Manual barcode entry",
      "Limited scans per day (10)",
      "Basic allergen alerts"
    ],
    buttonText: "Current Plan",
    buttonStyle: "bg-gray-300 text-gray-600 cursor-not-allowed",
    popular: false
  },
  {
    name: "Pro",
    description: "Best for regular users",
    price: "21.99",
    period: "/month",
    currency: "MAD",
    badge: "MOST POPULAR",
    badgeColor: "bg-emerald-600",
    borderColor: "border-emerald-500",
    bgColor: "bg-white",
    features: [
      "Unlimited scans",
      "Detailed nutrition analysis",
      "Ingredient breakdown",
      "Personalized recommendations",
      "Halal/Haram detection",
      "Priority support",
      "Export features"
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "bg-emerald-600 text-white hover:bg-emerald-700",
    popular: true
  }
];

export default function Premium() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="text-emerald-600">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of healthy eating with our premium features.
            Start free and upgrade when you're ready.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-1 flex">
            <button className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold transition-colors duration-300">
              Monthly
            </button>
            <button className="px-6 py-3 rounded-lg text-gray-600 font-semibold transition-colors duration-300 relative">
              Yearly
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                30% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border-2 ${plan.borderColor} ${plan.bgColor} ${
                plan.popular ? 'shadow-2xl scale-105' : 'shadow-lg'
              } transition-all duration-300`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}>
                  {plan.popular && <Star className="w-4 h-4" />}
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="flex items-baseline justify-center">
                  {plan.currency && (
                    <span className="text-2xl text-gray-600 mr-2">{plan.currency}</span>
                  )}
                  <span className="text-6xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-2xl text-gray-600 ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.buttonStyle}`}
                disabled={plan.name === "Free"}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose MyScan Pro?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h4>
                <p className="text-gray-600">Get instant results with our optimized scanning technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">100% Secure</h4>
                <p className="text-gray-600">Your data is encrypted and never shared with third parties</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Database</h4>
                <p className="text-gray-600">Access to millions of products with detailed nutritional information</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
