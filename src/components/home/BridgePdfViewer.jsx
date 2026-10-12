import React, { useEffect, useState } from "react";
import slide1 from "../../assets/images/1_1.png";
import slide2 from "../../assets/images/2.png";
import slide3 from "../../assets/images/3.png";
import slide4 from "../../assets/images/4.png";
import slide5 from "../../assets/images/5.png";

const slides = [
  { src: slide1, alt: "Bridge rehabilitation project image 1" },
  { src: slide2, alt: "Bridge rehabilitation project image 2" },
  { src: slide3, alt: "Bridge rehabilitation project image 3" },
  { src: slide4, alt: "Bridge rehabilitation project image 4" },
  { src: slide5, alt: "Bridge rehabilitation project image 5" }
];

const BridgePdfViewer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white relative inline-block">
            Bridge Transformation Showcase
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-red-600"></span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base">
            A visual overview of our bridge rehabilitation and strengthening work, presented as a rotating project gallery.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-gray-100 dark:bg-gray-800">
          <div className="relative w-full h-[420px] sm:h-[500px] md:h-[620px] overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-red-200">ASCOM Projects</p>
              <h3 className="mt-2 text-2xl font-bold">Bridge Rehabilitation & Strengthening</h3>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white dark:bg-gray-900 px-4 py-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex ? "w-8 bg-red-600" : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BridgePdfViewer;
