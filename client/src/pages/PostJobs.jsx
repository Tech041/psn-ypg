import React from "react";
import JobForm from "../components/JobForm";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const PostJobs = () => {
  return (
    <section className="w-full min-h-screen pt-20">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <JobForm />
      </motion.div>
    </section>
  );
};

export default PostJobs;
