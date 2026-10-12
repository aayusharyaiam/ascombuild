import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Awards from "./pages/Awards";
import Leadership from "./pages/Leadership";
import ScrollToTop from "./components/ScrollToTop";
import Skyscrapers from "./pages/Skyscrapers";
import Bridges from "./pages/Bridges";
import StructuralDesign from "./pages/StructuralDesign";
import Consultancy from "./pages/Consultancy";
import Testing from "./pages/Testing";

const seoConfig = {
  "/": {
    title: "ASCOM | Structural Engineering & Construction Company in India",
    description:
      "ASCOM is a structural engineering and construction company in India offering structural audit, rehabilitation, retrofitting, bridge strengthening, testing, and repair solutions.",
    keywords:
      "structural engineering company, construction company India, bridge rehabilitation, structural audit, structural strengthening, NDT testing services, retrofitting contractors, civil construction company"
  },
  "/about-us": {
    title: "About ASCOM | Structural Engineering Experts",
    description:
      "Learn about ASCOM, a leading structural engineering and construction solutions company specializing in rehabilitation, repair, strengthening, and technical consultancy.",
    keywords:
      "about ASCOM, structural engineering experts, construction consultancy India, bridge strengthening company"
  },
  "/services": {
    title: "Construction & Structural Services | ASCOM",
    description:
      "ASCOM provides structural audit, NDT, bridge rehabilitation, fire damage assessment, seismic retrofitting, corrosion protection, and structural repair services.",
    keywords:
      "construction services, structural audit services, inspection company, bridge rehabilitation contractor, retrofitting services India"
  },
  "/projects": {
    title: "Projects | ASCOM Construction & Structural Solutions",
    description:
      "Explore ASCOM's structural repair, strengthening, and rehabilitation projects across bridges, skyscrapers, industrial structures, and civil infrastructure.",
    keywords:
      "construction projects, bridge strengthening projects, structural rehabilitation projects, civil engineering portfolio"
  },
  "/contact-us": {
    title: "Contact ASCOM | Construction & Structural Engineering Company",
    description:
      "Contact ASCOM for structural audit, bridge rehabilitation, civil repair, strengthening, testing, and construction consultancy services in India.",
    keywords:
      "contact construction company, structural engineering enquiry, bridge repair contractor, structural audit company India"
  },
  "/testing": {
    title: "NDT Testing Services | ASCOM",
    description:
      "ASCOM offers rebound hammer testing, UPV testing, half-cell potential, carbonation testing, rebar mapping, CAPO, load testing, and concrete investigation services.",
    keywords:
      "NDT testing services, UPV test, rebound hammer test, rebar mapping, concrete carbonation testing, structural testing company"
  },
  "/bridges": {
    title: "Bridge Rehabilitation & Strengthening | ASCOM",
    description:
      "Professional bridge rehabilitation, repair, strengthening, and structural restoration services for highway and urban bridge infrastructure.",
    keywords:
      "bridge rehabilitation company, bridge strengthening contractor, structural bridge repair, bridge restoration services"
  },
  "/skyscrapers": {
    title: "Skyscraper Structural Repair & Retrofitting | ASCOM",
    description:
      "ASCOM provides structural repair, strengthening, and rehabilitation solutions for high-rise buildings and skyscraper structures.",
    keywords:
      "skyscraper retrofitting, high rise structural repair, building strengthening contractor, structural rehabilitation services"
  },
  "/consultancy": {
    title: "Structural Consultancy | ASCOM Engineering Services",
    description:
      "Expert structural design consultancy, proof checking, technical review, and engineering solutions for construction and rehabilitation projects.",
    keywords:
      "structural consultancy, engineering consultancy company, proof checking engineers, design consultants India"
  },
  "/structural-design": {
    title: "Structural Design & Analysis | ASCOM",
    description:
      "ASCOM provides structural design, analysis, proof checking, and engineering support for buildings, bridges, water tanks, and industrial structures.",
    keywords:
      "structural design company, civil engineering design consultants, analysis and design services, proof checking engineers"
  },
  "/careers": {
    title: "Careers | ASCOM Engineering & Construction",
    description:
      "Join ASCOM and work with structural engineering and construction professionals on rehabilitation, repair, and infrastructure projects.",
    keywords:
      "careers in construction, structural engineering jobs, civil engineering careers India, ASCOM jobs"
  },
  "/clients": {
    title: "Clients | ASCOM",
    description:
      "Trusted by clients across infrastructure, industrial, and public sector projects for structural engineering and construction services.",
    keywords:
      "construction client portfolio, infrastructure clients, engineering services clients, ASCOM projects"
  },
  "/awards": {
    title: "Awards & Recognition | ASCOM",
    description:
      "ASCOM's engineering excellence in structural repair, strengthening, and construction solutions recognized through industry accomplishments.",
    keywords:
      "ASCOM awards, engineering recognition, construction excellence, structural engineering achievements"
  },
  "/leadership": {
    title: "Leadership | ASCOM",
    description:
      "Meet the leadership team behind ASCOM's structural engineering and construction expertise, delivering trusted rehabilitation solutions.",
    keywords:
      "ASCOM leadership, engineering leadership team, construction management team" 
  }
};

const seoDefaults = {
  title: "ASCOM | Structural Engineering & Construction Company",
  description:
    "ASCOM delivers structural engineering, bridge repair, rehabilitation, retrofitting, NDT testing, and construction consultancy solutions across India.",
  keywords:
    "construction company, structural engineering company, bridge repair, retrofitting, rehabilitation, NDT testing, civil engineering services, India"
};

function SEO() {
  const location = useLocation();

  useEffect(() => {
    const pageSeo = seoConfig[location.pathname] || seoDefaults;
    const canonicalUrl = `https://www.ascombuild.com${location.pathname}`;

    document.title = pageSeo.title;

    const setMeta = (selector, attribute, value) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "name", "description");
    setMeta('meta[name="keywords"]', "name", "keywords");
    setMeta('meta[name="robots"]', "name", "robots");
    setMeta('meta[property="og:title"]', "property", "og:title");
    setMeta('meta[property="og:description"]', "property", "og:description");
    setMeta('meta[property="og:type"]', "property", "og:type");
    setMeta('meta[property="og:url"]', "property", "og:url");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title");
    setMeta('meta[name="twitter:description"]', "name", "twitter:description");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card");
    setMeta('meta[name="canonical"]', "name", "canonical");

    const descriptionTag = document.querySelector('meta[name="description"]');
    const keywordsTag = document.querySelector('meta[name="keywords"]');
    const robotsTag = document.querySelector('meta[name="robots"]');
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    const twitterCardTag = document.querySelector('meta[name="twitter:card"]');
    const canonicalTag = document.querySelector('meta[name="canonical"]');

    if (descriptionTag) descriptionTag.setAttribute("content", pageSeo.description);
    if (keywordsTag) keywordsTag.setAttribute("content", pageSeo.keywords);
    if (robotsTag) robotsTag.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    if (ogTitleTag) ogTitleTag.setAttribute("content", pageSeo.title);
    if (ogDescriptionTag) ogDescriptionTag.setAttribute("content", pageSeo.description);
    if (ogTypeTag) ogTypeTag.setAttribute("content", "website");
    if (ogUrlTag) ogUrlTag.setAttribute("content", canonicalUrl);
    if (twitterTitleTag) twitterTitleTag.setAttribute("content", pageSeo.title);
    if (twitterDescriptionTag) twitterDescriptionTag.setAttribute("content", pageSeo.description);
    if (twitterCardTag) twitterCardTag.setAttribute("content", "summary_large_image");
    if (canonicalTag) canonicalTag.setAttribute("content", canonicalUrl);

    let jsonLdScript = document.querySelector('script[data-seo="ascom-structured-data"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.setAttribute("type", "application/ld+json");
      jsonLdScript.setAttribute("data-seo", "ascom-structured-data");
      document.head.appendChild(jsonLdScript);
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ConstructionCompany",
      name: "ASCOM",
      url: "https://www.ascombuild.com",
      logo: "https://www.ascombuild.com/src/assets/images/logo.png",
      description:
        "ASCOM is a structural engineering and construction company specializing in rehabilitation, retrofitting, bridge strengthening, structural testing, and civil engineering consultancy in India.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "202, Vrindavan Residency, Nuawn",
        addressLocality: "Varanasi",
        addressRegion: "Uttar Pradesh",
        postalCode: "221011",
        addressCountry: "IN"
      },
      telephone: "+91-9415-872-871",
      email: "info@ascombuild.com",
      areaServed: "India",
      sameAs: [],
      knowsAbout: [
        "Structural Engineering",
        "Construction Services",
        "Bridge Rehabilitation",
        "Retrofitting",
        "NDT Testing",
        "Concrete Repair",
        "Seismic Strengthening",
        "Civil Engineering Consultancy"
      ]
    };

    jsonLdScript.textContent = JSON.stringify(jsonLd);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SEO />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="careers" element={<Careers />} />
            <Route path="clients" element={<Clients />} />
            <Route path="awards" element={<Awards />} />

            {/* New Service Pages */}
            <Route path="skyscrapers" element={<Skyscrapers />} />
            <Route path="bridges" element={<Bridges />} />
            <Route path="structural-design" element={<StructuralDesign />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="testing" element={<Testing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
