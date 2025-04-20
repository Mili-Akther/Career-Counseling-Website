import React from 'react';
import femaleImg from "../../assets/laptop-female-pic.png";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Banner = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between w-full h-screen overflow-hidden bg-white text-black">
        {/* Left content */}
        <div className="w-full md:w-1/2 px-10 py-20">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-5xl font-black"
          >
            Discover Your Passion:
          </motion.h1>

          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-lg text-gray-600 tracking-tight mt-6"
          >
            Unlock your potential and take the first step <br /> towards a
            fulfilling Career with our Comprehensive
          </motion.h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-black text-white uppercase text-sm tracking-wide font-bold rounded-full flex items-center gap-2"
          >
            Get Started <span>→</span>
          </motion.button>

          {/* Social icons */}
          <div className="flex flex-col mt-20 gap-6 text-lg text-black">
            <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
            <FaFacebookF className="hover:text-blue-500 transition-colors duration-300" />
            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
          </div>

          {/* Vertical navigation dots */}
          <div className="absolute left-4 bottom-10 text-sm space-y-2 text-gray-400">
            <p className="hover:text-black cursor-pointer">1</p>
            <p className="hover:text-black cursor-pointer">2</p>
            <p className="hover:text-black cursor-pointer">3</p>
            <p className="hover:text-black cursor-pointer">4</p>
          </div>
        </div>
        {/* Right image */}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 h-full flex items-center justify-center relative overflow-hidden"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(to bottom right, rgb(233, 213, 255), rgb(168, 85, 247))",
                "linear-gradient(to bottom right, rgb(224, 242, 254), rgb(129, 140, 248))",
                "linear-gradient(to bottom right, rgb(254, 215, 244), rgb(216, 88, 229))",
                "linear-gradient(to bottom right, rgb(233, 213, 255), rgb(168, 85, 247))",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <img
            src={femaleImg} // replace with actual path
            alt="Career Guide"
            className="h-[90%]  rounded-[2rem] object-cover relative z-12"
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
          />
        </motion.div>
      </section>
    );
};

export default Banner;