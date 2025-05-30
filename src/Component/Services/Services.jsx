import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-4 py-10">
           <Helmet>
                  <title>Services | CareerGuide</title>
                </Helmet>
        {services.map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    );
};

export default Services;