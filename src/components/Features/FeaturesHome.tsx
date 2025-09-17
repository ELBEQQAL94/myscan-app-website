"use client";

const features = [
  {
    title: "Scan",
    description: "Point your camera at any product barcode",
    image: "/images/scanscreen.jpeg"
  },
  {
    title: "See Details",
    description: "Get instant health analysis and ingredients",
    image: "/images/details_scan_product.jpeg"
  },
  {
    title: "Track Scans",
    description: "View your scanned products history",
    image: "/images/scanned_product_list.jpeg"
  },
  {
    title: "Get Recommendations",
    description: "Receive personalized health suggestions",
    image: "/images/comprensive_product.jpeg"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* iPhone Mockup */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-52 h-[400px] mx-auto group-hover:scale-105 transition-transform duration-300">
                  {/* iPhone Body */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[2rem] p-1 shadow-xl">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-[1.5rem] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-black rounded-b-lg z-10"></div>
                      
                      {/* Screen Content */}
                      <div className="w-full h-full pt-6">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                  
                  {/* Side Buttons */}
                  <div className="absolute left-0 top-12 w-0.5 h-5 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-18 w-0.5 h-6 bg-gray-700 rounded-r-sm"></div>
                  <div className="absolute left-0 top-28 w-0.5 h-6 bg-gray-700 rounded-r-sm"></div>
                  
                  {/* Power Button */}
                  <div className="absolute right-0 top-16 w-0.5 h-10 bg-gray-700 rounded-l-sm"></div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
