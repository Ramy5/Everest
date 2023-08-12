import Image from "next/image";
import React from "react";

const Offer = ({ offerIcon, offerType, offerColor }) => {
  const color = `bg-[#${offerColor}]`;

  return (
    <div
      className={`${color} shrink-0 p-2 text-white rounded-md cursor-pointer flex justify-center gap-1 items-center flex-col text-center w-32`}
    >
      <Image
        className="mb-1"
        src={offerIcon}
        alt={offerType}
        width={50}
        height={25}
      />
      <p className="text-[10px] font-semibold">{offerType}</p>
    </div>
  );
};

export default Offer;
