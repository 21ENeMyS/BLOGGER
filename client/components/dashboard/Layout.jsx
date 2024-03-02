import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen w-full">
      <div className="col-span-2 row-span-12 fixed left-0 top-0 w-1/6 z-20 ">
        <Sidebar />
      </div>
      <header className="col-span-10 self-center row-span-1 bg-slate-700 lg:w-[84%] z-10 fixed top-0 lg:left-52 left-0 w-full">
        <Header />
      </header>
      <main className="col-span-10 row-span-11 px-8 lg:py-5 py-8 font-body absolute top-[10%] lg:left-[15%] left-0 ">
        {children}
      </main>
    </div>
  );
};

export default LayoutDashboard;
