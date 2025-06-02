import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="lg:pt-48 pt-40 lg:pb-60 pb-30 relative max-w-[992px] m-auto">
      <h2 className="text-center lg:text-[70px] text-[32px] tracking-tighter font-semibold lg:leading-20 text-[#09122c]">
        Wellcome to the solution for your Business{" "}
        <span className="hero_tran">problem</span>
      </h2>
      <h3 className="mt-6 w-[778px] text-center m-auto font-semibold text-gray-400 font-sans text-[22px]">
        At \[Your Company Name], we deliver cutting-edge technology solutions
        that drive success, security, and growth for businesses of all sizes
      </h3>
      <button className="text-[20px] m-auto block mt-10 bg-green-500 text-white px-4 py-2 rounded-2xl font-semibold shadow-2xl cursor-pointer transform delay-75 duration-100 hover:-translate-y-2 hover:bg-blue-500">Get Started Today</button>
    </div>
  );
}
