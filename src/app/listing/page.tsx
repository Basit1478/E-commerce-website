'use client'
import { useState } from "react";
import React from "react";
import Link from "next/link";
const Page = () => {
   const [isOpen, setIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsOpen(!isOpen);
        };
  return (
    <>
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
  <section className="max-w-[1280px] mx-auto caret-transparent">
    <div className="px-4 md:px-8 lg:px-12 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:h-[600px]">
        <div className="w-full md:w-1/2 h-full">
          <img
            alt="Frosted Serenity"
            loading="lazy"
            width={772}
            height={600}
            decoding="async"
            data-nimg={1}
            className="w-full h-full object-cover"
            srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fe2cc69a6c9f9d1ff1fcfbe839844240e16f5f758-305x375.png&w=828&q=75"
          
            style={{ color: "transparent" }}
          />
        </div>
        <div className="w-full md:w-1/2 lg:px-8 py-6 flex items-center justify-center">
          <div className="w-full">
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                Frosted Serenity
              </p>
              <p className="py-2 text-lg md:text-xl">$108</p>
            </div>
            <div className="text-[#505977] text-sm md:text-base">
              <h1 className="font-semibold">Description</h1>
              <div className="my-4">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="ml-4">
                <ul className="list-disc space-y-1">
                  <li>Premium material</li>
                  <li>Handmade upholstery</li>
                  <li>Quality timeless classic</li>
                </ul>
              </div>
              <div className="my-8">
                <h1 className="font-semibold">Dimensions</h1>
                <div className="flex gap-8 md:gap-20 text-sm md:text-base mt-2">
                  <div>
                    <h1>Height</h1>
                    <p>110cm</p>
                  </div>
                  <div>
                    <h1>Width</h1>
                    <p>75cm</p>
                  </div>
                  <div>
                    <h1>Depth</h1>
                    <p>50cm</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <h1>Amount:</h1>
                  <div className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                    <button className="text-green-800 text-sm font-bold">
                      -
                    </button>
                    1
                    <button className="text-red-800 text-sm font-bold">
                      +
                    </button>
                  </div>
                </div>
                <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main
      className="flex flex-col items-center justify-center gap-y-2 px-5 md:px-0 h-fit xl:px-0"
      id="ceramic"
    >
      <h1 className="clashDisplay md:text-[2rem] text-[20px]  font-[400px] self-start md:self-center xl:self-start mb-3 md:mt-10 lg:mt-0">
      You may also like
    </h1>
    <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 xl:gap-x-5  gap-5">
    
        <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
          <img
            alt="Clay Studio"
            loading="lazy"
            width={305}
            height={375}
            decoding="async"
            data-nimg={1}
            className="md:w-auto md:h-[375px] h-auto object-cover"
            srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fe84417cac36132891f4f71c506b4bc0f8f4ace6e-305x375.png&w=1920&q=75"
            style={{ color: "transparent" }}
          />
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              Clay Studio
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £110
            </p>
          </div>
        </div>
    
    
        <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
          <img
            alt="Frosted Serenity"
            loading="lazy"
            width={305}
            height={375}
            decoding="async"
            data-nimg={1}
            className="md:w-auto md:h-[375px] h-auto object-cover"
            srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fe2cc69a6c9f9d1ff1fcfbe839844240e16f5f758-305x375.png&w=384&q=75"
            style={{ color: "transparent" }}
          />
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              Frosted Serenity
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £108
            </p>
          </div>
        </div>
      
    
        <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
          <img
            alt="Satin Vase"
            loading="lazy"
            width={305}
            height={375}
            decoding="async"
            data-nimg={1}
            className="md:w-auto md:h-[375px] h-auto object-cover"
            srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F2219cafc285ec13a2ed3f88aa36cbea852a11735-305x375.png&w=384&q=75"
            style={{ color: "transparent" }}
          />
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              Satin Vase
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £120
            </p>
          </div>
        </div>
      
     
        <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
          <img
            alt="Ivory Vase"
            loading="lazy"
            width={305}
            height={375}
            decoding="async"
            data-nimg={1}
            className="md:w-auto md:h-[375px] h-auto object-cover"
            srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fcc65b2f74a1e982d7c951af535ac916885c2e0b5-305x375.png&w=384&q=75"
   
            style={{ color: "transparent" }}
          />
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              Ivory Vase
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £130
            </p>
          </div>
        </div>
     
    
      <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
        <img
          alt="CHAIR"
          loading="lazy"
          width={305}
          height={375}
          decoding="async"
          data-nimg={1}
          className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
          srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2Fe84417cac36132891f4f71c506b4bc0f8f4ace6e-305x375.png&w=1920&q=75"
         
          style={{ color: "transparent" }}
        />
        <div>
          <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
            The Lucy Lamp
          </p>
          <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
            £399
          </p>
        </div>
      </div>
      </div>
    </main>
    <div className="bg-white w-full xl:h-[355px] md:h-[450px]  h-[757px] flex flex-col md:mt-12 md:px-10 px-5 xl:p-0">
      <h2 className="md:text-2xl text-[20px] text-start font-bold mb-6 md:text-center text-[#2A254B] clashDisplay mt-10 ">
        What makes our brand different
      </h2>
      <div className="w-full mx-auto h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 items-center">
        <div className="flex items-start flex-col xl:w-[260px] h-[160px]  gap-[16px] clashDisplay font-[400] w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 640 512"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
            </svg>
          </div>
          <h3 className=" md:text-xl text-[16px] font-semibold">
            Next day as standard
          </h3>
          <p className="text-[14px] md:text-[16px] leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px] gap-[16px] clashDisplay font-[400]  w-full  transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Made by true artisans
          </h3>
          <p className="text-[16px] leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px]  h-[160px]  gap-[16px] clashDisplay font-[400]  w-full transition-transform duration-300 ease-in-out hover:scale-95 ">
          <div>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Unbeatable prices
          </h3>
          <p className="text-[16px] leading-6">
            For our materials and quality you won’t find better prices anywhere.
          </p>
        </div>
        <div className="flex items-start flex-col xl:w-[270px] h-[160px] gap-[16px] clashDisplay font-[400] w-full   transition-transform duration-300 ease-in-out hover:scale-95">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 256 256"
              className="text-3xl text-black"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M247.63,47.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,159c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,176,54.58,54.58,0,0,0,87,170.33l25,25V224a8,8,0,0,0,16,0V194.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,141.21,250.67,99.65,247.63,47.89ZM47.81,155.6C32.47,146.31,23.79,124.32,24,96c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,122.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,161.24,55.82,160.45,47.81,155.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,136c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,98.34,220.14,131.44,197.12,145.38Z"></path>
            </svg>
          </div>
          <h3 className="md:text-xl text-[16px] font-semibold">
            Recycled packaging
          </h3>
          <p className="text-[16px] leading-6">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>
    <div className="Toastify" />
  </section>
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
 
</>

  );
};

export default Page;
