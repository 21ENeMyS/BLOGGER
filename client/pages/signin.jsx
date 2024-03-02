import Login from "../components/auth/Login";

const signin = () => {
  return (
    <div className="container grid grid-cols-12 items-center xl:h-screen w-full gap-11 overflow-hidden">
      <div className="xl:col-span-6 col-span-12">
        <Login />
      </div>
      <div className="object-center object-cover w-full h-screen xl:col-span-6 hidden xl:block">
        <img
          className="object-center object-cover w-full h-full"
          src="https://source.unsplash.com/a-bird-flying-over-a-mountain-range-at-sunset-HghkWDMuHx4"
          alt=""
        />
      </div>
    </div>
  );
};

export default signin;
