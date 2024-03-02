import Link from "next/link";
import React from "react";
import SmallCard from "../../components/blog/cardSmall";
import Card from "../../components/blog/Card";
import Layout from "../../components/Layout";
import TrandingCard from "../../components/blog/TrandingCard";

const index = () => {
  return (
    <Layout>
      <div className="grid lg:grid-cols-12 grid-cols-1 items-center font-body w-full h-full gap-8">
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
      </div>
    </Layout>
  );
};

export default index;
