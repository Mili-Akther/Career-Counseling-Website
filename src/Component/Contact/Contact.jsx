import React, { useState } from "react";
import contactUsImg from "../../assets/Contact-us.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false, message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ submitted: false, error: true, message: "Please fill out all fields" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ submitted: false, error: true, message: "Please enter a valid email address" });
      return;
    }

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for reaching out! We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setFormStatus({ submitted: false, error: false, message: "" });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-700 text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-18">
        {/* Left Side - Illustration */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <div className="bg-white bg-opacity-5 rounded-3xl sm:p-8 backdrop-blur-sm w-full max-w-md sm:max-w-lg">
            <div className="relative bg-cyan-100 h-52 sm:h-64 w-full border bg-opacity-20 rounded-2xl overflow-hidden">
              <img
                src={contactUsImg}
                alt="Contact"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full object-contain"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10  space-y-6 text-center lg:text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Office Location
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                123 Career Avenue, Suite 200
                <br />
                Professional District, CA 94103
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Contact Information
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Phone: (555) 123-4567
                <br />
                Email: info@careerguide.com
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-300">
                Office Hours
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-300 mb-6 text-center lg:text-left">
            CONTACT US
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="text-black w-full p-4 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none "
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="text-black w-full p-4 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="text-black w-full p-4 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition duration-300"
            >
              SUBMIT
            </button>

            {formStatus.message && (
              <div
                className={`p-4 rounded-lg text-center ${
                  formStatus.error
                    ? "bg-red-500 bg-opacity-20 text-red-300"
                    : "bg-green-500 bg-opacity-20 text-green-300"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </form>

          {/* Social Media Links */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center lg:text-left">
                Connect With Us
              </h3>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a
                  href="#"
                  className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Contact;
