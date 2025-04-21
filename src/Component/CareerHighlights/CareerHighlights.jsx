import React from "react";
import { FaSearch, FaRocket, FaTools, FaLayerGroup } from "react-icons/fa";

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
  return (
    <div className=" bg-gradient-to-br  from-[#dbdddd] to-[#56828b] text-white py-12 px-4">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-400">Unleash Your Potential</p>
        <h2 className="text-4xl font-bold text-white">Discover Your Calling</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-md bg-gray-900 text-center transition-all hover:scale-105 ${
              index === 0 ? "border" : "border-0"
            } hover:border-cyan-400 hover:bg-gray-800 shadow-lg`}
          >
            {/* Icon */}
            {item.icon}
            <h3 className="text-lg font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400">{item.subtitle}</p>
            {item.highlight && (
              <p className="mt-2 text-cyan-400 font-semibold">
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
