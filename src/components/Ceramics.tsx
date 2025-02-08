import React from 'react'

const Card = () => {
 
  return (
    <main
    className="flex flex-col items-center justify-center gap-y-2 px-5 md:px-0 h-fit xl:px-0"
    
  >
    <h1 className="md:text-[2rem] text-[20px]  font-[400px]   mb-3 md:mt-10 lg:mt-0">
      New ceramics
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
  )
}

export default Card
