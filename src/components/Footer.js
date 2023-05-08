/** @format */

import React, { Component } from "react";

import {
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w=[1240px] mx-auto py-15 px-8 grid lg:grid-cols-3 gap-8 text-gray-300 m-14 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] ">REACT.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde similique aliquid harum
          libero deserunt ipsam praesentium tenetur voluptas iure, mollitia quas sint animi facilis
          quasi, nemo aut consequatur porro accusamus!
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>

      <section className="flex justify-between lg:col-span-2 ">
        <div>
          <h6 className=" text-[#00df9a] font-bold ">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#00df9a]">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-[#00df9a]">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-[#00df9a]">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
