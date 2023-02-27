"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      route: "/",
    },
    { label: "About", route: "/about" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="flex justify-between items-center h-20  mx-auto px-4 text-white ">
      <Link href={'/'}>
      <h1 className="w-full text-3xl font-bold text-red-600">CineFilm</h1>
      </Link>
    
      <ul className="hidden md:flex">
            {links.map(({label, route})=>{
              return(
                <li  className='p-4' key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              )
            })}
        <SearchBar />
      </ul>
   
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-red-600 m-4">CineFilm</h1>
        {links.map(({label, route})=>{
              return(
                <li  className='p-4' key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              )
            })}
        <SearchBar />
      </ul>
    </header>
  );
};

export default Navbar;
