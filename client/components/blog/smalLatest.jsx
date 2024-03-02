import Link from "next/link";
import React from "react";

const SmalLatest = () => {
  return (
    <Link href={"/"}>
      <div className="grid grid-cols-5 w-full h-full">
        <img
          className="object-cover object-center col-span-2 h-full"
          src="https://source.unsplash.com/silhouette-photo-of-rock-band-on-stage-performing-in-front-of-audience-yWF2LLan-_o"
          alt=""
        />
        <div className="col-span-3 text-md ml-3 text-md">
          <div className="flex justify-start items-center uppercase ">
            <span className="px-4 py-[1px] bg-accent_1 mr-3"></span>
            <h4>Jhon Elton</h4>
          </div>
          <h1 className="font-display font-bold py-3">
            Nam egestas magna sit amet nibh porta, egestas interdum lorem
            porttitor.
          </h1>
          <div className="pt-4 pb-2 uppercase text-sm">
            <h4>
              <span className="mr-2 xl:py-2 py-[1px] px-2 bg-accent_1 text-white uppercase">
                ART
              </span>
              FEB 20 - 5 minute ago
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmalLatest;
