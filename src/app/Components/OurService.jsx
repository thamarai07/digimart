"use client";

import Image from "next/image";
import React from "react";
import FadingComponent from "./Fading";

export default function OurService() {
  return (
    <>
      <section className="pt-2 max-w-[996px] m-auto">
        <h2 className="lg:text-[52px] text-[32px] lg:p-4 p-2 text-center font-semibold lg:w-[60%] w-[90%] m-auto border-2 border-blue-950  rounded-4xl shadow-2xl shadow-blue-600 ">
          Our services
        </h2>
        <div className="container lg:mt-30 mt-22 flex gap-16 flex-wrap flex-col justify-center lg:p-0 p-4">
          <FadingComponent>
            <div className="flex lg:flex-row flex-col gap-10 justify-center items-center bg-white lg:p-2 rounded-4xl shadow-2xl shadow-gray-300 p-4">
              <img className="rounded-4xl" src={"/services/five.png"} />
              <div>
                <h3 className="lg:text-[28px] text-[24px] font-semibold lg:mb-4 mb-2 ">
                  Website Development
                </h3>
                <h4 className="lg:mb-4 mb-2 text-[20px]"> Build. Launch. Grow.</h4>
                <p className="leading-8 ">
                  {" "}
                  We don’t just build websites — we create digital experiences
                  that connect, engage, and convert. Whether you’re a startup or
                  a growing business.
                </p>
              </div>
            </div>
          </FadingComponent>
          <FadingComponent>
            <div className="flex lg:flex-row-reverse flex-col gap-10 justify-center items-center bg-white p-2 rounded-4xl shadow-2xl shadow-gray-300 p-4">
              <img src={"/services/two.png"} className="rounded-4xl" />
              <div>
                <h3 className="lg:text-[28px] text-[24px] font-semibold lg:mb-4 mb-2">
                  Social Media Development
                </h3>

                <h4 className="lg:mb-4 mb-2 text-[20px]">
                  Social Media. Smart. Simple. Effective.
                </h4>
                <p className="leading-8">
                  We craft social media strategies that spark engagement and
                  drive results. From content creation to campaign execution.
                </p>
              </div>
            </div>
          </FadingComponent>
          <FadingComponent>
            <div className="flex lg:flex-row flex-col gap-10 justify-center items-center bg-white lg:p-2 rounded-4xl shadow-2xl shadow-gray-300 p-4">
              <img src={"/services/one.png"} className="rounded-4xl" />
              <div>
                <h3 className="lg:text-[28px] text-[24px] font-semibold lg:mb-4 mb-2">
                  App Development
                </h3>

                <h4 className="lg:mb-4 mb-2 text-[20px]">
                  We Build Apps That People Love
                </h4>
                <p className="leading-8">
                  From idea to app store, we create mobile experiences that are
                  fast, user-friendly, and built to perform. Whether it’s
                  Android, iOS, or cross-platform.
                </p>
              </div>
            </div>
          </FadingComponent>

          <FadingComponent>
            <div className="flex lg:flex-row-reverse flex-col gap-10 justify-center items-center bg-white lg:p-2 rounded-4xl shadow-2xl shadow-gray-300 p-4">
              <img src={"/services/three.png"} className="rounded-4xl" />
              <div>
                <h3 className="lg:text-[28px] text-[24px] font-semibold lg:mb-4 mb-2">Editing</h3>

                <h4 className="lg:mb-4 mb-2 text-[20px]">
                  Perfect Editing, Every Time
                </h4>
                <p className="leading-8">
                  We turn raw content into polished perfection. Whether it’s
                  video, photo, or written content, our editing ensures clarity,
                  impact, and style.
                </p>
              </div>
            </div>
          </FadingComponent>
          <FadingComponent>
            <div className="flex lg:flex-row flex-col gap-10 justify-center items-center bg-white p-2 rounded-4xl shadow-2xl shadow-gray-300">
              <img src={"/services/four.png"} className="rounded-4xl" />
              <div>
                <h3 className="lg:text-[28px] text-[24px] font-semibold lg:mb-4 mb-2">
                  Social Media Adds
                </h3>

                <h4 className="lg:mb-4 mb-2 text-[20px]">
                  Maximize Your Reach with Google & Meta Ads
                </h4>
                <p className="leading-8">
                  We create high-converting ad campaigns that put your brand in
                  front of the right people at the right time.
                </p>
              </div>
            </div>
          </FadingComponent>
        </div>
      </section>
    </>
  );
}
