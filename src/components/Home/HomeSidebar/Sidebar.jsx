import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-span-1 bg-white shadow-md rounded-md order-1 sm:col-span-2 lg:col-span-1">
      <ul className="">
        <li>
          <Link className="sidebar-links" href={"/market"}>
            Market
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/clothes"}>
            Clothes
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/beauty"}>
            Beauty
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/kids"}>
            Kids
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/phones"}>
            Phones
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/accessories"}>
            Phone accessories
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/home"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/electronic"}>
            Electronic
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/computer"}>
            Computer
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/sports"}>
            Sports
          </Link>
        </li>
        <li>
          <Link className="sidebar-links" href={"/toys"}>
            Toys
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
