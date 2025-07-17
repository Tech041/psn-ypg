import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { motion } from "framer-motion";

import Heading from "./Heading";
import { Link } from "react-router-dom";
const WhyChooseUs = () => {
  return (
    <section className="mt-5 py-4 w-full h-full">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <div className=" w-full md:w-[30%]">
              <img
                src="/medical_team.webp"
                alt="medical team image"
                className="w-full h-full"
              />
            </div>
            <div className="w-full md:w-[70%]">
              <Heading text={" Why choose us"} />
              <h3 className="capitalize text-lg underline">
                Empowering healthcare excellence
              </h3>
              <p className="text-gray-600">
                Empowering pharmacy excellence through a dynamic platform
                connecting pharmacists with impactful opportunities.
                We champion innovation, compassion, and quality care by bridging
                talent with purpose. Join us in building a healthier
                future—where every healthcare career begins with vision,
                support, and a commitment to life-changing service.
              </p>
              <div className="mt-4">
                <Link onClick={() => scrollTo(0, 0)} to={"/why-us"}>
                  <button className=" flex justify-center gap-2 text-white bg-green-700 hover:bg-green-400 px-4 py-2 text-sm rounded-md ">
                    Discover More{" "}
                    <IoArrowForwardSharp size={20} color="white" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
