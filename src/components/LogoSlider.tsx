
import React from 'react';

const LogoSlider = () => {
  const logos = [
    { name: "TechCorp", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center" },
    { name: "InnovateLab", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center" },
    { name: "DataFlow", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "CloudSync", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center" },
    { name: "DigitalMax", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop&crop=center" },
    { name: "SmartSoft", logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=120&h=60&fit=crop&crop=center" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=60&fit=crop&crop=center" },
    { name: "ProTech", logo: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=120&h=60&fit=crop&crop=center" },
  ];

  // Duplicate the logos array to create seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600">
            Join our growing list of satisfied clients
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll hover:pause">
            {duplicatedLogos.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for seamless effect */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-blue-50/30 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
