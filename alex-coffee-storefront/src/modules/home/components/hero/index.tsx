'use client'
import React from "react";
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
            <UnderlineLink href="/store">Browse Coffee Options</UnderlineLink>
          </div>
          <div className="mt-6">
            <UnderlineLink href="/store">Subscribe & Save</UnderlineLink>
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



    <div className="bg-alex-dark-blue w-full">
  <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-32 relative">
    {/* Right column */}
    <div className="relative w-full aspect-square small:w-[55%] small:aspect-[28/36]">
      <Image
        src="/cafe.webp"
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
      <div className="mt-6">
        <UnderlineLink className="text-white" href="/store">Alex Coffee Shop</UnderlineLink>
      </div>
    </div>
  </div>
</div>


    </>
  );
}
export default Hero;
