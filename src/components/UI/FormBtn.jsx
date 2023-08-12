import React from "react";

const FormBtn = (props) => {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} py-2 px-8 btn-product w-full`}
    >
      {props.children}
    </button>
  );
};

export default FormBtn;
