import React from "react";
import { FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const footerLinks = [
  "ABOUT US",
  "STORIES",
  "FAQ",
  "SHIPPING AND RETURNS",
  "IMPRINT",
  "DATA PRIVACY",
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-20 overflow-hidden relative">
      {/* STAY IN TOUCH Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <h1 className="text-6xl md:text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-blue-400 to-cyan-400 relative inline-block animate-pulse">
          STAY IN TOUCH
        </h1>
        <div className="mt-4 text-base md:text-lg text-gray-400">
          Subscribe to our newsletter and follow us on socials
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[500px] justify-between items-end">
        {/* Left Section - Contact Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <div>
            <p className="font-semibold text-2xl ">WE'RE HERE TO HELP</p>
            <p className="text-sm mt-1 text-gray-300">
              support@flowersforsociety.com
            </p>
          </div>
          <div className="flex gap-5 text-3xl">
            {[FaInstagram, FaDiscord, FaTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer hover:text-fuchsia-400"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Visit our community to get tips, guides, and counseling updates.
          </p>
        </motion.div>

        {/* Right Section - Useful Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-sm grid gap-3 mt-6 md:mt-0"
        >
          {footerLinks.map((link, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.05, color: "#a78bfa" }}
              className="hover:underline w-fit"
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="text-center text-xs text-gray-500 mt-16"
      >
        © 2025 FLOWERS FOR SOCIETY. All rights reserved. Built with 💜 for
        aspiring dreamers.
      </motion.div>

      {/* Shine animation styling */}
      <style>{`
        .animate-pulse {
          animation: pulseText 3s ease-in-out infinite;
        }

        @keyframes pulseText {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
