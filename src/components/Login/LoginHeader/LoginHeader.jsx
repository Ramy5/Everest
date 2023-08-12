import Logo from "@/components/UI/Logo";
import Link from "next/link";
import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import LoginForm from "../LoginForm/LoginForm";
import Image from "next/image";

const LoginHeader = () => {
  return (
    <>
      <header className="bg-[#131921] shadow-slate-800 flex items-center justify-between flex-wrap py-4 px-4 sm:px-12 text-white">
        <Link
          href={"/"}
          className="flex items-center space-x-2 font-semibold btn-product"
        >
          <BsFillArrowLeftCircleFill />
          <span>back</span>
        </Link>

        <Logo className="sm:m-auto" />
      </header>

      <div className="m-auto min-h-[90vh] w-11/12 md:w-8/12 flex flex-col items-center justify-center">
        <LoginForm />

        <Image src={"/logo-2.svg"} alt="logo-2" width={255} height={73} />
      </div>
    </>
  );
};

export default LoginHeader;
