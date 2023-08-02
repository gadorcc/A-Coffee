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
          <h3 className="text-2xl-semi">Shop the latest styles</h3>
          <div className="mt-6">
            <UnderlineLink href="/store">Explore products</UnderlineLink>
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

    <div className="bg-alex-blue w-full">
  <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-32 relative">
    {/* Right column */}
    <div className="relative w-full aspect-square small:w-[55%] small:aspect-[28/36]">
      <Image
        src="/shop-sketch.jpg"
        alt=""
        className="absolute inset-0"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>

    {/* Left column */}
    <div>
      <h3 className="text-2xl-semi">Shop the latest styles</h3>
      <div className="mt-6">
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
export default Hero;
