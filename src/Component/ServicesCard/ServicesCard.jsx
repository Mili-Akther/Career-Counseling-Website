import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCard = ({ service }) => {
  const { image, name, category, price, counselor, id } = service;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-base-100 shadow-xl transition-transform hover:scale-105 w-full max-w-md mx-auto rounded-xl"
      data-aos="fade-up"
    >
      <figure className="w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-t-xl">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </figure>
      <div className="p-6 space-y-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Counselor:</strong> {counselor}
        </p>
        <div className="text-right mt-4">
          <NavLink to={`/serviceDetails/${id}`}>
            <button className="btn bg-cyan-400 hover:bg-cyan-300 text-black">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
