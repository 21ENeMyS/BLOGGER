import Link from "next/link";
import React from "react";

const CardPost = () => {
  return (
    <Link href={"/"}>
      <div className="container h-full w-full font-body text-sm">
        <div>
          <img
            className="object-center object-cover h-full w-full"
            src="https://source.unsplash.com/a-painting-of-a-group-of-men-on-horses-5EUh-tq31eA"
            alt="header_blog"
          />
        </div>
        <div className=" flex justify-between items-center lg:items-center pt-5 lg:py-5 uppercase lg:flex-row flex-col">
          <div className="flex items-center">
            <span className="lg:mr-2 mr-2 lg:py-1 lg:px-2 py-2 px-2 bg-accent_1 text-white">
              TECH
            </span>
            <h4 className="text-center text-xs">FEB 20 - 5 minute ago</h4>
          </div>
          <div className=" flex justify-between items-center order-first lg:-order-none pb-5 lg:pb-0">
            <span className="px-2  py-[1px]  bg-black"></span>
            <h4 className="pl-2 text-xs">By elton jhon</h4>
          </div>
        </div>
        <div>
          <h1 className="font-display text-lg pt-5 pb-8 font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
