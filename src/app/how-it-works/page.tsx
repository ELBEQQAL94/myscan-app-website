"use client";

import { 
  Smartphone, 
  Scan, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Download,
  Settings,
  Heart,
  AlertTriangle,
  Zap,
  Database,
  Users
} from "lucide-react";
import Image from "next/image";

const detailedSteps = [
  {
    step: "01",
    icon: Download,
    title: "Download & Login",
    description: "Get MyScan from your app store and create your account to start your healthy journey.",
    details: [
      "Download from App Store or Google Play",
      "Create your account in under 2 minutes",
      "Secure login with email or social media",
      "Sync your data across devices",
      "Get started with a free account"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    step: "02", 
    icon: Settings,
    title: "Build Health Profile",
    description: "Set up your personalized health profile with diseases and allergies for accurate recommendations.",
    details: [
      "Select health conditions (diabetes, heart disease, etc.)",
      "Add allergies (nuts, gluten, dairy, shellfish)",
      "Set dietary preferences (halal, kosher, vegan)",
      "Configure medication interactions",
      "Enable family member profiles"
    ],
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200"
  },
  {
    step: "03",
    icon: Scan,
    title: "Start Scanning",
    description: "Point your camera at any product barcode for instant AI analysis against your health profile.",
    details: [
      "Works with any barcode or QR code",
      "Advanced AI recognition technology",
      "Works in low light conditions",
      "Scans damaged or partially obscured codes",
      "Instant product identification and analysis"
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    step: "04",
    icon: Shield,
    title: "See Results & Score",
    description: "View the product picture, health score, and detailed AI analysis tailored to your conditions.",
    details: [
      "Product image and basic information",
      "Health score (0-100) based on your profile",
      "Detailed AI analysis of ingredients",
      "Allergen alerts and warnings",
      "Personalized recommendations and alternatives"
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  },
  {
    step: "05",
    icon: CheckCircle,
    title: "Track Your History",
    description: "Access your scanned products history to see all products with their scores and make better decisions.",
    details: [
      "Complete history of scanned products",
      "Health scores and analysis for each item",
      "Search and filter by product type",
      "Export data for healthcare providers",
      "Track your healthy shopping progress"
    ],
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200"
  }
];

const features = [
  {
    icon: Heart,
    title: "Personalized Health",
    description: "Get recommendations tailored to your specific health conditions, allergies, and dietary preferences."
  },
  {
    icon: AlertTriangle,
    title: "Safety First",
    description: "Instant alerts for allergens, harmful ingredients, and products that don't match your dietary requirements."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in milliseconds with our optimized scanning technology and cloud-based AI processing."
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Create profiles for your entire family with individual dietary needs and health considerations."
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              How <span className="text-emerald-200">MyScan</span> Works
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Transform your shopping experience with our simple 5-step process. 
              Build your health profile, scan products, and track your healthy choices over time.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-full ${step.bgColor} border-2 ${step.borderColor} flex items-center justify-center font-bold text-lg ${step.color}`}>
                      {step.step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  
                  <div className="pl-4 pr-6 py-4 bg-gray-50 rounded-xl mb-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pl-4 pr-6 py-4 bg-white rounded-xl border border-gray-200">
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 ${step.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative flex items-center justify-center h-full">
                    {index === 0 ? (
                      // Step 1: Login screen
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
                    ) : index === 1 ? (
                      // Step 2: Health profile (diseases and allergies)
                      <div className="flex items-center justify-center gap-6">
                        <div className="w-48 h-96 bg-black rounded-2xl p-1 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                          <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                            <Image
                              src="/images/diseases.jpeg"
                              alt="MyScan App - Diseases Setup"
                              width={300}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="w-48 h-96 bg-black rounded-2xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                          <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                            <Image
                              src="/images/allergies.jpeg"
                              alt="MyScan App - Allergies Setup"
                              width={300}
                              height={600}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    ) : index === 2 ? (
                      // Step 3: Scanning
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
                    ) : index === 4 ? (
                      // Step 5: History
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
                    ) : (
                      <div className="text-center">
                        <step.icon className={`w-20 h-20 ${step.color} mx-auto mb-4`} />
                        <p className="text-gray-600 font-medium text-lg">Step {step.step}</p>
                        <p className="text-sm text-gray-500 mt-2">App Screenshot Coming Soon</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-emerald-600">MyScan</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our advanced technology and comprehensive database make healthy shopping effortless and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}