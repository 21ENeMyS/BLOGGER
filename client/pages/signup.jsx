import React from "react";
import Register from "../components/auth/Register";

const Signup = () => {
  return (
    <div className="container grid grid-cols-12 w-full lg:h-screen h-full overflow-hidden gap-11 ">
      <div className="w-full h-full lg:col-span-6 hidden lg:block">
        <img
          className="h-full w-full object-center object-cover "
          src="https://source.unsplash.com/a-close-up-view-of-a-wall-made-of-wood-17kMEEWdOSM"
          alt="register.jpeg"
        />
      </div>
      <div className="col-span-12 lg:col-span-6 ">
        <Register />
      </div>
    </div>
  );
};

export default Signup;
