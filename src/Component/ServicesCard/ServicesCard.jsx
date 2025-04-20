import React from "react";

const ServicesCard = ({ service }) => {
  const { image, name, category, price, counselor } = service;

  return (
    <div className="card bg-base-100 shadow-xl transition-transform hover:scale-105">
      <figure>
        <img src={image} alt={name} className="h-52 w-full object-fill" />
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
          <button className="btn btn-outline btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
