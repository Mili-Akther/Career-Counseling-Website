import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please fill out all fields",
      });
      return;
    }

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: "Please enter a valid email address",
      });
      return;
    }

    // Simulating form submission
    // In a real app, you would send this data to your backend
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: "Thank you for reaching out! We'll get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          error: false,
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side - Illustration */}
          <div className="w-full lg:w-1/2 lg:order-1 order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-16 -left-8 w-64 h-64 bg-cyan-500 bg-opacity-10 rounded-full blur-xl"></div>
              <div className="absolute top-32 -right-8 w-48 h-48 bg-pink-500 bg-opacity-10 rounded-full blur-xl"></div>

              {/* Main Illustration */}
              <div className="relative z-10 bg-white bg-opacity-5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex justify-center mb-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 w-20 bg-cyan-100 bg-opacity-20 rounded-lg"></div>
                    <div className="h-24 w-20 bg-cyan-300 bg-opacity-20 rounded-lg"></div>
                    <div className="h-24 w-20 bg-cyan-100 bg-opacity-20 rounded-lg"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full h-64 bg-cyan-200 bg-opacity-20 rounded-2xl relative">
                    {/* Stylized character */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                      <svg
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z"
                          fill="#3ABFF8"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M70 120C70 120 85 140 100 140C115 140 130 120 130 120"
                          stroke="#3ABFF8"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <circle cx="70" cy="80" r="10" fill="#3ABFF8" />
                        <circle cx="130" cy="80" r="10" fill="#3ABFF8" />
                        <path
                          d="M100 100C100 100 80 95 70 110"
                          stroke="#3ABFF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Laptop */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-white bg-opacity-30 rounded-t-lg"></div>
                </div>

                {/* Side table with plant */}
                <div className="flex justify-end mt-4">
                  <div className="w-24 flex flex-col items-center">
                    <div className="w-10 h-16 bg-cyan-600 bg-opacity-20 rounded-md"></div>
                    <div className="w-14 h-1 bg-amber-600 bg-opacity-40"></div>
                    <div className="w-16 h-1 bg-amber-600 bg-opacity-40 -mt-0.5"></div>
                  </div>
                </div>

                {/* Plant */}
                <div className="absolute left-8 bottom-16">
                  <div className="w-16 h-10 bg-amber-700 bg-opacity-30 rounded-md"></div>
                  <div className="absolute bottom-8 left-2">
                    <svg
                      width="50"
                      height="80"
                      viewBox="0 0 50 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 0C15 20 5 30 5 50C5 70 25 80 25 80C25 80 45 70 45 50C45 30 35 20 25 0Z"
                        fill="#4ADE80"
                        fillOpacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 space-y-6 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-semibold text-cyan-300">
                  Office Location
                </h3>
                <p className="text-gray-300">
                  123 Career Avenue, Suite 200
                  <br />
                  Professional District, CA 94103
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300">
                  Contact Information
                </h3>
                <p className="text-gray-300">
                  Phone: (555) 123-4567
                  <br />
                  Email: info@careerguide.com
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-300">
                  Office Hours
                </h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-2/5 lg:order-2 order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-8 text-center lg:text-left">
              CONTACT US
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full p-4 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 focus:border-cyan-300 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition duration-300"
              >
                SUBMIT
              </button>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.error
                      ? "bg-red-500 bg-opacity-20"
                      : "bg-green-500 bg-opacity-20"
                  }`}
                >
                  <p
                    className={`text-center ${
                      formStatus.error ? "text-red-300" : "text-green-300"
                    }`}
                  >
                    {formStatus.message}
                  </p>
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
    </div>
  );
};

export default Contact;
