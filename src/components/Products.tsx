import React from 'react'

const Products = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
        <h1 className=" md:text-[2rem] text-[20px] font-[400px]  mb-3 ">
          Our popular products
        </h1>
        <div className="flex gap-5 xl:gap-5">
      
          <div className="lg:w-[630px] w-full  h-fit xl:h-[462px] bg-white gap-[24px] flex-col hidden xl:flex  transition-transform duration-300 ease-in-out hover:scale-95">
            <img
              alt="CHAIR"
              loading="lazy"
              width={375}
              height={630}
              decoding="async"
              data-nimg={1}
              className="md:w-auto h-auto"
              srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=%2Fproducts%2FLarge.png&w=384&q=75"
              style={{ color: "transparent" }}
            />
            <div className='pl-5'>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Poplar suede sofa
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £980
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
                srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F4d2b134b5c9f27bcfdeeaab95ef4cc0e57ba93f5-1500x1500.jpg&w=384&q=75"
                style={{ color: "transparent" }}
              />
              <div>
                <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                  Classic Tableware
                </p>
                <p className="sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                  £84
                </p>
              </div>
            </div>
          
        
            <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">
              <img
                alt="Modern Tableware"
                loading="lazy"
                width={305}
                height={375}
                decoding="async"
                data-nimg={1}
                className="md:w-auto md:h-[375px] h-auto object-cover"
                srcSet="https://e-commerce-hacktathone.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F34qhsais%2Fproduction%2F6e4629ba62b3475b2f03505fbe344643ca286b2b-500x500.webp&w=384&q=75"

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
          
        </div>
        <a href="/products">
          <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] mt-4">
            View Collections
          </button>
        </a>
      </main>
   
  )
}

export default Products
