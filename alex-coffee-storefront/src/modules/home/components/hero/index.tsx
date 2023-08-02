// 'use client'
import React from "react";
import { Carousel } from "flowbite-react";
import UnderlineLink from "@modules/common/components/underline-link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className="bg-white w-full">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-32 relative">
        <div>
          <h1 className="text-2xl-semi">Shop your beans online</h1>
          <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
            From wholebeans to ground to your favorite brewing method.
          </p>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore Alex Coffee options</UnderlineLink>
          </div>
        </div>

        <div className="relative w-full aspect-square small:w-[55%] small:aspect-[28/36]">
          <Image
            src="/clim.webp"
            alt=""
            className="absolute inset-0"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>



    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Alex Cafe
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Last Alex coffee blend, beans or ground for your favorite brewing method.
        </p>

        <UnderlineLink href="/store">Buy Coffee</UnderlineLink>
      </div>
      <Image
        src="/cafe.webp"
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @Alex-Coffee"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="70vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>

    </>
  );
}
export default Hero;
