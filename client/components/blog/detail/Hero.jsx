import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-full left-0 top-0 -z-10 col-span-12">
        <img
          className="object-cover object-center h-screen w-full"
          src="https://source.unsplash.com/a-rusted-boat-sitting-on-top-of-a-beach-SALjo72wHRk"
          alt=""
        />
      </div>
      <div className="w-full h-full bg-black/70 text-white absolute hover:bg-transparent">
        <div className="absolute lg:top-1/2 md:right-16 right-5 sm:right-10 top-40 lg:right-10 h-60  text-start font-body lg:w-1/2 w-5/6">
          <h1 className="font-display lg:text-5xl text-3xl py-8 font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            voluptatem?
          </h1>
          <div className="flex items-center justify-start uppercase">
            <span className="py-2 px-3 mr-4 bg-accent_1 text-white">ARTS</span>
            <h4>December 12 - 2024</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
