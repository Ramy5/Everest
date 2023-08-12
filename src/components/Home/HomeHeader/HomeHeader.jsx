"use client";

import Link from "next/link";
import React from "react";
import { MdLocationPin } from "react-icons/md";
import SearchInput from "@/components/UI/SearchInput";
import Logo from "@/components/UI/Logo";

const HomeHeader = () => {
  return (
    <header className="bg-[#131921] shadow-slate-800 flex gap-4 items-center justify-center sm:justify-between flex-wrap py-4 px-12 text-white flex-col md:flex-row">
      <div className="flex items-center md:space-x-6 flex-col md:flex-row">
        <Logo />

        <Link
          className="flex flex-wrap w-30 items-center space-x-2 p-2"
          href={"/"}
        >
          <span>Delivery to Egypt</span>
          <MdLocationPin className="text-2xl" />
        </Link>
      </div>

      <SearchInput className="flex-1 md:mr-6 w-full sm:w-4/6 md:w-auto" />

      <button className="btn-product px-4 font-semibold">
        <Link href={"/login"}>Log in</Link>
      </button>
    </header>
  );
};

export default HomeHeader;
