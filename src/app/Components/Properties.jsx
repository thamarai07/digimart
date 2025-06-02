import React from "react";
import { properties_content } from "../../utils/home";
import Image from "next/image";
import Model from "../Components/Model";

export default function Properties() {
  return (
    <div className="flex justify-center  max-w-[992px] m-auto gap-8 mb-20">
      {properties_content.map((item, index) => (
        <div
          key={index}
          className="w-[33.333333%]  shadow-[1px_1px_1px_1px_rgba(71,_85,_105,_0.08)] rounded-2xl "
          
        >
          <div className="flex flex-col">
            <Image
              src={item.img}
              width={200}
              height={200}
              className=" w-[100%] rounded-t-2xl"
            />
            <div className="p-4">
              <h3 className="pt-2 pb-2 font-semibold">{item.name}</h3>
              <p className="text-[14px] leading-5">{item.content}</p>
              <button>Know More</button>
            </div>
            {}
            {/* <Model
              title={item.name}
              content={item.content}
              image={item.img}
              id={index}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
}
