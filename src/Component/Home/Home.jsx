import React from "react";
import Banner from "../Banner/BAnner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServicesCard from "../ServicesCard/ServicesCard";
import CareerHighlights from "../CareerHighlights/CareerHighlights";
import PersonalizedGuidance from "../PersonalizedGuidance/PersonalizedGuidance";
import { Helmet } from "react-helmet-async";
const Home = () => {
  const services = useLoaderData();
  // console.log(services);
  return (
    <div>
       <Helmet>
              <title>Home | CareerGuide</title>
            </Helmet>
      <Banner></Banner>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 lg:px-20 ">
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
