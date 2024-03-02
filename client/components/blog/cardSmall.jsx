import Image from "next/image";
import Link from "next/link";
import React from "react";

const SmallCard = () => {
  return (
    <>
      <Link href={"/"}>
        <div className="relative w-full font-body text-sm text-white flex cursor-pointer pb-5">
          <img
            className="object-cover object-center bg-no-repeat w-full h-[300px]"
            src="https://source.unsplash.com/a-man-holding-a-lantern-in-the-dark-yg6v0KoiIcU"
            alt=""
          />
          <div className="absolute flex justify-end bg-black/50 transition ease-in-out hover:bg-transparent items-start flex-col w-full h-[300px] text-start px-4">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              culpa vero beatae ipsa et, consequatur maxime impedit repudiandae
              dignissimos amet vel, tempora possimus totam sit rerum aspernatur,
              quaerat ad. Distinctio, quasi qui vitae odio, consequatur veniam
              corrupti id quam odit aspernatur quia optio, ipsam totam quod nam
              autem nisi tempora.
            </h1>
            <div className=" flex justify-between items-center py-8 w-full uppercase text-sm">
              <div className="flex items-center text-center">
                <span className="mr-2 py-2  px-2 bg-accent_1 text-white ">
                  TECH
                </span>
                <h4>FEB 20 - 5 minute ago</h4>
              </div>
              <div>
                <div className="uppercase flex justify-between items-center">
                  <span className="px-2 py-[1px]  bg-white"></span>
                  <h4 className="pl-2">By elton jhon</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SmallCard;
