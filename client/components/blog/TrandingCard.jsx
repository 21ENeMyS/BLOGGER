import Link from "next/link";
import React from "react";
import SmallCard from "./cardSmall";

const TrandingCard = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col justify-between items-center border-b-2 border-black py-5 uppercase ">
        <h1 className="lg:text-4xl text-2xl font-display font-bold">
          Today Tranding
        </h1>
        <div className="flex justify-between items-center lg:w-1/5 w-full pt-8 text-black/50 lg:pt-0">
          <Link href={"/"} className="hover:text-black">
            All
          </Link>
          <Link href={"/"} className="hover:text-black">
            Podcast
          </Link>
          <Link href={"/"} className="hover:text-black">
            Books
          </Link>
          <Link href={"/"} className="hover:text-black">
            Blogs
          </Link>
        </div>
      </div>
      <div className="pt-8 w-full lg:flex lg:flex-row-reverse flex-col justify-between items-center gap-5">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </>
  );
};

export default TrandingCard;
