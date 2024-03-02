import React from "react";
import LayoutDashboard from "../../components/dashboard/Layout";
import CardPost from "../../components/blog/CardPost";

const post = () => {
  return (
    <LayoutDashboard>
      <div className="grid lg:grid-cols-3 grid-cols-2 items-center gap-5 w-full px-4 py-5">
        <div className="lg:col-span-3 col-span-2 ">
          <h1 className="text-4xl font-bold">Articles</h1>
        </div>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </div>
    </LayoutDashboard>
  );
};

export default post;
