import React from "react";

const FormInput = (props) => {
  return (
    <input
      className={`${props.className} input-login`}
      type={props.type || "text"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

export default FormInput;
