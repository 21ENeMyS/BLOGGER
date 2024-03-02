import React from "react";
import { BsListTask } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { IoCalendarOutline } from "react-icons/io5";
import { LuBarChart4 } from "react-icons/lu";
import { BsPostcard } from "react-icons/bs";
import { TbCategory } from "react-icons/tb";
import { FiGrid } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import Link from "next/link";

const menu = [
  { icon: <FiGrid />, title: "Dashboard", path: "/dashboard/admin/" },
  { icon: <BsPostcard />, title: "Post", path: "/dashboard/post" },
  {
    icon: <TbCategory />,
    title: "Categories",
    path: "/dashboard/admin/categories",
  },
  { icon: <BsListTask />, title: "Task", path: "/dashboard/admin/task" },
  {
    icon: <TfiLayoutMediaLeft />,
    title: "Media",
    path: "/dashboard/admin/media",
  },
];

const support = [
  { icon: <TiMessages />, title: "Message", path: "/dashboard/admin/message" },
  { icon: <LuBarChart4 />, title: "Charts", path: "/dashboard/admin/chart" },
  {
    icon: <IoCalendarOutline />,
    title: "Calender",
    path: "/dashboard/admin/calender",
  },
];

const Sidebar = () => {
  return (
    <div className="bg-slate-700 lg:flex w-full flex-col justify-between text-white items-center h-screen font-body py-5 capitalize hidden">
      <Link href={"/dashboard/admin"} className=" text-4xl ">
        Blog
      </Link>
      <div className="">
        <h3 className="text-white/35">Menu</h3>
        <div className="flex justify-between items-start w-full h-full py-5 flex-col">
          {menu.map((menu, i) => (
            <div
              key={i}
              className=" flex items-center py-1 hover:bg-white hover:text-slate-700 w-full"
            >
              {menu.icon}
              <Link href={`${menu.path}`} className="pl-2 ">
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" ">
        <h3 className="text-white/35">support</h3>
        <div className="flex flex-col justify-between items-start py-5 h-full">
          {support.map((menu, i) => (
            <div key={i} className="flex justify-between items-center py-1">
              {menu.icon}
              <Link href={`${menu.path}`} className="pl-2">
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <RxExit />
        <Link href={"#"} className="pl-2">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
