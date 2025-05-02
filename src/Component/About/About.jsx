import React from "react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
       <Helmet>
              <title>About US | CareerGuide</title>
            </Helmet>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column - About Heading and Text */}
          <div className="w-full lg:w-2/5 lg:sticky lg:top-16">
            <h1 className="text-6xl md:text-7xl font-bold text-cyan-300 mb-8">
              About Us
            </h1>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg">
                Since our founding in 2018, we've been dedicated to empowering
                individuals to discover their professional path with confidence
                and clarity.
              </p>
              <p className="text-lg">
                Our team of certified career counselors brings decades of
                combined experience across various industries, offering insights
                that bridge the gap between education and meaningful employment.
              </p>
              <p className="text-lg font-medium">
                We believe that everyone deserves a fulfilling career that
                aligns with their unique talents, passions, and life goals.
              </p>
            </div>
          </div>

          {/* Right Column - Features with Icons */}
          <div className="w-full lg:w-3/5 space-y-12 mt-8 lg:mt-0">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-300 bg-opacity-25 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Research-Based Approach
                </h3>
                <p className="text-gray-300">
                  Our guidance is founded on extensive research into labor
                  market trends, industry developments, and psychological
                  principles of career satisfaction. We continuously update our
                  methodologies to reflect the evolving job landscape, ensuring
                  that our clients receive the most relevant and effective
                  career advice.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-300 bg-opacity-25 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Strategic Career Planning
                </h3>
                <p className="text-gray-300">
                  We go beyond simple job matching to develop comprehensive
                  career strategies that account for short-term goals and
                  long-term aspirations. Our personalized action plans include
                  skill development roadmaps, networking strategies, and
                  milestone achievements to guide clients through each stage of
                  their professional journey.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-300 bg-opacity-25 p-4 rounded-lg w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  Human-Centered Design
                </h3>
                <p className="text-gray-300">
                  Our counseling programs are designed with the client
                  experience at the forefront. We combine intuitive assessment
                  tools, engaging workshops, and compassionate one-on-one
                  guidance to create a supportive environment where
                  self-discovery and professional growth can flourish naturally
                  and comfortably.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6">
                Our Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Team Member 1 */}
                <div className="bg-white bg-opacity-5 p-6 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                      <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt="counselor"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    Jennifer Davis
                  </h3>
                  <p className="text-cyan-400 text-center text-sm mb-3">
                    Founder & Lead Counselor
                  </p>
                  <p className="text-gray-300 text-center text-sm">
                    Former HR executive with 15+ years experience in talent
                    acquisition and development.
                  </p>
                </div>

                {/* Team Member 2 */}
                <div className="bg-white bg-opacity-5 p-6 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                      <img
                        src="https://i.pravatar.cc/150?img=59"
                        alt="counselor"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    Robert Martinez
                  </h3>
                  <p className="text-cyan-400 text-center text-sm mb-3">
                    Career Development Director
                  </p>
                  <p className="text-gray-300 text-center text-sm">
                    Certified career coach specializing in career transitions
                    and professional reinvention.
                  </p>
                </div>

                {/* Team Member 3 */}
                <div className="bg-white bg-opacity-5 p-6 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                      <img
                        src="https://i.pravatar.cc/150?img=68"
                        alt="counselor"
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-center">
                    Aisha Kumar
                  </h3>
                  <p className="text-cyan-400 text-center text-sm mb-3">
                    Industry Relations Specialist
                  </p>
                  <p className="text-gray-300 text-center text-sm">
                    Former tech recruiter with extensive network across multiple
                    industries.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6">
                Our Impact
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white bg-opacity-5 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-cyan-300 mb-2">
                    5,000+
                  </p>
                  <p className="text-gray-300">Clients Served</p>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-cyan-300 mb-2">87%</p>
                  <p className="text-gray-300">Career Satisfaction</p>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-cyan-300 mb-2">45</p>
                  <p className="text-gray-300">Industry Partners</p>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg text-center">
                  <p className="text-4xl font-bold text-cyan-300 mb-2">12</p>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
