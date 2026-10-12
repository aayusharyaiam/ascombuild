import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/about_us.png";
import core1 from "../assets/images/core1.jpeg";
import aboutUsBg from "../assets/images/aboutus_bg.png";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-200 font-sans pt-20">
      {/* Page Title / Hero */}
      <div className="relative py-16 flex flex-col justify-center items-center text-center text-white" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${aboutUsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="z-10 relative">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl mb-4">About Us</h1>
          <div className="flex space-x-2 text-sm md:text-base justify-center">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-red-500">About Us</span>
          </div>
        </div>
      </div>

      {/* About ASCOM Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-4">
          <h2 className="font-light text-gray-800 dark:text-white uppercase tracking-wide">
            ABOUT <span className="font-bold">ASCOM</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <div className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
              <p className="mb-4">
                <strong>Renascence of Structures</strong> is the foundation of ASCOM BUILDCON. Founded on the principle that intelligent rehabilitation should be the cornerstone of every structural project, ASCOM represents a unique collaboration between academic excellence and field expertise.
              </p>
              <p className="mb-4">
                The company was founded by <strong>Dr. (Prof) Veerendra Kumar</strong>, Ex Head and Professor of IIT (BHU) Varanasi, with 36+ years of teaching and consulting experience. He partnered with <strong>Dr. Anjani Kumar Shukla</strong>, who holds a Ph.D. in Structural Rehabilitation from IIT (BHU) with 10+ years of experience in retrofitting and consultancy.
              </p>
              <p className="mb-4">
                The founding team also includes <strong>Dr. Dheeresh Nayak</strong> (Ph.D. IIT BHU, 15+ years in structural design), <strong>Mr. Rajesh Ranjan Srivastava</strong> (B.Tech, MBA IIM Calcutta, project management expert), and <strong>Mr. Raghavendra Kumar</strong> (M.Tech Structural Engineering, execution specialist).
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img
              src={heroImage}
              alt="About ASCOM"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be India's leading Structural Consultancy, Design, retrofitting, rehabilitation and strengthening firm, recognized for delivering innovative, sustainable solutions that preserve and renew critical civil infrastructure across the nation.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Providing scientific, innovative solutions for damaged and aged structures through technical audits by IIT experts, advanced testing, Structural Health Monitoring, and modern retrofitting techniques.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Integrity</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Transparent communication and honest assessment</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">💡</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Innovation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Continuous research and advanced techniques</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">⭐</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Excellence</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Highest standards of engineering practice</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">🛡️</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Safety</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Paramount concern in all operations</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">🌱</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Sustainability</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Extending life through rehabilitation</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-3xl mb-2">✓</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">Accountability</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Professional responsibility for outcomes</p>
            </div>
          </div>
        </div>

        {/* Strategic Location */}
        <div className="mt-12 bg-linear-to-r from-red-50 to-gray-50 dark:from-gray-700 dark:to-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Strategic Location</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Headquarters:</strong> Varanasi, Uttar Pradesh - One of India's oldest and most architecturally significant cities, also Hon'ble Prime Minister's constituency and a rising economic hub.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <strong>Branch Office:</strong> Noida, National Capital Region - Strategic base in one of India's fastest-growing business hubs with excellent connectivity.
          </p>
        </div>

        {/* Growth & Achievements */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Growth & Expansion</h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Completed 75+ major projects across 12 states in India
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Worked with government agencies, quasi-government organizations, and private sector clients
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Established track record of on-time, on-budget project delivery
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Specialized expertise in bridge rehabilitation, hospital strengthening, and heritage restoration
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Maintained 85%+ client retention rate for repeat projects
            </li>
          </ul >
        </div >
      </div >

      {/* Director's Message Section */}
      <div className="bg-white dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/4 flex flex-col items-center">
            <div className="bg-white p-2 shadow-lg rotate-2 transform hover:rotate-0 transition-transform duration-300 mb-4 border border-gray-200">
              <img
                src={core1}
                alt="Dr. Veerendra Kumar"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:w-3/4">
            <h2 className="font-light text-gray-800 dark:text-white mb-6 uppercase tracking-wide">
              Director's <span className="font-bold">Message</span>
            </h2>
            <div className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed">
              <p className="mb-4">
                I am delighted to put-forth few words about the objective of the ASCOM BUILDCON PRIVATE LIMITED.
              </p>
              <p className="mb-4">
                During my 36+ years of association with academics at IIT (BHU) Varanasi and providing consultancy services to numerous Government-sponsored projects, I have noticed that very few organizations are dedicated to the intelligent renovation of old and heritage buildings. Most approaches are either cosmetic in nature or involve complete dismantling and rebuilding.
              </p>
              <p className="mb-4">
                At ASCOM BUILDCON, we have adopted an innovative and cost-efficient approach to solving structural problems in damaged buildings and bridges. The Sir Sunderlal Hospital at BHU, King George Medical University Lucknow, and the 1.08 km Old Chopan Bridge across Sone River are prime examples of our retrofitting work, along with 75+ other major projects across 12 states.
              </p>
              <p className="mb-4">
                I am sure the technical capability and managerial approach of this organization will go a long way in carrying out retrofitting works in future.
              </p>
              <p className="mb-6">
                I wish a bright future for the company and the old structures which needs retrofitting under the management of this company.
              </p>

              <div className="text-gray-800 dark:text-gray-200">
                <p className="font-bold">Dr. (Prof) Veerendra Kumar</p>
                <p className="">(FIE, MICI, MISTE, FIGS, MIBC)</p>
                <p className="">Ex Head and Professor, Civil Engineering</p>
                <p className="">IIT (BHU) Varanasi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
