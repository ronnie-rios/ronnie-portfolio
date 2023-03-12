import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import pic from "../assets/images/portfolio-picture.jpeg";

function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"
    >
      <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-white">
          About Me:
        </h1>
        <p className="mb-8 leading-relaxed">
          I'm Ronnie and I'm a developer based in Austin, TX. I'm always
          striving to learn and grow. I worked as a teacher for 5 years and as a
          software engineer for two years with professional experience at
          Capital One. I'm currently working on freelance projects for multiple
          clients. I love soccer, Chelsea FC / Austin FC, playing drums, as well
          as gaming. I have slowly descending into the mechanical keyboard
          rabbit hole.
        </p>
        <Link to="/">
          <button className="ml-4 justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Go back
          </button>
        </Link>
      </div>
      <img
        src={pic}
        alt="ronnie"
        className="object-scale-down w-40 shadow-lg rounded max-w-sm"
      />
    </motion.div>
  );
}

export default Bio;
