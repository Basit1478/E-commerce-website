'use client'
import { useState } from "react";
import React from 'react';
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <header className="max-w-[1440px] mx-auto md:h-[66px] md:px-10 px-5 sticky top-0 md:static backdrop-blur-sm z-20">
  <div className="md:border-b-[1px] border-[#0000004f] w-full mx-auto flex h-[66px] justify-between items-center md:pb-2">
    <div className="absolute hidden md:block  top-16 md:top-0 md:left-20  md:bg-white rounded-md p-2 transition-all duration-300 ease-in-out transform -translate-y-12 opacity-0">
      <input
        type="search"
        placeholder="Search..."
        className="w-full z-50 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        defaultValue=""
      />
    </div>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      className="text-xl cursor-pointer hidden md:block"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
    </svg>
    <h1 className="text-[#22202E] text-2xl font-semibold clashDisplay md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
      <a href="/">Avion</a>
    </h1>
    <div className="flex text-xl gap-[10px] items-center">
      <div className="hidden md:block">
        <button className="flex items-center  px-3 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 mx-2">
        Sign In</button>
      </div>
      <a
        className="justify-center items-center hidden md:flex cursor-pointer"
        href="/carts"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="flex justify-center items-center w-[20px] h-[20px] bg-red-500 mb-5 text-center rounded-full text-white font-semibold">
          <span className="flex justify-center items-center text-[10px]">
          1
          </span>
        </span>
      </a>
      <div className="hidden md:block">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="hidden md:block cursor-pointer "
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <a
        className="flex justify-center items-center md:hidden cursor-pointer"
        href="/carts"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
        <span className="flex justify-center items-center w-[20px] h-[20px] bg-red-500 mb-5 text-center rounded-full text-white font-semibold">
          <span className="flex justify-center items-center text-[10px]">
            1
          </span>
        </span>
      </a>
      <div className="md:hidden">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="block cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
            fill="currentColor"
          />
        </svg>
      </div>
 
 {/* Mobile Menu */}
       {/* Menu Button */}
       <button
        onClick={toggleMenu}
        className="md:hidden z-10 h-6 w-6 flex justify-center items-center"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="menu-dialog"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth={0}
          viewBox="0 0 15 15"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          />
        </svg>
      </button>

      {/* Menu Drawer */}
      {isOpen && (
        <div
          role="dialog"
          id="menu-dialog"
          aria-labelledby="menu-title"
          aria-describedby="menu-description"
          data-state={isOpen ? "open" : "closed"}
          className="fixed z-50 inset-y-0 right-0 bg-white w-3/4 max-w-sm shadow-lg transition-transform ease-in-out duration-500 transform translate-x-0 border-l h-full"
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x h-6 w-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Menu Content */}
          <div className="p-6 bg-white">
            <h2
              id="menu-title"
              className="text-2xl text-[#22202E] font-semibold text-center mb-4"
            >
              <Link href="/">Avion</Link>
            </h2>

            <nav className="flex flex-col space-y-4 text-center font-light ">
            <a
        className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
        href="/"
      >
        Home
      </a>
      <a
        className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
        href="/products"
      >
        All Products
      </a>
      <a
        className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
        href="/about-us"
      >
        About Us
      </a>
      <a
      className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
      href="#ceramics"
    >
      Ceramics
    </a>
    <a
      className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
      href="#tables"
    >
      Tables
    </a>
    <a
      className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
      href="#chairs"
    >
      Chairs
    </a>
    <a
      className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
      href="#tableware"
    >
      Tableware
    </a>
    <a
      className="hover:text-[#5a526c] border-b-1 border-transparent hover:border-[#5a526c] pb-1"
      href="#cutlery"
    >
      Cutlery
    </a>
            </nav>

            <div className="mt-6">
              <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
        </div>

  </div>
</header>
<nav className="sticky top-0 z-50 mb-8 w-full mt-2 bg-white h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] hidden md:flex justify-center items-center ">
    {/* Menu for Desktop */}
    <div className="hidden md:flex space-x-8 text-gray-600">
    <a
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        href="/"
      >
        Home
      </a>
      <a
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        href="/products"
      >
        All Products
      </a>
      <a
        className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
        href="/about-us"
      >
        About Us
      </a>
      <a
      className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      href="#ceramics"
    >
      Ceramics
    </a>
    <a
      className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      href="#tables"
    >
      Tables
    </a>
    <a
      className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      href="#chairs"
    >
      Chairs
    </a>
    <a
      className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      href="#tableware"
    >
      Tableware
    </a>
    <a
      className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1"
      href="#cutlery"
    >
      Cutlery
    </a>
       </div>
  </nav>
 </div>

  );
};

export default Navbar;
