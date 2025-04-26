import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="pt-60 pb-60 relative">
      <h2 className="text-center text-[70px] tracking-tighter font-semibold leading-20 text-[#09122c]">
        Wellcome to the solution for your Business{" "}
        <span className="hero_tran">problem</span>
      </h2>
    </div>
  );
}
