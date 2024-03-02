import React from "react";
import Hero from "../../components/profile/Hero";
import Layout from "../../components/Layout";
import SmallCard from "../../components/blog/cardSmall";
import Link from "next/link";
import Card from "../../components/blog/Card";

const index = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 items-center gap-0 lg:gap-8 w-full">
        <div className="text-justify col-span-12 lg:col-span-6 font-bold w-full capitalize">
          <h3 className="text-xl">Hi There !</h3>
          <h1 className="text-4xl py-5 w-full">
            I'm Aiony Haust a{" "}
            <span className="text-accent_1">Photographer</span>
          </h1>
          <p className="font-normal text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            repellat dolores aperiam perspiciatis libero similique eum minima
            ab. Laborum totam, magnam temporibus iusto labore tempora
            perferendis numquam autem corporis facere! Explicabo consequuntur
            hic maiores soluta, minima nostrum porro architecto, blanditiis non
            quis dolor quibusdam dolores sapiente labore nisi maxime rerum?
          </p>
        </div>
        <img
          className="rounded-full place-self-center lg:w-full lg:h-4/5 w-4/5 md:1/2 h-4/5 object-cover object-center  lg:col-span-6 col-span-12 order-first lg:-order-none"
          src="https://source.unsplash.com/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo"
          alt=""
        />
        <div className="col-span-12 text-sm">
          <div className="flex lg:flex-row flex-col justify-between items-center border-b-2 border-black py-5 uppercase ">
            <h1 className="lg:text-4xl text-2xl font-display font-bold">
              Today Tranding
            </h1>
            <div className="flex justify-between items-center lg:w-1/5 w-full pt-8 text-black/50 lg:pt-0">
              <Link href={"/"}>All</Link>
              <Link href={"/"}>Podcast</Link>
              <Link href={"/"}>Books</Link>
              <Link href={"/"}>Blogs</Link>
            </div>
          </div>
          <div className="pt-8 w-full lg:flex lg:flex-row-reverse flex-col justify-between items-center gap-5">
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
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
