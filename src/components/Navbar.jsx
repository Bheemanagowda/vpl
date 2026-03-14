"use client";

import React, { useState } from "react";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // For mobile submenu toggle

  const navData = [
    { menu: "Home", link: "/" },
    { menu: "About", link: "/about-us" },
    {
      menu: "Teams",
      subMenu: [
        { menu: "Anjanadri Warriors", link: "/teams/anjanadriWarriors" },
        { menu: "Vanajabhavi Rulers", link: "/teams/vanajabhaviRulers" },
        { menu: "Royale Challengers Vanajabhavi", link: "/royale-challengers-vanajabhavi" },
        { menu: "Vanajabhavi Warriors", link: "/teams/vanajabhaviWarriors" },
      ],
    },
{ menu: "Champions Teams", link: "/champions" },
{ menu: "Donors", link: "/donors" },
    { menu: "Gallery", link: "/gallery" },
     { menu: "Contact Us", link: "/contact" },
    
  ];

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <>
      <nav className=" left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
 <div className="text-white text-2xl font-bold">
        <Link href="/">
          <img
            src="/images/vpl-logo.png"
            alt="Vanajabhavi Premier League Logo"
            className="h-12 w-auto sm:h-16 md:h-24 lg:h-32 mx-auto"
          />
        </Link>
      </div>
          </div>

          {/* Hamburger Button - Mobile */}
          <div
            className="md:hidden text-black text-2xl cursor-pointer px-4"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <FaTimes /> : <FaBars />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-black ">
            {navData.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.link || "#"}
                  className="flex items-center text-[20px] gap-1 hover:text-yellow-400 transition cursor-pointer"
                >
                  {item.menu}
                  {item.subMenu && <FaAngleDown className="text-sm mt-1" />}
                </a>

                {/* Desktop Submenu */}
                {item.subMenu && (
                  <ul className="absolute left-0 top-12 bg-white text-black w-56 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.subMenu.map((sub, i) => (
                      <li key={i} className="px-4 py-2 hover:bg-gray-200">
                        <a href={sub.link}>{sub.menu}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobile && (
          <ul className="md:hidden bg-gray-900 text-white flex flex-col gap-2 px-8 py-4">
            {navData.map((item, index) => (
              <li key={index}>
                <div
                  className="flex justify-between items-center py-2 cursor-pointer hover:text-yellow-400"
                  onClick={() => item.subMenu ? toggleSubMenu(index) : setMobile(false)}
                >
                  <a href={item.link || "#"}>{item.menu}</a>
                  {item.subMenu && <FaAngleDown />}
                </div>

                {/* Mobile Submenu */}
                {item.subMenu && openSubMenu === index && (
                  <ul className="bg-gray-800 pl-4 mt-2 flex flex-col gap-2">
                    {item.subMenu.map((sub, i) => (
                      <li key={i} className="py-2 hover:text-yellow-400">
                        <a href={sub.link}>{sub.menu}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Padding to avoid overlap */}
     
    </>
  );
};

export default Navbar;