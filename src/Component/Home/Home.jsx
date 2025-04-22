import React from 'react';
import Banner from '../Banner/BAnner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';
import CareerHighlights from '../CareerHighlights/CareerHighlights';
const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>

      <div className="grid md:grid-cols-4  gap-6 justify-center mt-18">
        {services.slice(0, 4).map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>  
      <button className="btn btn-outline btn-primary mx-auto mt-6">
        <NavLink to="/services">Show More</NavLink>
      </button>

      <CareerHighlights></CareerHighlights>
    </div>
  );
};

export default Home;