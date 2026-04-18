import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center bg-gradient-to-b from-green-50 to-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full"
        >
          {/* About YPG Job Portal */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 italic pb-10">
            About YPG Job Portal.
          </h1>
          <p className="py-6 text-gray-700 leading-relaxed text-lg md:text-xl text-center max-w-3xl mx-auto">
            The PSN-YPG Job Portal is a smart, user-friendly platform designed
            to make job hunting and internship placement easier for pharmacists.
            Built specifically for the PSN-YPG Lagos chapter, it connects
            pharmacy professionals with the opportunities they deserve—quickly
            and efficiently.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
