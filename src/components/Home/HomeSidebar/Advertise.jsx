import Image from "next/image";
import React from "react";

const Advertise = () => {
  return (
    <div className="col-span-1 grid order-3 sm:order-2 lg:order-4 sm:col-span-2 lg:col-span-1">
      <Image
        className="self-stretch mx-auto w-full md:w-auto"
        src={"/advertise.png"}
        alt="Advertise"
        width={400}
        height={900}
      />
    </div>
  );
};

export default Advertise;
