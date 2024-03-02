import Link from "next/link";
import React from "react";

const Links = [
  {
    title: "Blog",
    path: "/blog",
  },
  { title: "Podcast", path: "/podcast" },
  {
    title: "Membership",
    path: "/membership",
  },
];

const Company = [
  {
    title: "About",
    path: "/about",
  },
  { title: "Career", path: "/career" },
  { title: "Contact Us", path: "/contact" },
];

const Social = [
  { title: "youtube", path: "https://youtube.com/" },
  { title: "Instagram", path: "https://instagram.com/" },
  {
    title: "Facebook",
    path: "https://facebook.com/",
  },
  { title: "Twitter / X", path: "https://twitter.com/" },
];

const Footer = () => {
  return (
    <div className="grid grid-cols-12 font-body capitalize border-t-2 border-black items-center px-5 py-5 w-full">
      <div className="lg:col-span-7 col-span-12">
        <h1 className="font-display font-semibold text-4xl capitalize pb-6">
          send me news
        </h1>
        <div className="max-w-2xl flex justify-between items-center">
          <div className="relative w-full my-8">
            <input
              type="text"
              autoComplete="off"
              id=""
              // value={name}
              // onChange={handleChange("name")}
              required
              className="border-b py-1 focus:outline-none focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
            />
            <label
              htmlFor=""
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
            >
              Enter your email
            </label>
          </div>
          <button
            type="submit"
            className="bg-transparent capitalize w-40 py-1 relative -left-[15%]"
          >
            Get insight
          </button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-14 lg:gap-0 col-span-12 lg:col-span-5 w-full">
        <div className="flex flex-col justify-between items-end">
          <h2 className="font-display text-2xl pb-5 uppercase font-bold">
            Content
          </h2>
          {Links.map((link, i) => (
            <Link href={link.path} key="i">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between items-end">
          <h2 className="font-display text-2xl pb-5 uppercase font-bold">
            Company
          </h2>
          {Company.map((link, i) => (
            <Link href={link.path} key={i}>
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-between items-end">
          <h2 className="font-display text-2xl pb-5 uppercase font-bold">
            Social
          </h2>
          {Social.map((link, i) => (
            <Link href={link.path} key={i}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
