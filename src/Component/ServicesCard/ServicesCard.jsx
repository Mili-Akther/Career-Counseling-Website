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
      className="card bg-base-100 p- shadow-xl transition-transform hover:scale-105 w-full"
      data-aos="fade-up"
    >
      <figure className="w-full h-[300px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Price:</strong> {price}
        </p>
        <p>
          <strong>Counselor:</strong> {counselor}
        </p>
        <div className="card-actions justify-end">
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
