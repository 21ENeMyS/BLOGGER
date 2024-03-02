import React from "react";

const MediumCard = () => {
  return (
    <div className="container h-full w-full font-body text-sm">
      <div>
        <img
          className="object-center object-cover h-full w-full"
          src="https://source.unsplash.com/a-painting-of-a-group-of-men-on-horses-5EUh-tq31eA"
          alt="header_blog"
        />
      </div>
      <div className="w-full flex justify-between items-start lg:items-center pt-5 lg:py-5 uppercase lg:flex-row flex-col">
        <div className="flex items-center">
          <span className="lg:mr-4 mr-2 lg:py-2 lg:px-4 py-2 px-2 bg-accent_1 text-white">
            TECH
          </span>
          <h4 className="text-center">FEB 20 - 5 minute ago</h4>
        </div>
        <div className=" flex justify-between items-center order-first lg:-order-none pb-5 lg:pb-0">
          <span className="px-2  py-[1px]  bg-black"></span>
          <h4 className="pl-2">By elton jhon</h4>
        </div>
      </div>
      <div>
        <h1 className="font-display lg:text-5xl text-2xl pt-5 pb-8 font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="text-lg">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
    </div>
  );
};

export default MediumCard;
