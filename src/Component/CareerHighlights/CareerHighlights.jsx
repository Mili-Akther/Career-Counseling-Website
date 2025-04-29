import React, { useEffect } from "react";
import { FaSearch, FaRocket, FaTools, FaLayerGroup } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
  {
    icon: <FaSearch className="text-4xl text-cyan-400 mb-3" />,
    title: "Explore Opportunities",
    subtitle: "Unlock Your Professional Potential",
    highlight: "Achieve Your Dreams",
  },
  {
    icon: <FaRocket className="text-4xl text-pink-400 mb-3" />,
    title: "Grow Your Career",
    subtitle: "Discover the Path to Your Ideal Job",
  },
  {
    icon: <FaTools className="text-4xl text-cyan-400 mb-3" />,
    title: "Develop Your Skills",
    subtitle: "Maximize Your Career Prospects",
  },
  {
    icon: <FaLayerGroup className="text-4xl text-pink-400 mb-3" />,
    title: "Elevate Your Expertise",
    subtitle: "Thrive in Your Chosen Field",
  },
];

const CareerHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-300 text-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-10">
        <p className="text-xs sm:text-sm text-black mb-2">
          Unleash Your Potential
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Discover Your Calling
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`p-5 sm:p-6 rounded-md bg-gray-900 text-center transition-all hover:scale-105 ${
              index === 0 ? "border" : "border"
            } hover:border-cyan-400 hover:bg-gray-800 shadow-lg`}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {item.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              {item.subtitle}
            </p>
            {item.highlight && (
              <p className="mt-2 text-cyan-400 font-semibold text-sm sm:text-base">
                {item.highlight}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerHighlights;
