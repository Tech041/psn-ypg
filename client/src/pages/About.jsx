import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const services = [
  "E-commerce applications",
  "Business landing pages",
  "portfolio websites",
  "real estate applications",
  "dashboards",
  "learning management systems",
];

const About = () => {
  return (
    <section className="w-full min-h-screen pt-20 pb-5">
      <div className="container">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full pt-10"
        >
          <h1 className="text-xl font-semibold text-center text-green-600 italic">
            About MedHunt
          </h1>
          <p className="py-2">
            The PSN-YPG Job Portal is a smart, user-friendly platform designed
            to make job hunting  and internship placement easier for pharmacists. Built specifically for
            the  PSN-YPG Lagos chapter, it connects pharmacy professionals
            with the opportunities they deserve—quickly and efficiently
          </p>
          <p className="py-2">
            Crafted by a Pharmacist who is equally a Software Engineer, this
            portal is his way of blending tech with pharmacy practice. Through
            his company,{" "}
            <a
              href="https://neltech.onrender.com"
              target="_blank"
              className="text-blue-600"
            >
              NELTECH
            </a>
            , where he builds modern solutions that solve real-world problems.
          </p>
          <h2 className="">
            What we build at NELTECH include but not limited to:
          </h2>
          <ul className="">
            {services.map((service, index) => (
              <li key={index} className="py-1 capitalize text-green-900">
                {service}
              </li>
            ))}
          </ul>
          <div className="">
            <h2 className="">
              He is open for collaborations and ready to solve real-world
              problems through tech. Call or whatsapp
            </h2>
            <p className="py-1">📞 Call or WhatsApp: 08030507512</p>
            <p className="">
              🌐 Visit:
              <a
                className="underline text-blue-700 pl-2"
                href="https://neltech.onrender.com"
                target="_blank"
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

export default About;
