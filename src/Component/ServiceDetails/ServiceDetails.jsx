import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {
      id,
      image,
      name,
      category,
      price,
      counselor,
      description,
      duration,
      rating,

    } = useLoaderData();
    return (
      <section className="min-h-screen w-full bg-gradient-to-br from-[#dbdddd] to-[#56828b] text-white flex flex-col justify-center items-center px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16 ">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight -mt-42">
            Personalized <br />
            <span className="text-cyan-300">Career Guidance</span>
          </h1>
          <p className="mt-6 max-w-3xl text-gray-300 text-lg sm:text-xl">
            Our team of experienced career counselors is dedicated to helping
            you identify your strengths, explore your interests, and discover
            the right career path that aligns with your goals.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-64 w-full max-w-7xl">
          {/* Left Text Block */}
          <div className="text-left max-w-md space-y-6">
            <h2 className="text-4xl font-bold text-pink-500">
              Unlock Your Potential
            </h2>
            <p className="text-gray-300 text-lg">
              At our Career Counseling Website, we believe that everyone
              deserves the opportunity to pursue fulfilling work. Our expert
              counselors will work closely with you to uncover your unique
              talents, passions, and aspirations.
            </p>
            <button className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-full font-semibold transition duration-300">
              book a session
            </button>
          </div>

          {/* Right Image */}
          <div className="w-[340px] sm:w-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={image}
              alt="Career Counselor"
              className="w-[4000px] h-[450px] border-5 rounded-3xl border-cyan-400"
            />
          </div>
        </div>
      </section>
    );
};

export default ServiceDetails;