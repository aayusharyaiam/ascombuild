import React from "react";
import { Link } from "react-router-dom";

const servicesList = [
  {
    title: "Structural Audit & Inspection",
    description: "Comprehensive structural audits by IIT experts including visual inspection, drone-aided assessment, material sampling, and detailed technical reports with actionable recommendations.",
    icon: "🔍"
  },
  {
    title: "Non-Destructive Testing (NDT)",
    description: "State-of-the-art NDT services using AI-based instruments: UPV testing, rebound hammer, ferrous scanner, half-cell potentiometer, carbonation testing, and CAPO testing.",
    icon: "🔬"
  },
  {
    title: "Structural Health Monitoring (SHM)",
    description: "Real-time monitoring using AI-based data acquisition systems with wireless/wired sensors for continuous assessment and early warning systems.",
    icon: "📊"
  },
  {
    title: "Static & Dynamic Load Testing",
    description: "Comprehensive load testing of bridges and buildings with controlled loading, deflection measurement, and capacity verification against design requirements.",
    icon: "⚖️"
  },
  {
    title: "Structural Retrofitting & Strengthening",
    description: "Scientific retrofitting using CFRP, FRP jacketing, external post-tensioning, steel plate strengthening, and modern/conventional materials with FEM analysis.",
    icon: "🏗️"
  },
  {
    title: "Bridge Rehabilitation",
    description: "Complete bridge rehabilitation services including girder strengthening, deck overlay, bearing replacement, expansion joint repair, and load redistribution analysis.",
    icon: "🌉"
  },
  {
    title: "Structural Design & Analysis",
    description: "Comprehensive design services for bridges, buildings, water tanks, and industrial structures using advanced FEA software (ANSYS, ABAQUS, SAP2000, STAAD Pro).",
    icon: "📐"
  },
  {
    title: "Detailed Design & Proof Checking Expertise",
    description: "Expert in Detailed Structural Design and Proof Checking of complex structures, which include reinforced concrete structures, prestressed and post-tensioned structures, composite structures, and steel structures, utilizing modern AI tools and advanced engineering software.",
    icon: "✓"
  },
  {
    title: "Fire Damage Assessment & Repair",
    description: "Post-fire structural assessment, damage quantification, concrete restoration, reinforcement repair, and performance verification for occupancy approval.",
    icon: "🔥"
  },
  {
    title: "Seismic Retrofitting",
    description: "Upgrading existing structures to meet current seismic codes with advanced analysis, shear strengthening, and disaster resilience design.",
    icon: "🌊"
  },
  {
    title: "Heritage Structure Preservation",
    description: "Specialized restoration of heritage buildings using period-appropriate methodologies while maintaining architectural integrity and archaeological sensitivity.",
    icon: "🏛️"
  },
  {
    title: "Concrete Repair & Restoration",
    description: "High-performance concrete repair for spalling, cracking, carbonation using scientific methodologies, repair mortars, and surface protection systems.",
    icon: "🧱"
  },
  {
    title: "Carbon Fiber Reinforcement (CFRP)",
    description: "Application of carbon fiber reinforced polymer systems for structural strengthening of beams, columns, and slabs with minimal weight addition.",
    icon: "💪"
  },
  {
    title: "Foundation Strengthening",
    description: "Underpinning, ground improvement, and foundation capacity enhancement solutions for settlement issues and load capacity upgrades.",
    icon: "⚓"
  },
  {
    title: "Waterproofing Solutions",
    description: "Comprehensive waterproofing for basements, roofs, water-retaining structures, and underground facilities using advanced membrane systems.",
    icon: "💧"
  },
  {
    title: "Corrosion Study & Protection",
    description: "Comprehensive corrosion assessment, chloride content testing, and implementation of cathodic protection systems for marine and industrial environments.",
    icon: "🛡️"
  }
];

const Services = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-300">
            Comprehensive structural engineering solutions backed by IIT expertise and cutting-edge technology.
          </p>
        </div>
      </div>

      {/* Services Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-linear-to-r from-red-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Specialized Expertise in Structural Rehabilitation
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            ASCOM provides comprehensive, integrated solutions for structural rehabilitation, strengthening, and repair. Our service portfolio encompasses the complete lifecycle of structural assessment through design, implementation, and performance monitoring.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🎓</div>
              <p className="font-semibold text-gray-800 dark:text-white">IIT Expertise</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Technical audits by IIT professors and alumni</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <p className="font-semibold text-gray-800 dark:text-white">AI-Based Testing</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">World-class instruments from leading manufacturers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌍</div>
              <p className="font-semibold text-gray-800 dark:text-white">75+ Projects</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Across 12 states in India</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col group"
            >
              <div className="p-6 grow">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 px-6 py-4 border-t border-gray-100 dark:border-gray-700">
                <Link
                  to="/contact-us"
                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium text-sm flex items-center group"
                >
                  Get a Quote
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Key Competencies */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Competencies</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Finite Element Analysis (FEA)</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Using ANSYS, ABAQUS for complex structural problems</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Advanced Material Testing</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">NDT, semi-destructive, and destructive testing methods</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Bridge Rehabilitation</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Complete bridge assessment, load testing, and strengthening</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Heritage Building Restoration</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Specialized preservation with architectural integrity</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Project Management</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">On-time, on-budget delivery with 85%+ client retention</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Design of Rehabilitation Schemes</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Complete design with BoQ and construction methodology</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Need a specialized service?</span>
            <span className="block text-red-600 dark:text-red-400">
              Contact our IIT experts today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact-us"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Get in Touch
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
