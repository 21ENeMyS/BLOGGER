import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <Link href={"/"}>
      <div className="font-body text-md">
        <img
          className="object-cover object-center w-full h-[327px]"
          src="https://source.unsplash.com/a-close-up-of-a-pair-of-sunglasses-on-a-black-background-PRyOwVwqTis"
          alt=""
        />
        <div className="flex justify-start items-center uppercase py-4">
          <span className="px-4 py-[1px] bg-accent_1 mr-5"></span>
          <h4>Jhon Elton</h4>
        </div>
        <h1 className="font-display text-xl lg:text-3xl font-bold">
          Nam egestas magna sit amet nibh porta, egestas interdum lorem
          porttitor.
        </h1>
        <div className="py-5 uppercase">
          <h4 className="text-md">
            <span className="mr-2 lg:py-2 py-[1px] px-2 bg-accent_1 text-white uppercase">
              ART
            </span>
            FEB 20 - 5 minute ago
          </h4>
        </div>
        <p>
          Quisque pellentesque, ante at egestas pulvinar, turpis lorem
          scelerisque dolor, mattis lobortis mauris nisl eget lorem. Nam in
          sagittis dolor. Nulla sollicitudin nec lectus gravida dictum. Morbi a
          arcu et turpis volutpat varius. Vivamus a odio non ante sollicitudin
          aliquam.
        </p>
      </div>
    </Link>
  );
};

export default Card;
