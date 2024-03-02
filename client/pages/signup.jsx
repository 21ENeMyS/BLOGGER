import React from "react";
import Register from "../components/auth/Register";

const Signup = () => {
  return (
    <div className="container grid grid-cols-12 w-full xl:h-screen h-full overflow-hidden gap-11 items-center">
      <div className="w-full h-full xl:col-span-6 hidden xl:block">
        <img
          className="h-full w-full object-center object-cover "
          src="https://source.unsplash.com/a-close-up-view-of-a-wall-made-of-wood-17kMEEWdOSM"
          alt="register.jpeg"
        />
      </div>
      <div className="col-span-12 xl:col-span-6 ">
        <Register />
      </div>
    </div>
  );
};

export default Signup;
