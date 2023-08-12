import React from "react";
import Sidebar from "./Sidebar";
import Slide from "./Slide";
import Advertise from "./Advertise";

const HomeSidebarAndSlide = () => {
  return (
    <article className="max-w-7xl xl m-auto mt-6 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-y-3 sm:gap-2">
      <Sidebar />

      <Slide />

      <Advertise />
    </article>
  );
};

export default HomeSidebarAndSlide;
