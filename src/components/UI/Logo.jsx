import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = (props) => {
  return (
    <Link className={`${props.className} w-48 h-10`} href={"/"}>
      <Image
        className="w-48 h-10"
        src={"/logo.svg"}
        alt="Logo"
        width={300}
        height={60}
      />
    </Link>
  );
};

export default Logo;
