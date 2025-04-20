import React from 'react';
import Banner from '../Banner/BAnner';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from '../ServicesCard/ServicesCard';
const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="grid md:grid-cols-3 gap-6 justify-center px-4 mt-18">
        {services.slice(0, 6).map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;