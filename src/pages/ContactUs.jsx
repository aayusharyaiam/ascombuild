import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    location: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200 pt-20">
      {/* Hero Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            We are here to help you with your structural rehabilitation needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Address
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    <strong>Registered Office:</strong> <br />
                    202, Vrindavan Residency, Nuawn <br />
                    Varanasi, Uttar Pradesh - 221011 <br />
                    India
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    <strong>Branch Office:</strong> <br />
                    WA12A, Laxmi Nagar, New Delhi
                  </p>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    CIN No.: U45309UP2022PTC158277
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Phone
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Mobile: <a href="tel:+919968660751" className="hover:text-red-500">+91 9968660751</a> <br />
                    Phone: <a href="tel:+915424013470" className="hover:text-red-500">0542 4013470</a>
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-red-600 dark:text-red-400">
                    Email
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    <a
                      href="mailto:info@ascombuild.com"
                      className="hover:text-red-500 dark:hover:text-red-300"
                    >
                      info@ascombuild.com
                    </a> <br />
                    <a
                      href="mailto:anjani@ascombuild.com"
                      className="hover:text-red-500 dark:hover:text-red-300"
                    >
                      anjani@ascombuild.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Google Map Embed */}
            <div className="h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Google Map Location"
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?q=Vrindavan+Residency+Apartments&ll=25.2448052,82.9777575&z=16&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name of Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your Company or Organization"
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mob No::
                </label>
                <input
                  type="tel"
                  name="mobile"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="+91 99999 99999"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Your City or Location"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Project Enquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Describe your structural issues..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
              ✓
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Thank you for contacting us our team will reach you soon
            </h3>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
