import Image from "next/image";
import React from "react";

const Category = ({ categoryName, categoryImg }) => {
  return (
    <div className="self-stretch cursor-pointer text-center shrink-0">
      <div className="rounded-lg bg-[#c6ddeb] mb-1">
        <Image
          className=""
          src={categoryImg}
          alt={categoryName}
          width={77}
          height={87}
        />
      </div>

      <p className="text-[10px] text-gray-700 font-semibold">{categoryName}</p>
    </div>
  );
};

export default Category;
