import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, [router.pathname]);

  const handleNav = () => {
    setNav((prevNap) => !prevNap);
  };

  return (
    <header className="flex overflow-x-hidden justify-between items-center py-8 px-5 font-body w-full ">
      <div className="">
        <h1 className="z-10 font-bold text-2xl">Logo</h1>
      </div>
      <nav className="">
        <div
          className={`${
            nav ? "translate-x-0" : " -translate-x-full"
          }  flex justify-evenly items-center flex-col left-0 lg:flex-row top-16 lg:top-0 h-screen w-full lg:h-0 bg-accent_1 text-white lg:text-black/65 absolute lg:relative lg:gap-x-7 lg:translate-x-0 transition ease-in-out text-md z-50`}
        >
          {["", "about", "services", "blogs", "contact"].map((page, i) => (
            <div
              key={i}
              className={`${
                router.pathname === `/${page}` ? "text-black" : ""
              } hover:text-black`}
            >
              <Link href={`/${page}`}>
                {page.charAt(0).toUpperCase() + page.slice(1) || "Home"}
              </Link>
            </div>
          ))}

          <Link
            className="py-4 px-5 lg:bg-accent_1 text-primary rounded-lg lg:hover:bg-accent_1_hover bg-black hover:bg-slate-900"
            href={"/signin"}
          >
            Get Started
          </Link>
        </div>
        
        <div
          className="relative z-10 lg:hidden flex w-full h-6 flex-col justify-between items-center cursor-pointer"
          onClick={handleNav}
        >
          <span
            className={`${
              nav ? "rotate-[35deg] -translate-x-[1px] translate-y-[10px]" : ""
            } w-8 h-1 bg-accent_1 block transition ease-in-out`}
          ></span>
          <span
            className={`${nav ? "hidden" : ""} w-8 h-1 bg-accent_1 block`}
          ></span>
          <span
            className={`${
              nav ? "-rotate-[35deg] -translate-y-[10px] translate-x-0" : ""
            } w-8 h-1 bg-accent_1 block transition ease-in-out`}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
