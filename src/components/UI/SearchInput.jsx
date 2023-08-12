import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = (props) => {
  return (
    <form className={`${props.className} flex items-center`}>
      <BiSearch className="translate-x-7 text-gray-500 text-lg" />
      <input
        className="py-2 px-8 rounded-xl text-gray-700 w-full focus:border-none focus:outline-none"
        type="search"
        name="search"
        placeholder="Search in Everest"
      />
    </form>
  );
};

export default SearchInput;
