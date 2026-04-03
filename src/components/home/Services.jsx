import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../assets/images/service1.jpg";
import service2 from "../../assets/images/service2.jpg";
import service3 from "../../assets/images/service3.jpg";
import service4 from "../../assets/images/service4.jpg";
import service5 from "../../assets/images/service5.jpg";
import service6 from "../../assets/images/service6.jpg";
import service7 from "../../assets/images/service7.jpg";
import service8 from "../../assets/images/service8.jpg";

const services = [
  {
    title: "Specialized Concrete Repairs",
    image: service1,
  },
  {
    title: "Structural Audit & Scaffolding",
    image: service2,
  },
  {
    title: "Residential & Commercial Inspection",
    image: service3,
  },
  {
    title: "Bridge & Infrastructure Survey",
    image: service4,
  },
  {
    title: "Industrial Structure Strengthening",
    image: service5,
  },
  {
    title: "Drone-Aided Structural Inspection",
    image: service6,
  },
  {
    title: "Foundation & Grouting Works",
    image: service7,
  },
  {
    title: "Reinforcement & Rebar Works",
    image: service8,
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold text-gray-900 dark:text-white mb-12">
          Services Offered
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="h-48 rounded-lg overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-red-900 dark:text-red-300">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
