"use client";

import Link from "next/link";
import React from "react";
import useScrollingFinder from "../../Hooks/FindScrolling";
export default function Navbar() {
  const [scrollingDirection] = useScrollingFinder();

  return (
    <nav className="relative">
      <div className="lg:block sm:hidden">
        <ul
          className={`flex justify-center  gap-32 fixed left-0 right-0 z-[100000] transition delay-100 duration-500 ${
            scrollingDirection == "down" ? "-translate-y-20" : " translate-y-10"
          }  w-[70%] m-auto bg-[#09122C] p-4 text-[#FBFBFB] rounded-full shadow-2xl shadow-fuchsia-300`}
        >
          <li className="text-[20px]">
            <Link className="" href={"#"}>
              Home
            </Link>
          </li>
          <li className="text-[20px]">
            <Link className="" href={"#"}>
              For Business
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
