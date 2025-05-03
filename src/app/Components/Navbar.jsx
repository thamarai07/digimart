"use client";

import Link from "next/link";
import React from "react";
import useScrollingFinder from "../../Hooks/FindScrolling";
export default function Navbar() {
  const [scrollingDirection] = useScrollingFinder();

  return (
    <nav className="relative">
      <div className="">
        <ul
          className={`flex justify-center lg:gap-32 gap-6 fixed left-0 right-0 z-[100000] transition delay-100 duration-500 ${
            scrollingDirection == "down" ? "-translate-y-20" : " translate-y-10"
          }  lg:w-[70%] w-[90%] m-auto bg-[#09122C] p-4 text-[#FBFBFB] rounded-full shadow-2xl shadow-fuchsia-300`}
        >
          <li className="text-[20px]">
            <Link className="" href={"#"}>
              Home
            </Link>
          </li>
          <li className="text-[20px]">
            <Link className="" href={"#business"}>
              Business
            </Link>
          </li>
          <li className="text-[20px]">
            <Link className="" href={"#"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
