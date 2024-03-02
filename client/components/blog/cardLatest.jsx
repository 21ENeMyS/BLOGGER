import React from "react";

const CardLatest = () => {
  return (
    <div className="container h-full w-full font-body">
      <div>
        <img
          className="object-center object-cover h-full w-full"
          src="https://source.unsplash.com/a-painting-of-a-group-of-men-on-horses-5EUh-tq31eA"
          alt="header_blog"
        />
      </div>
      <div className="flex justify-start items-center uppercase py-4">
        <span className="px-4 py-[1px] bg-accent_1 mr-5"></span>
        <h4>Jhon Elton</h4>
      </div>
      <h1 className="font-display text-4xl font-bold ">
        Nam egestas magna sit amet nibh porta, egestas interdum lorem porttitor.
      </h1>
      <div className="py-8 uppercase">
        <h4>
          <span className="mr-2 xl:py-2 py-[1px] px-2 bg-accent_1 text-white uppercase">
            ART
          </span>
          FEB 20 - 5 minute ago
        </h4>
      </div>
      <p>
        Quisque pellentesque, ante at egestas pulvinar, turpis lorem scelerisque
        dolor, mattis lobortis mauris nisl eget lorem. Nam in sagittis dolor.
        Nulla sollicitudin nec lectus gravida dictum. Morbi a arcu et turpis
        volutpat varius. Vivamus a odio non ante sollicitudin aliquam.
      </p>
    </div>
  );
};

export default CardLatest;
