import React from "react";
import energyImg from "../../assets/images/structure.jpg";
import hospitalImg from "../../assets/images/building.jpg";
import bridgeImg from "../../assets/images/bridge.jpg";
import damImg from "../../assets/images/dam.jpg";
import fireImg from "../../assets/images/1_1.jpg";
import heritageImg from "../../assets/images/1_2.jpg";
import industrialImg from "../../assets/images/bulding.jpg";
import marineImg from "../../assets/images/1_3.jpg";

const markets = [
  {
    title: "Energy/Data Center",
    image: energyImg,
  },
  {
    title: "Hospital",
    image: hospitalImg,
  },
  {
    title: "Bridges & Flyovers",
    image: bridgeImg,
  },
  {
    title: "Dams & Irrigation",
    image: damImg,
  },
  {
    title: "Damaged Structures",
    image: fireImg,
  },
  {
    title: "Heritage",
    image: heritageImg,
  },
  {
    title: "Industrial Structures",
    image: industrialImg,
  },
  {
    title: "Marine Structures",
    image: marineImg,
  },
];

const MarketServed = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 relative inline-block">
          Market Served
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600"></span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={market.image}
                alt={market.title}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {market.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Read All
          </a>
        </div>
      </div>
    </section>
  );
};

export default MarketServed;
