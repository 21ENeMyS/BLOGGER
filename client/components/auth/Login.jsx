import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [eye, setEye] = useState(false);

  const openEye = () => {
    setEye(!eye);
  };

  return (
    <form
      className="font-body container mx-auto flex items-center justify-center flex-col p-8 text-black absolute z-50 lg:relative lg:z-0 h-screen md:w-full"
      // onSubmit={handleSubmit}
    >
      <h1 className="text-5xl font-bold roboto text-center mb-8">Signin</h1>

      <div className="relative w-full my-8">
        <input
          // type={textEmail === true ? "text" : "email"}
          autoComplete="off"
          id="email"
          // onClick={emailUser}
          // value={email}
          // onChange={handleChange("email")}
          required
          className="border-b py-1 focus:outline-none focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent "
        />
        <label
          htmlFor=""
          className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
        >
          Email
        </label>
      </div>
      <div className="relative my-5 w-full">
        <input
          type={eye === false ? "password" : "text"}
          autoComplete="off"
          id="password"
          // value={password}
          // onChange={handleChange("password")}
          required
          className="border-b py-1 focus:outline-none focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
        />
        <label
          htmlFor=""
          className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
        >
          Password
        </label>
        {/* {showErrorForm()} */}

        <div className="absolute top-2 text-lg right-4 cursor-pointer">
          {eye === false ? (
            <FaEye icon="fa:eye" onClick={openEye} />
          ) : (
            <FaEyeSlash icon="fa:eye-slash" onClick={openEye} />
          )}
        </div>
      </div>
      {/* <div className="relative my-5 w-full">
    <input
      type={open === false ? "password" : "text"}
      autoComplete="off"
      id="password"
      required
      className="border-b py-1 focus:outline-none focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
    />
    <label
      htmlFor=""
      className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
    >
      Verify Password
    </label>
    <span className="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
      8 Characters please
    </span>

    <div className="absolute top-2 text-xl right-4">
      {open === false ? (
        <IoEye onClick={eyePassword} />
      ) : (
        <IoEyeOff onClick={eyePassword} />
      )}
    </div>
  </div> */}
      <button
        type="submit"
        className="py-3 px-2 bg-accent_1 text-white hover:bg-accent_1_hover mt-4 w-2/3 text-center rounded-lg"
      >
        Signin
      </button>
      <h4 className="py-6 text-sm">
        Don't have account ?{" "}
        <Link href={"/signup"} className="text-accent_1">
          Register
        </Link>
      </h4>
    </form>
  );
};

export default Login;
