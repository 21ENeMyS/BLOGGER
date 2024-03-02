import React from "react";
import Layout from "../components/Layout";
import CardMedium from "../components/blog/cardMedium";
import SmallCard from "../components/blog/cardSmall";
import CardLatest from "../components/blog/cardLatest";
import Link from "next/link";
import Card from "../components/blog/Card";
import SmalLatest from "../components/blog/smalLatest";
import TrandingCard from "../components/blog/TrandingCard";

const index = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 gap-0 lg:gap-8 font-body w-full h-full">
        <div className="col-span-12 lg:col-span-7">
          <CardMedium />
        </div>
        <div className="col-span-12 lg:col-span-5 lg:border-l lg:pt-0 pt-5 lg:pl-7 lg:border-black">
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
        <div className="col-span-12 text-sm">
          <TrandingCard />
        </div>
        <div className="col-span-12 grid py-5 text-md">
          <h1 className=" font-display font-bold text-2xl lg:text-4xl uppercase border-b-2 pb-5 border-black">
            other articles
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 pt-8">
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
            <div className="border border-black py-5 px-5">
              <Card />
            </div>
          </div>

          <button
            type="Submit"
            className="py-2 lg:py-3 px-8 bg-accent_1 place-self-center uppercase font-display text-md lg:text-3xl text-white hover:bg-accent_1_hover text-center mt-8 "
          >
            Other articles
          </button>
        </div>
        <h1 className="col-span-12 uppercase font-display text-4xl font-bold border-b-2 border-black pb-5">
          The latest articles
        </h1>
        <div className="lg:col-span-7 col-span-12 lg:py-0 py-8">
          <CardLatest />
        </div>
        <div className="lg:col-span-5 col-span-12 grid grid-cols-1  gap-y-5">
          <SmalLatest />
          <SmalLatest />
          <SmalLatest />
          <SmalLatest />
        </div>
      </div>
    </Layout>
  );
};

export default index;
