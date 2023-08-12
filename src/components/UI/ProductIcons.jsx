import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { BsFillChatDotsFill, BsFillTelephoneFill } from "react-icons/bs";

const ProductIcons = () => {
  return (
    <div className="flex items-center flex-wrap space-x-2 w-full space-y-2">
      <button className="btn-product mr-auto" type="button">
        Add to cart
      </button>
      <button className="btn-product" type="button">
        <AiTwotoneHeart />
      </button>
      <button className="btn-product" type="button">
        <BsFillChatDotsFill />
      </button>
      <button className="btn-product" type="button">
        <BsFillTelephoneFill />
      </button>
    </div>
  );
};

export default ProductIcons;
