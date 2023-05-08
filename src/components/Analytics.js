/** @format */

import React from "react";
import laptop from "./assets/laptop.jpg";

function Analytics() {
  return (
    <div className=" bg-white py-16 px-4 w-full">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto p-4" src={laptop} alt="/" />
        <div className="flex flex-col py-2 px-4 justify-center">
          <p className="font-bold py-2  text-[#00df9a]"> DATA ANALYTICS DASHBOARD </p>
          <h1 className="font-bold py-2 text-2xl sm:text-4xl md:text-3xl items-center ">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis dignissimos
            consectetur placeat velit excepturi nobis veniam nihil delectus provident, repudiandae
            amet beatae, molestias eligendi rerum sapiente vitae accusamus explicabo? nobis veniam
            nihil delectus provident nobis veniam nihil
          </p>
          <button className="font-medium bg-[#000300] rounded-md py-4 mx-auto w-[200px] text-[#00df9a] mt-6 md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
