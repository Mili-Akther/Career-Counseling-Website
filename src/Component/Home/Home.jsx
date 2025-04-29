import React from "react";
import Banner from "../Banner/BAnner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import CareerHighlights from "../CareerHighlights/CareerHighlights";
import PersonalizedGuidance from "../PersonalizedGuidance/PersonalizedGuidance";
const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
      <Banner></Banner>

      <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-5 items-center justify-items-center mt-10 mb-10">
        {services.slice(2, 8).map((service) => (
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
      <button className="flex items-center btn bg-cyan-400 hover:bg-cyan-300 text-black btn-outline-outline text-xl mx-auto mt-6 mb-6">
        <NavLink to="/services">Show More</NavLink>
      </button>

      <CareerHighlights></CareerHighlights>
      <PersonalizedGuidance></PersonalizedGuidance>
    </div>
  );
};

export default Home;
