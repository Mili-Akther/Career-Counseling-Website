import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services);
    return (
      <div className="grid md:grid-cols-3 gap-6 justify-center px-4 mt-18">
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    );
};

export default Services;