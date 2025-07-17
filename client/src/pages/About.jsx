import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
            PSN-YPG Job Portal, is a smart technology to create a better
            job-hunting experience among pharmacists.
          </p>
          <p className="py-2">
            Designed and developed by Pharm Nelson who is a pharmacist and
            software Engineer, this is his humble contribution to modernize
            pharmacy practise through technology.This platform is built for
            PSN-YPG Lagos chapter to connect pharmacists with the opportunities
            they deserve. PSN-YPG Job Portal simplifies the hiring process,
            enhances applicant visibility, and helps organizations find talent
            faster.
          </p>
          <p className="py-2">
            It’s more than a portal—it’s a purposeful solution born out of
            real-world insight and a passion for innovation. Whether you're an
            employer or job seeker, PSN-YPG Job Portal is here to make the
            process easy, transparent, and efficient.
          </p>
          <div className="">
            <h2 className="">
              He is open for collaborations and ready to solve real-world
              problems through tech. Call or whatsapp
            </h2>
            <p className="">08030507512</p>
            <p className="">
              Portfolio:{" "}
              <a
                className="underline text-blue-700"
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
