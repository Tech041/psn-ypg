import React from "react";
import { motion } from "framer-motion";

const services = [
  "E-commerce applications",
  "Business landing pages",
  "portfolio websites",
  "real estate applications",
  "dashboards",
  "job portals",
  "learning management systems and other custom applications",
];

const Advert = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full"
        >
          {/* About Developer */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 italic pt-10 pb-4">
            About Neltech
          </h1>
          <p className="py-4 text-gray-700 leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto">
            <a
              href="https://neltech.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
            >
              NELTECH
            </a>{" "}
            is a software development company that specializes in creating
            innovative digital solutions.
          </p>

          {/* Services */}
          <h2 className="text-xl md:text-2xl font-semibold text-green-700 mt-10 mb-6 text-center">
            What We Build at NELTECH
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white shadow-md rounded-lg p-4 text-center capitalize text-green-900 font-medium hover:shadow-lg transition"
              >
                {service}
              </motion.li>
            ))}
          </ul>

          {/* Contact Section */}
          <div className="mt-12 bg-green-100 shadow-lg rounded-xl p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-4">
              For Business Owners
            </h2>
            <p className="text-gray-700 mb-4 text-lg">
              Are you a business owner who wants to boost your business
              coverage? He is here to craft powerful software applications for
              you.
            </p>
            <p className="py-2 text-lg font-semibold text-gray-800">
              📞 Call or WhatsApp:{" "}
              <span className="text-green-700">08030507512</span>
            </p>
            <p className="py-2 text-lg font-semibold text-gray-800">
              🌐 Visit:
              <a
                className="underline text-blue-700 pl-2"
                href="https://neltech.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://neltech.onrender.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advert;
