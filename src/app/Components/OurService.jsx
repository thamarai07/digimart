import Image from "next/image";
import React from "react";

export default function OurService() {
  return (
    <>
      <div className="pt-2">
        <h2 className="text-[52px] p-4 text-center font-semibold w-[60%] m-auto border-2 border-blue-950  rounded-4xl shadow-2xl shadow-blue-600 ">
          Our services
        </h2>
        <div className="container mt-30 flex gap-16 flex-wrap justify-center">
          <div className="bg-[#0bff38] p-4 w-[33.333%]  border-4 border-[#09122C] rounded-3xl our_service_1">
            <h3 className="text-[32px] font-semibold">Website Development</h3>
            <p className="font-light text-[24px] my-4">Build. Launch. Grow.</p>
            <p>
              We don’t just build websites — we create digital experiences that
              connect, engage, and convert. Whether you’re a startup or a
              growing business.
            </p>
          </div>
          <div className="bg-[#0bbeff] p-4 w-[33.333%] border-4 border-[#09122C] rounded-3xl our_service_2">
            <h3 className="text-[32px] font-semibold">Social Media Development</h3>

            <p className="font-light text-[24px] my-4">Social Media. Smart. Simple. Effective.</p>
            <p>
              We craft social media strategies that spark engagement and drive
              results. From content creation to campaign execution.
            </p>
          </div>
          <div className="bg-[#cc8aff] p-4 w-[33.333%] border-4 border-[#09122C] rounded-3xl our_service_3">
            <h3 className="text-[32px] font-semibold text-black">App <br/> Development</h3>
            <p className="font-light text-[24px] my-4 text-black">We Build Apps That People Love</p>
            <p className="text-black">
              From idea to app store, we create mobile experiences that are
              fast, user-friendly, and built to perform. Whether it’s Android,
              iOS, or cross-platform.
            </p>
          </div>
          <div className="bg-[#ffeb0b] p-4 w-[33.333%] border-4 border-[#09122C] rounded-3xl our_service_4">
            <h3 className="text-[32px] font-semibold"> Editing </h3>
            <p className="font-light text-[24px] my-4">Perfect Editing, Every Time</p>
            <p>
              We turn raw content into polished perfection. Whether it’s video,
              photo, or written content, our editing ensures clarity, impact,
              and style.
            </p>
          </div>
          <div className="bg-[#ff0b0b] p-4 w-[33.333%] border-4 border-[#09122C] rounded-3xl">
            <h3 className="text-[32px] font-semibold"> Adds </h3>

            <p className="font-light text-[24px] my-4">Maximize Your Reach with Google & Meta Ads</p>
            <p>
              We create high-converting ad campaigns that put your brand in
              front of the right people at the right time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
