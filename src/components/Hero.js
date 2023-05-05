/** @format */

import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <>
      <main className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2"> GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-white font-bold text-4xl  xl sm:text-6xl md:text-7xl md:py-6">
          Grow with data.
        </h1>
        <div className="typed text-white text-5xl">
          <span className="md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible financing for{" "}
          </span>{" "}
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <article>
          <p className="text-gray-600 font-bold text-xl md:text-2xl py-4">
            Monitor your data analytics to increase revenue for BTB, BTC and SASS platform
          </p>
        </article>
        <button className="font-medium bg-[#00df9a] rounded-md py-4 mx-auto  w-[200px]">
          Get Started
        </button>
      </main>
    </>
  );
};

export default Hero;
