import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineArticle } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import LayoutDashboard from "../../components/dashboard/Layout";
import BarChart from "../../components/Bar";
import { IoMdMore } from "react-icons/io";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const Index = () => {
  const upAndDown = [
    {
      title: "growth",
      icon: <FaLongArrowAltUp className="text-green-800" />,
    },
    {
      title: "Reception",
      icon: <FaLongArrowAltDown className="text-red-800" />,
    },
  ];
  return (
    <LayoutDashboard>
      <div className="grid grid-cols-12 w-full gap-8">
        <h1 className="col-span-12 text-4xl font-bold">Dashboard</h1>
        <div className="lg:col-span-3 col-span-6 flex items-center justify-around capitalize">
          <FaRegEye className="text-xl" />
          <div>
            <p className="text-sm">Views</p>
            <p className="text-xl font-bold">200.000</p>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-6 flex items-center justify-around capitalize">
          <MdOutlineArticle className="text-xl" />
          <div>
            <p className="text-sm">Articles</p>
            <p className="text-xl font-bold">200.000</p>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-6 flex items-center justify-around capitalize">
          <FaPeopleGroup className="text-xl" />
          <div>
            <p className="text-sm">Subscription</p>
            <p className="text-xl font-bold">200.000</p>
          </div>
        </div>
        <div className="lg:col-span-3 col-span-6 flex items-center justify-around capitalize">
          <GoPencil className="text-xl" />
          <div>
            <p className="text-sm">authors</p>
            <p className="text-xl font-bold">200.000</p>
          </div>
        </div>
        <h1 className="col-span-12 text-lg">Visitor statistic</h1>
        <div className="lg:col-span-7 col-span-12 w-full h-full">
          <BarChart />
        </div>
        <div className="lg:col-span-5 col-span-12">
          <div className="flex justify-between items-center w-full pb-5 border-b px-5 border-black/40">
            <p className="text-lg">Categories</p>
            {upAndDown.map((content, i) => (
              <div className="flex items-center" key={i}>
                {content.icon}
                <p className="pl-2 text-sm">{content.title}</p>
              </div>
            ))}
          </div>
          <ul className="flex flex-col overflow-y-auto max-h-44">
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Games
              <div className="flex items-center justify-between text-green-800 text-sm py-3">
                <FaLongArrowAltUp />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Fashion
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Architecs
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Musics
              <div className="flex items-center justify-between text-green-800 text-sm py-3">
                <FaLongArrowAltUp />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
          </ul>
        </div>
        <h1 className="col-span-12 text-lg">Latest Articles</h1>
        <div className="lg:col-span-7 col-span-12 w-full lg:h-56 h-96 overflow-y-auto ">
          <table className="table table-auto">
            <thead className="sticky top-0 bg-white border-b border-black h-full w-full">
              <tr>
                <th className="p-3 border">Date time</th>
                <th className="p-3 border">Cover</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Categories</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody className="text-center text-sm ">
              <tr>
                <td className="border p-2">11 Sept 2021</td>
                <td className="border p-2 ">
                  <img
                    className="object-cover object-center h-14 w-14"
                    src="https://source.unsplash.com/a-narrow-alley-way-with-tables-and-chairs-WkVf7ce7RAc"
                    alt=""
                  />
                </td>
                <td className="border p-2 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, earum.
                </td>
                <td className="border p-2">Art</td>
                <td className="border p-2">
                  <IoMdMore />
                </td>
              </tr>
              <tr>
                <td className="border p-2">11 Sept 2021</td>
                <td className="border p-2 ">
                  <img
                    className="object-cover object-center h-14 w-14"
                    src="https://source.unsplash.com/a-narrow-alley-way-with-tables-and-chairs-WkVf7ce7RAc"
                    alt=""
                  />
                </td>
                <td className="border p-2 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, earum.
                </td>
                <td className="border p-2">Art</td>
                <td className="border p-2">
                  <IoMdMore />
                </td>
              </tr>
              <tr>
                <td className="border p-2">11 Sept 2021</td>
                <td className="border p-2 ">
                  <img
                    className="object-cover object-center h-14 w-14"
                    src="https://source.unsplash.com/a-narrow-alley-way-with-tables-and-chairs-WkVf7ce7RAc"
                    alt=""
                  />
                </td>
                <td className="border p-2 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, earum.
                </td>
                <td className="border p-2">Art</td>
                <td className="border p-2">
                  <IoMdMore />
                </td>
              </tr>
              <tr>
                <td className="border p-2">11 Sept 2021</td>
                <td className="border p-2 ">
                  <img
                    className="object-cover object-center h-14 w-14"
                    src="https://source.unsplash.com/a-narrow-alley-way-with-tables-and-chairs-WkVf7ce7RAc"
                    alt=""
                  />
                </td>
                <td className="border p-2 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, earum.
                </td>
                <td className="border p-2">Art</td>
                <td className="border p-2">
                  <IoMdMore />
                </td>
              </tr>
              <tr>
                <td className="border p-2">11 Sept 2021</td>
                <td className="border p-2 ">
                  <img
                    className="object-cover object-center h-14 w-14"
                    src="https://source.unsplash.com/a-narrow-alley-way-with-tables-and-chairs-WkVf7ce7RAc"
                    alt=""
                  />
                </td>
                <td className="border p-2 text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, earum.
                </td>
                <td className="border p-2">Art</td>
                <td className="border p-2">
                  <IoMdMore />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="lg:col-span-5 col-span-12">
          <div className="flex justify-between items-center w-full pb-5 border-b px-5 border-black/40">
            <p className="text-lg">Categories</p>
            {upAndDown.map((content, i) => (
              <div className="flex items-center" key={i}>
                {content.icon}
                <p className="pl-2 text-sm">{content.title}</p>
              </div>
            ))}
          </div>
          <ul className="flex flex-col h-auto overflow-y-auto max-h-44">
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Games
              <div className="flex items-center justify-between text-green-800 text-sm py-3">
                <FaLongArrowAltUp />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Fashion
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Architecs
              <div className="flex items-center justify-between text-red-800 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Musics
              <div className="flex items-center justify-between text-green-800 text-sm py-3">
                <FaLongArrowAltUp />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
            <li className="flex justify-between items-center w-full text-lg border-b border-black/40 px-5">
              Development
              <div className="flex items-center justify-between text-red-700 text-sm py-3">
                <FaLongArrowAltDown />
                <p>1.2k</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default Index;
