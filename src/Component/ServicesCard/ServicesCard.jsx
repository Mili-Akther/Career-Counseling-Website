import React from "react";
import { NavLink } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { image, name, category, price, counselor, id } = service;

  return (
    <div className="card card-body bg-base-100 shadow-xl transition-transform hover:scale-105 mx-auto">
      <figure className="w-full h-[220px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-48 overflow-hidden object-center w-[400px] rounded-lg"
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
            <button className="btn btn-outline btn-outline-outline">
              Learn More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
