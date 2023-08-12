import Image from "next/image";
import React from "react";
import ProductIcons from "./ProductIcons";

const Product = (props) => {
  const { img, name, discPercentage, description, rate, price, priceDiscount } =
    props;

  return (
    <div className="py-2 px-4 mr-6 rounded-md border-2 w-72 text-gray-800 shrink-0">
      <div className="relative w-full mb-4">
        <Image
          className="mx-auto"
          src={img}
          alt={name}
          width={170}
          height={170}
        />
        <span className="text-xs absolute top-2 left-2 w-12 p-1 text-center rounded-xl bg-orange-400 text-white">
          {discPercentage}
        </span>
      </div>

      <div className="flex flex-col space-y-2 w-full mb-6">
        <p className="flex items-center text-sm font-semibold">
          {name}
          <span className="font-normal ml-6">{description}</span>
        </p>
        <p className="flex items-center font-semibold">
          {price}
          <span className="ml-2 line-through text-gray-600 font-light">
            {priceDiscount}
          </span>
        </p>
        <p className="flex items-center">
          <Image
            src={"/products/stars.svg"}
            alt={rate}
            width={105}
            height={20}
          />
          <span className="text-xs text-gray-600 font-light ml-1">{rate}</span>
        </p>
      </div>

      <ProductIcons />
    </div>
  );
};

export default Product;
