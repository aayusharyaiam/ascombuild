import React from "react";
import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import MarketServed from "../components/home/MarketServed";
import ProjectLifeCycle from "../components/home/ProjectLifeCycle";
import Services from "../components/home/Services";
import Stats from "../components/home/Stats";

const Home = () => {
  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 antialiased bg-white dark:bg-gray-900 transition-colors duration-200">
      <Hero />
      <AboutUs />
      <MarketServed />
      <div className="text-center py-4 bg-red-600 text-white font-bold text-xl uppercase tracking-wider">
        {/* Small Banner between sections if needed. For now just spacing */}
      </div>
      <ProjectLifeCycle />
      <Services />
      <Stats />

      {/* Structural Issue CTA - This mimics the site style, maybe keep it or move to footer? Keeping for now as page specific content */}
      <div className="bg-red-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-2xl font-bold text-white mb-4 md:mb-0">
            Structural Issues? Email us!
          </h2>
          <a
            href="mailto:info@ascombuild.com"
            className="bg-white text-red-700 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            Mail Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
