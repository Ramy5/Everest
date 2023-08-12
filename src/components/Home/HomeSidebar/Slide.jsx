import Image from "next/image";
import React from "react";

const Slide = () => {
  return (
    <div className="col-span-3 relative self-stretch order-2 sm:order-3 lg:order-2 sm:col-span-4 lg:col-span-3">
      <div className="h-full grid">
        <Image
          className="bg-cover self-stretch"
          src={"/discount.png"}
          alt="Discount"
          width={983}
          height={533}
        />
      </div>

      <h3 className="position-center text-5xl md:text-8xl font-bold text-white">
        Discounts
      </h3>

      <ul className="flex space-x-1 items-center absolute left-1/2 bottom-8 md:bottom-16 -translate-x-1/2">
        <li className="slide-dots bg-orange-500"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
        <li className="slide-dots"></li>
      </ul>
    </div>
  );
};

export default Slide;
