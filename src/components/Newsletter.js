/** @format */

import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full text-white py-16">
      <div className="max-w[1240px  grid lg:grid-cols-3 lg:mx-16 mx-5 ">
        <div className="py-5 lg:col-span-2">
          <h1 className="font-bold text-2xl sm:2xl md:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>

        <div className="my-2 ">
          <form action="" className=" flex flex-col lg:flex-row items-center">
            <input
              type="email"
              className="p-3 text-black rounded-md flex w-full "
              placeholder="Enter email"
            />
            <button className="font-medium lg:self-start bg-[#00df9a] rounded-md py-3 mx-auto  w-[200px] text-black  my-6 lg:mx-3">
              Notify Me
            </button>
          </form>
          <div className="Policy lg:self-start">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-[#00df9a] underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
