"use client";

import Product from "@/components/UI/Product";
import React, { useRef } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const HomeProducts = ({ data, sectionTitle }) => {
  const scrollRef = useRef(null);
  let rightScroll = 0;

  const handleRightScroll = () => {
    if (rightScroll < 1500) rightScroll += 300;
    console.log(rightScroll);

    scrollRef.current.scrollTo({
      left: rightScroll,
      behavior: "smooth",
    });
  };

  const handleLeftScroll = () => {
    if (rightScroll > 0) rightScroll -= 300;
    console.log(rightScroll);

    scrollRef.current.scrollTo({
      left: rightScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="shadow-md rounded-md bg-white mx-auto max-w-7xl py-4 px-3 sm:px-6 mb-4">
      <h3 className="text-slate-800 text-lg mb-4 font-bold">{sectionTitle}</h3>

      <div className="flex items-center justify-center space-x-2 md:space-x-0">
        <div onClick={handleLeftScroll}>
          <BsFillArrowLeftSquareFill className="shrink-0 text-gray-500 text-xl md:text-3xl hover:text-gray-600 transition-all duration-300 cursor-pointer w-5 md:w-12" />
        </div>

        <div
          ref={scrollRef}
          className="flex shrink-0 overflow-x-scroll scrollbar-none w-[82%] sm:w-[90%]"
        >
          {data.map((product, index) => {
            return <Product key={index} {...product} />;
          })}
        </div>

        <div onClick={handleRightScroll}>
          <BsFillArrowRightSquareFill className="shrink-0 text-gray-500 text-xl md:text-3xl hover:text-gray-600 transition-all duration-300 cursor-pointer w-5 md:w-12" />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
