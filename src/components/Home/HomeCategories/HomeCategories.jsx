"use client";

import React, { useRef, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import FakeCategoryData from "@/components/Data/CategoryData";
import Category from "./Category";

const HomeCategories = () => {
  const scrollRef = useRef(null);
  let rightScroll = 0;

  const handleRightScroll = () => {
    if (rightScroll < 400) rightScroll += 100;

    scrollRef.current.scrollTo({
      left: rightScroll,
      behavior: "smooth",
    });
  };

  const handleLeftScroll = () => {
    if (rightScroll > 0) rightScroll -= 100;

    scrollRef.current.scrollTo({
      left: rightScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="scrollbar-none max-w-7xl mx-auto flex items-center bg-white px-4 py-2 rounded-md my-3 space-x-4 shadow-md">
      <div onClick={handleLeftScroll}>
        <BsFillArrowLeftSquareFill className="text-slate-700 text-2xl hover:text-slate-500 transition-all duration-300 cursor-pointer w-8" />
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-scroll flex space-x-4 scrollbar-none"
      >
        {FakeCategoryData.map((item, index) => {
          return <Category key={index} {...item} />;
        })}
      </div>

      <div onClick={handleRightScroll}>
        <BsFillArrowRightSquareFill className="text-slate-700 text-2xl hover:text-slate-500 transition-all duration-300 cursor-pointer w-8" />
      </div>
    </div>
  );
};

export default HomeCategories;
