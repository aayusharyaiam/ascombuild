import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScrollTop]);

  const scrollToTop = () => {
    // Custom smooth scroll implementation to ensure animation works consistently
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 800; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuart) for smooth finish
      const ease = 1 - Math.pow(1 - percentage, 4);

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <footer className="bg-[#2a2d34] text-[#DDDDDD] pt-16 pb-4 relative mt-auto font-['Rajdhani'] text-lg leading-relaxed font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Us */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-400 leading-relaxed text-justify">
              Renascence of structures is the basal of the founding the ASCOM. This company is a confluence of a IIT Kanpur alumnus of 1974 batch who is a legendary structural engineer with approx. 38 year of teaching experience to the best talent of country, with a young, dynamic and swingeing field Engineer carrying doctoral degree in retrofitting and strengthening of damaged structures.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="http://www.facebook.com/" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="http://www.twitter.com/" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a href="http://www.instagram.com/" className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-sm hover:bg-red-600 hover:border-red-600 transition-colors">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors inline-block border-b border-gray-700 pb-1">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-red-500 transition-colors inline-block border-b border-gray-700 pb-1">About ASCOM</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-red-500 transition-colors inline-block border-b border-gray-700 pb-1">What we do</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-red-500 transition-colors inline-block border-b border-gray-700 pb-1">Careers</Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-red-500 transition-colors inline-block border-b border-gray-700 pb-1">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="">
            <h3 className="text-lg font-bold text-white mb-4">Contact us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></span>
                <span>202, Vrindavan Residency, Nuwan<br />Varanasi, 221011</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></span>
                <span>
                  <a href="tel:+919415872871" className="hover:text-red-500 transition-colors">+91 9415 872 871</a> / <br />
                  <a href="tel:05424013470" className="hover:text-red-500 transition-colors">0542 4013470</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                <span>
                  <a href="mailto:info@ascombuild.com" className="hover:text-red-500 transition-colors">info@ascombuild.com</a> /<br />
                  <a href="mailto:rajesh@ascombuild.com" className="hover:text-red-500 transition-colors">rajesh@ascombuild.com</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Brand/Owner Section */}
          <div className="flex flex-col items-center justify-center pt-8 lg:pt-0">
            <img src={logo} alt="ASCOM" className="h-16 w-auto mb-4" />
            <span className="text-white font-bold text-xl tracking-wider">ASCOM</span>
            <p className="text-gray-500 text-xs mt-2 text-center">Structural Engineering Experts</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#22252b] mt-12 py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-500 text-center">
            <a href="https://projectx-portfolio.vercel.app/" className="hover:text-red-500 transition-colors">Developed by WebTiqo Services</a>
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
      </button>
    </footer>
  );
};

export default Footer;
