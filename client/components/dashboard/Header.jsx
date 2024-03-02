import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { TiContacts } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import Link from "next/link";
import { RxExit } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const profile = [
    { icon: <CiUser />, path: "dashboard/profile/", title: "My Profile" },
    { icon: <TiContacts />, path: "dashboard/contact/", title: "My contact" },
    {
      icon: <IoSettingsOutline />,
      path: "dashboard/setting-account/",
      title: "setting account",
    },
  ];

  return (
    <div className="px-8 py-5 flex justify-between items-center w-full h-full text-white font-body">
      <div className="relative z-10 lg:hidden flex w-full h-6 flex-col justify-between items-center cursor-pointer">
        <span
          className="rotate-[35deg] -translate-x-[1px] translate-y-[10px] 
           w-8 h-1 bg-accent_1 block transition ease-in-out"
        ></span>
        <span className="w-8 h-1 bg-accent_1 block"></span>
        <span
          className="
            -rotate-[35deg] -translate-y-[10px] translate-x-0 w-8 h-1 bg-accent_1 block transition ease-in-out"
        ></span>
      </div>
      <div className="flex justify-start items-center  w-full">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          className=" py-2 px-4 w-1/2  focus:outline-none bg-transparent"
          placeholder="Type to search..."
        />
      </div>
      <div className="flex items-center justify-between w-[10%]">
        <div className="bg-black py-2 px-2 rounded-full" onClick={handleOpen}>
          <FiBell className="text-xl" />
        </div>
        {open && (
          <div className="fixed flex flex-col w-1/4 h-1/2 right-32 top-14  bg-black capitalize">
            <div className="px-4 py-3 text-white/70">
              <h1>Notification</h1>
            </div>
            <ul className="flex flex-col h-auto overflow-y-auto">
              <li className="py-3 px-4 border-t border-white/20 hover:bg-white/30">
                <Link href={"/"} className="flex flex-col gap-2.5">
                  <p className="text-sm text-white/50">
                    <span className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                    Placeat, vitae veniam totam tempore, corrupti earum
                    perferendis, delectus exercitationem ut beatae quod. Quos
                    aliquid odit unde commodi tenetur, error quibusdam
                    voluptate?
                  </p>
                  <p className="text-xs">21 Feb, 2025</p>
                </Link>
              </li>
              <li className="py-3 px-4 border-t border-white/20 hover:bg-white/30">
                <Link href={"/"} className="flex flex-col gap-2.5">
                  <p className="text-sm text-white/50">
                    <span className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                    Placeat, vitae veniam totam tempore, corrupti earum
                    perferendis, delectus exercitationem ut beatae quod. Quos
                    aliquid odit unde commodi tenetur, error quibusdam
                    voluptate?
                  </p>
                  <p className="text-xs">21 Okt, 2025</p>
                </Link>
              </li>
              <li className="py-3 px-4 border-t border-white/20 hover:bg-white/30">
                <Link href={"/"} className="flex flex-col gap-2.5">
                  <p className="text-sm text-white/50">
                    <span className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                    Placeat, vitae veniam totam tempore, corrupti earum
                    perferendis, delectus exercitationem ut beatae quod. Quos
                    aliquid odit unde commodi tenetur, error quibusdam
                    voluptate?
                  </p>
                  <p className="text-xs">21 Des, 2025</p>
                </Link>
              </li>
              <li className="py-3 px-4 border-t border-white/20 hover:bg-white/30">
                <Link href={"/"} className="flex flex-col gap-2.5">
                  <p className="text-sm text-white/50">
                    <span className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                    Placeat, vitae veniam totam tempore, corrupti earum
                    perferendis, delectus exercitationem ut beatae quod. Quos
                    aliquid odit unde commodi tenetur, error quibusdam
                    voluptate?
                  </p>
                  <p className="text-xs">21 Jan, 2026</p>
                </Link>
              </li>
              <li className="py-3 px-4 border-t border-white/20 hover:bg-white/30">
                <Link href={"/"} className="flex flex-col gap-2.5">
                  <p className="text-sm text-white/50">
                    <span className="text-white">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                    Placeat, vitae veniam totam tempore, corrupti earum
                    perferendis, delectus exercitationem ut beatae quod. Quos
                    aliquid odit unde commodi tenetur, error quibusdam
                    voluptate?
                  </p>
                  <p className="text-xs">21 Okt, 2026</p>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="cursor-pointer" onClick={handleOpen}>
          <img
            className="object-cover object-center bg-no-repeat rounded-full h-10 w-[40px]"
            src="https://source.unsplash.com/silhouette-of-man-illustration-2LowviVHZ-E"
            alt=""
          />
          {open && (
            <div className="fixed text-center flex flex-col justify-evenly  w-1/5 h-2/6 right-[4%] top-[8.2%]  bg-black capitalize ">
              {profile.map((profile, i) => (
                <div
                  className="flex justify-start items-center py-2 px-5 hover:bg-white hover:text-black "
                  key={i}
                >
                  <div className="text-xl">{profile.icon}</div>
                  <Link href={`${profile.path}`} className="pl-5">
                    {profile.title}
                  </Link>
                </div>
              ))}
              <div className="flex justify-start items-center py-5 px-5 hover:bg-white hover:text-black border-t border-white/25">
                <RxExit />
                <Link href={`/signout`} className="pl-5">
                  Signout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
