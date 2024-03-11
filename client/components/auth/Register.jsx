import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { signup } from "../../actions/auth";

const Register = () => {
  const [textEmail, setTextEmail] = useState(false);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    loading: false,
    message: "",
    error: "",
    showForm: true,
  });

  const emailUser = () => {
    setTextEmail(true);
  };

  // TODO !alerts not working
  const { name, email, password, loading, error, message, showForm } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false, showForm: false });
    const user = { name, email, password };
    signup(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          ...values,
          error: "",
          password: "",
          name: "",
          email: "",
          loading: false,
          message: data.message,
          showForm: false,
        });
      }
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const eyeOpen = () => {
    setOpen(!open);
  };

  const showError = () => {
    <div
      className="py-2 px-4 bg-red-600 text-white font-semibold"
      style={{ display: error ? "" : "none" }}
    >
      tidak lebih dari 8 characters
    </div>;
  };

  const showMessage = () => {
    message ? (
      <div className="py-5 px-3 text-white lg:bg-black bg-green-500">
        Accound has created
      </div>
    ) : (
      ""
    );
  };

  return (
    <>
      {message && showMessage()}
      {error ? (
        <div className="my-4 w-full font-semibold py-2 px-4 bg-red-600 text-white transition-all">
          {showError()}
        </div>
      ) : (
        ""
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="font-body container mx-auto flex items-center justify-center flex-col p-8 text-black  absolute z-50 lg:relative lg:z-0 h-screen md:w-full"
          // onSubmit={handleSubmit}
        >
          <h1 className="text-5xl font-bold roboto text-center mb-8">Signup</h1>

          <div className="relative w-full my-8">
            <input
              type="text"
              autoComplete="off"
              id=""
              value={name}
              onChange={handleChange("name")}
              required
              className="border-b py-1 focus:outline-none focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
            />
            <label
              htmlFor=""
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
            >
              Name
            </label>
          </div>
          <div className="relative w-full my-8">
            <input
              type={textEmail === true ? "text" : "email"}
              autoComplete="off"
              id="email"
              onClick={emailUser}
              value={email}
              onChange={handleChange("email")}
              required
              className="border-b py-1 focus:outline-none  focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent "
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
              type={open === false ? "password" : "text"}
              autoComplete="off"
              id="password"
              value={password}
              onChange={handleChange("password")}
              required
              className="border-b py-1 focus:outline-none  focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
            />
            <label
              htmlFor=""
              className="absolute top-1 left-0 cursor-text peer-focus:text-xs peer-focus:-top-5 transition-all peer-valid:-top-5 peer-valid:text-xs"
            >
              Password
            </label>
            {/* {showErrorForm()} */}

            <div className="absolute top-2 text-lg right-4 cursor-pointer">
              {open === false ? (
                <FaEye icon="fa:eye" onClick={eyeOpen} />
              ) : (
                <FaEyeSlash icon="fa:eye-slash" onClick={eyeOpen} />
              )}
            </div>
          </div>
          {/* <div className="relative my-5 w-full">
        <input
          type={open === false ? "password" : "text"}
          autoComplete="off"
          id="password"
          required
          className="border-b py-1 focus:outline-none  lg:focus:border-black focus:border-b-2 peer transition-colors w-full bg-transparent"
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
            Signup
          </button>
        </form>
      )}
    </>
  );
};

export default Register;
