import React from "react";
import TrustedBy from "./TrustedBy";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" w-full  pb-5 pt-20 ">
      <div className="container">
        {/* wrapper div */}
        <div className=" w-full h-full flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex-1 h-full w-full flex flex-col gap-4">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl uppercase text-center lg:text-start text-green-700 ">
                Young <span className="">pharmacists</span>{" "}
                job application portal{" "}
                <span className="text-yellow-600">(psn-ypg lagos chapter)</span>.
              </h1>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <h3 className="py-4 text-center lg:text-start">
                This platform  connects young pharmacists
                 with employers both in public and private sectors.
              </h3>
            </motion.div>

            <div className="text-center lg:text-start">
              <Link to={"/jobs"}>
                <button className=" bg-green-600 text-white border px-4 py-1 hover:bg-green-500 rounded-md">
                  Get started
                </button>
              </Link>
            </div>
            <div className="text-center lg:text-start">
              <TrustedBy />
            </div>
          </div>
          <div className="flex-1 h-full w-full">
            <img
              src="/health_team3.webp"
              alt="hero_image"
              className="w-full h-full"
            />
          </div>
        </div>
        {/* card */}

        <div className="flex flex-col md:flex-row  justify-between gap-4 mt-5 pt-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }} className="flex-1"
          >
            <CategoryCard
              className1={
                "h-full w-full px-5 border  bg-yellow-50 rounded-lg p-5"
              }
              paragraph={
                "We are  trusted and dedicated  in uniting healthcare providers with young pharmacists."
              }
              path={"/jobs"}
              className2={"relative w-10 text-yellow-600 "}
              title={"Enhancing job search"}
              text={" Get started"}
            />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex-1"
          >
            <CategoryCard
              className1={
                "h-full w-full px-5 border  bg-green-50 rounded-lg p-5"
              }
              className2={"relative w-10 text-green-600 "}
              paragraph={
                " Choose us as your trusted partner and experience a transformative approach in connecting pharmacists with top-tier professionals."
              }
              path={"/jobs"}
              title={"Transformative Approach"}
              text={"Get started"}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
