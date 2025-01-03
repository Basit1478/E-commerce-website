
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { LuSprout } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Sign from "@/components/Sign";
const Page = () => {
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
          <button className="flex items-center px-3 py-2 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 mx-2">
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
          <div className="md:hidden z-10 h-6 w-6">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rq5kq:"
              data-state="closed"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={0}
                viewBox="0 0 15 15"
                className="h-full w-full"
                height="1em"
                width="1em"
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
          </div>
        </div>
      </div>
    </header>
    <nav className="sticky top-0 z-50 mb-8 w-full mt-2 bg-white  h-[66px] xl:gap-x-11 md:gap-x-8 text-[#726E8D] text-[16px] satoshi hidden md:flex justify-center items-center">
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
    </nav>
    <div className="max-w-[1280px] mx-auto">
    <main>
      <img
        alt="frame"
        loading="lazy"
        width={1480}
        height={209}
        decoding="async"
        data-nimg={1}
        className="hidden md:block"
        srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=%2Fproducts%2Fframe.png&w=3840&q=75"
      
        style={{ color: "transparent" }}
      />
     
      <div className="max-w-[1280px] mx-auto flex md:flex-row justify-between items-center bg-white p-4 border-b">
        <ul className="text-[16px]  flex-wrap md:flex-nowrap w-full md:w-[557px] h-12 justify-around items-center gap-4 hidden md:flex cursor-pointer">
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="flex items-center gap-2 text-sm font-medium">
              <span>Category</span>
              <div className="relative">
                <select
                  name="category"
                  id="category"
                  className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                >
                  <option value="/Products">All Products</option>
                  <option value="/tableware">Tableware</option>
                  <option value="/decoration-items">Decoration Items</option>
                  <option value="/tables">Tables</option>
                  <option value="/chairs">Chairs</option>
                  <option value="/cutlery">Cutlery</option>
                </select>
                <svg
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </span>
          </li>
          <li className="flex items-center gap-1 cursor-pointer">
            <span className="flex items-center gap-1">
              Price{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
          <li className="items-center gap-1 cursor-pointer hidden md:flex">
            <span className="items-center gap-1 hidden lg:flex">
              Brand{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
        </ul>
        <span className="flex items-center gap-2 text-sm font-medium md:hidden">
          <span>Category</span>
          <div className="relative">
            <select
              name="category"
              id="category"
              className="pl-3 pr-8 py-2 border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
            >
              <option value="allProducts">All Products</option>
              <option value="tableware">Tableware</option>
              <option value="decoration-items">Decoration Items</option>
              <option value="tables">Tables</option>
              <option value="chairs">Chairs</option>
              <option value="cutlery">Cutlery</option>
            </select>
            <svg
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </span>
        <ul className="w-full md:w-[237px] text-[16px] h-12 justify-between md:justify-around items-center mt-4 md:mt-0 hidden md:flex">
          <li className="flex items-center">Sorting by:</li>
          <li className="w-[154px] flex items-center justify-center gap-1 cursor-pointer">
            <span className="flex items-center gap-1">
              Date added{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    </main>
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl self-start font-semibold my-5">All Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Modern Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F59c7a1cb9914a115f08d7b48d2d13188ac2b29c3-600x600.webp&w=640&q=75"
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Modern Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £95
              </p>
            </div>
          </div>
  
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Exquisite  Gold"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F1be45170b701e1231d91fcb0f7394f8f91d76a90-850x850.webp&w=640&q=75"
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Exquisite Gold
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £120
              </p>
            </div>
          </div>
      
       
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Elegant Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fee6ed7ebbc85d018ff5cef0c9d34e18ca8002218-2480x2480.webp&w=640&q=75"
             
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Elegant Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £70
              </p>
            </div>
          </div>
       
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Minimalist Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F0cef95aa401cfda174bbf56b2b447de7fdaf8a43-720x720.jpg&w=640&q=75"
              
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Minimalist Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £112
              </p>
            </div>
          </div>
       
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Luxury Porcelain"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Ff316f4feb5c35ab366447a49ebf1260677774636-640x640.jpg&w=640&q=75"

              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Luxury Porcelain
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £100
              </p>
            </div>
          </div>
        
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Rustic Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F53355ef4df040f68aa9cbce72909ea39907d4fe5-350x350.jpg&w=640&q=75"
    
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Rustic Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £120
              </p>
            </div>
          </div>
        
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Antique Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fde2d1d22155195af1c93f95ffb418870910b3580-800x800.webp&w=640&q=75"

              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Antique Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £105
              </p>
            </div>
          </div>
        
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Luxury Gold"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F1be45170b701e1231d91fcb0f7394f8f91d76a90-850x850.webp&w=640&q=75"
           
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Luxury Gold
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £120
              </p>
            </div>
          </div>
        
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Classic Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Ff3ab5c5888f5ed8876208ae85118d8b06efdce07-600x600.webp&w=384&q=75"

              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Classic Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £84
              </p>
            </div>
          </div>
       
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Ceramic Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F86cbc4f67399633a9f2da61b4973bdbcfb25ed73-720x720.jpg&w=384&q=75"
             
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Ceramic Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £110
              </p>
            </div>
          </div>
        
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Exquisite Tableware"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F57945a7fa07e1251effabb868308e3794fb11381-800x800.jpg&w=384&q=75"
              
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Exquisite Tableware
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £130
              </p>
            </div>
          </div>
       
          <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="Fine Bone China"
              loading="lazy"
              width={305}
              height={375}
              decoding="async"
              data-nimg={1}
              className="md:w-auto md:h-[375px] h-auto object-cover"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F00c3a4f54aa8c5e3dc06751d11593f3bd1e55340-800x800.jpg&w=384&q=75"
             
              style={{ color: "transparent" }}
            />
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                Fine Bone China
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £105
              </p>
            </div>
          </div>
       
      </div>
      
        <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mt-4">
          View Collections
        </button>
     
    </div>
  </div>
  <footer className="max-w-[1440px] md:h-[380px] mx-auto bg-[#2A254B] text-white md:pt-10 pt-8 gap-5">
    <div className="flex flex-col md:flex-row md:justify-center max-w-[1280px] mx-auto px-5">
      <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6  md:pl-0  md:mb-0 mb-5">
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 satoshi text-[14px]">
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#crockery"
              >
                Crockery
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#furniture"
              >
                Furniture
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#homeware"
              >
                Homeware
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#plant-pots"
              >
                Plant pots
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#chairs"
              >
                Chairs
              </a>
            </li>
            <li>
                <a
                  className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                  href="/listing"
                >
                 Product Listing
                </a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 satoshi text-[14px]">
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#new-arrivals"
              >
                New arrivals
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#best-sellers"
              >
                Best sellers
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#recently-viewed"
              >
                Recently viewed
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#popular-this-week"
              >
                Popular this week
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="/products"
              >
                All products
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Our company</h3>
          <ul className="space-y-2 satoshi text-[14px]">
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="/about-us"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="#vacancies"
              >
                Vacancies
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="#contact-us"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-[2px]"
                href="#privacy"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                className="border-b border-transparent hover:border-gray-300 hover:text-gray-300 pb-1"
                href="#returns-policy"
              >
                Returns policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-1/2">
        <h3 className="font-semibold mb-3">Join our mailing list</h3>
        <div className="flex items-center  h-[56px] w-full">
          <input
            type="email"
            placeholder="your@email.com"
            className="md:w-[509px] h-[56px] outline-none bg-[#FFFFFF26] pb-1 w-[70%] pl-4 "
          />
          <button className="text-[#2A254B] w-[30%] md:w-[118px] h-[56px]  bg-[#FFFFFF] ">
            Sign up
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-600 mt-8 py-5 md:pt-10 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto text-center px-5 xl:px-5 ">
      <p className="text-sm satoshi justify-self-center md:pr-5">
        © Copyright 2022 Avion LTD
      </p>
      <div className="md:flex justify-center space-x-4 text-2xl hidden">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          className="hover:text-blue-700 transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          className="hover:text-pink-500 transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 448 512"
          className="hover:text-[#00aff0] transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 512 512"
          className="hover:text-blue-400 transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="hover:text-red-600 transition-all duration-300 cursor-pointer"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12,0 C5.37225,0 0,5.37225 0,12 C0,17.0835 3.16275,21.426 7.62675,23.17425 C7.52175,22.22475 7.42725,20.76825 7.66875,19.73175 C7.88625,18.79575 9.07575,13.767 9.07575,13.767 C9.07575,13.767 8.7165,13.0485 8.7165,11.98575 C8.7165,10.317 9.684,9.07125 10.88775,9.07125 C11.9115,9.07125 12.4065,9.84 12.4065,10.76175 C12.4065,11.7915 11.751,13.3305 11.41275,14.757 C11.13,15.95175 12.01125,16.926 13.1895,16.926 C15.3225,16.926 16.962,14.67675 16.962,11.43075 C16.962,8.5575 14.89725,6.54825 11.949,6.54825 C8.535,6.54825 6.531,9.1095 6.531,11.75625 C6.531,12.7875 6.92775,13.89375 7.4235,14.4945 C7.52175,14.61375 7.536,14.71725 7.50675,14.83875 C7.416,15.21825 7.2135,16.03275 7.17375,16.2 C7.12125,16.419 6.99975,16.46625 6.7725,16.3605 C5.27325,15.66225 4.3365,13.4715 4.3365,11.71125 C4.3365,7.926 7.08675,4.44975 12.2655,4.44975 C16.428,4.44975 19.6635,7.416 19.6635,11.3805 C19.6635,15.516 17.05575,18.8445 13.43625,18.8445 C12.2205,18.8445 11.0775,18.21225 10.686,17.466 C10.686,17.466 10.0845,19.75725 9.93825,20.319 C9.6675,21.36075 8.93625,22.66725 8.4465,23.4645 C9.57,23.8125 10.76325,24 12,24 C18.62775,24 24,18.627 24,12 C24,5.37225 18.62775,0 12,0"
          ></path>
        </svg>
      </div>
    </div>
  </footer>

    </div>
  );
};

export default Page;
