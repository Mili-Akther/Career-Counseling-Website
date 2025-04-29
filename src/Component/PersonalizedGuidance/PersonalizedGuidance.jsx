import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PersonalizedGuidance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Personalized Guidance
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-white">
        At our Career Counseling Website, we're dedicated to empowering
        individuals like you to take charge of your professional future. Whether
        you're just starting out, looking to make a change.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div
          className="rounded-xl bg-cyan-800 p-12 text-white shadow-lg"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://i.pravatar.cc/100"
              alt="counselor"
              className="w-16 h-16 rounded-full"
            />
            <h3 className="text-2xl font-bold">Unlock Your Potential</h3>
          </div>
          <p className="mb-6 text-sm md:text-base">
            Our team of experienced career counselors will work closely with you
            to assess your unique skills, interests, and goals, and then develop
            a customized action plan to help you navigate the job market,
            explore new career paths, and achieve your professional aspirations.
          </p>
          <button className="btn bg-gray-800 text-white hover:bg-gray-700 border-none">
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-xl bg-stone-600 p-12 text-white shadow-lg"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold mb-6">Discover Your Passion</h3>
          <p className="mb-6 text-sm md:text-base">
            Whether you're just starting out or looking to make a career change,
            our Career Counseling Website offers a wide range of resources and
            support to help you navigate the job market and find your ideal
            career path.
          </p>
          <button className="btn bg-gray-800 text-white hover:bg-gray-700 border-none">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedGuidance;
