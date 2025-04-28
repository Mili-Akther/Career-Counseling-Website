import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import discoverImg from "../../assets/discover-your-path.jpg"
import yourDreamImg from "../../assets/Achieve-Your-Dreams.jpg"
import YourFutureImg from "../../assets/Create-Your-Future.jpg"
import YourDestinyImg from "../../assets/Shape-Your-Destiny.jpg"
const Banner = () => {
  const slidesData = [
    {
      title: "Discover Your Passion:",
      description:
        "Unlock your potential and take the first step towards a fulfilling career with our comprehensive programs.",
      button: "Get Started",
      img: discoverImg,
    },
    {
      title: "Achieve Your Dreams:",
      description:
        "Start your journey to success with guidance, resources, and support crafted just for you.",
      button: "Join Now",
      img: yourDreamImg,
    },
    {
      title: "Create Your Future:",
      description:
        "Empower yourself today to build the skills and mindset needed for tomorrow's challenges.",
      button: "Learn More",
      img: YourFutureImg,
    },
    {
      title: "Shape Your Destiny:",
      description:
        "Discover endless possibilities and ignite the fire within through our vibrant learning programs.",
      button: "Get Involved",
      img: YourDestinyImg,
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white text-black relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full min-h-screen"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-6 sm:px-10 py-16 sm:py-20">
              {/* Left Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start relative">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl font-black leading-tight"
                >
                  {slide.title}
                </motion.h1>

                <motion.h2
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-base sm:text-lg text-gray-600 tracking-tight mt-6 leading-relaxed"
                >
                  {slide.description.split("\n").map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br className="hidden sm:block" />
                    </span>
                  ))}
                </motion.h2>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-6 py-3 bg-black text-white uppercase text-sm tracking-wide font-bold rounded-full flex items-center gap-2"
                >
                  {slide.button} <span>→</span>
                </motion.button>

                {/* Social Icons */}
                <div className="flex flex-row md:flex-col mt-10 md:mt-20 gap-6 text-xl text-black">
                  <FaInstagram className="hover:text-pink-400 transition-colors duration-300 cursor-pointer" />
                  <FaFacebookF className="hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
                  <FaTwitter className="hover:text-blue-400 transition-colors duration-300 cursor-pointer" />
                </div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 h-[100px] sm:h-[100px] md:h-full flex items-center justify-center relative overflow-hidden rounded-2xl"
                
              >
                {/* Main Image */}
                <img
                  src={slide.img}
                  alt="Creative Guide"
                  className="h-[75%] sm:h-[85%] w-auto object-cover shadow-2xl"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
  