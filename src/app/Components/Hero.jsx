import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="lg:pt-60 pt-40 lg:pb-60 pb-30 relative">
      <h2 className="text-center lg:text-[70px] text-[32px] tracking-tighter font-semibold lg:leading-20 text-[#09122c]">
        Wellcome to the solution for your Business{" "}
        <span className="hero_tran">problem</span>
      </h2>
    </div>
  );
}
