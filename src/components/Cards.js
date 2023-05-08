/** @format */

import React, { Component } from "react";
import single from "./assets/single.png";
import double from "./assets/double.png";
import triple from "./assets/triple.png";
export class Cards extends Component {
  render() {
    return (
      <>
        <div className=" w-full py-[10rem] bg-white ">
          <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 px-6 ">
            <div className="SingleUser w-full flex flex-col items-center shadow-2xl my-4 p-4 rounded-lg hover:scale-105 duration-300 ">
              <img src={single} alt="/" className=" single w-20 mx-auto mt-[-3rem] " />
              <h3 className="font-bold text-2xl mx-auto py-8">Single User</h3>
              <h3 className="font-bold text-4xl mx-auto py-8">$149</h3>

              <p className="py-2 border-y mx-8 mt-8">500GB Storage</p>
              <p className="py-2 border-b mx-8 mt">1 User Allowed </p>
              <p className="py-2 border-b mx-8">Send up to 2GB</p>
              <button className=" font-medium bg-[#00df9a] rounded-md py-4 mx-auto  w-[200px] mt-8">
                Start Trial
              </button>
            </div>
            <div className="Partnership w-full flex flex-col items-center shadow-2xl my-4 p-4 rounded-lg hover:scale-105 duration-300 md:my-0 my-8 bg-gray-100 ">
              <img src={double} alt="/" className=" single w-20 mx-auto mt-[-3rem] " />
              <h3 className="font-bold text-2xl mx-auto py-8">Partnership</h3>
              <h3 className="font-bold text-4xl mx-auto py-8">$199</h3>

              <p className="py-2 border-y mx-8 mt-8">1TBGB Storage</p>
              <p className="py-2 border-b mx-8 mt">3 User Allowed </p>
              <p className="py-2 border-b mx-8">Send up to 10GB</p>
              <button className=" font-medium text-[#00df9a] rounded-md py-4 mx-auto  w-[200px] mt-8 bg-black">
                Start Trial
              </button>
            </div>
            <div className="GroupAccount w-full flex flex-col items-center shadow-2xl my-4 p-4 rounded-lg hover:scale-105 duration-300 ">
              <img src={triple} alt="/" className=" single w-20 mx-auto mt-[-3rem] " />
              <h3 className="font-bold text-2xl mx-auto py-8">Group Account</h3>
              <h3 className="font-bold text-4xl mx-auto py-8">$299</h3>

              <p className="py-2 border-y mx-8 mt-8">5TB Storage</p>
              <p className="py-2 border-b mx-8 mt">10 User Allowed </p>
              <p className="py-2 border-b mx-8">Send up to 20GB</p>
              <button className=" font-medium bg-[#00df9a] rounded-md py-4 mx-auto  w-[200px] mt-8">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Cards;
