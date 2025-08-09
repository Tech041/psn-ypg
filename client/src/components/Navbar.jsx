import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import NavbarLinks from "./NavbarLinks";
import Logo from "./Logo";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const { navigate, token, setToken } = useContext(AppContext);

  const logout = async () => {
    try {
      const { data } = await apiRequest.post("/api/auth/logout");

      if (data.success) {
        setToken("");
        localStorage.removeItem("token");
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <header className=" fixed w-full h-[100px]  flex items-center  bg-gradient-to-tr from-white to bg-green-50 z-20 ">
      <div className="container">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <Logo />
          <div className="hidden md:flex justify-center items-center ">
            <NavbarLinks />
          </div>
          {/* Mobile menu */}
          <div
            className={` block md:hidden w-[70%] h-screen absolute z-30 bg-green-50 top-0 transition-all duration-500 ease-in-out ${
              open ? "right-0" : "right-[-100%]"
            }`}
          >
            <nav className=" mt-10 pt-10 flex justify-center">
              <ul className="flex flex-col justify-center items-center gap-6 font-bold">
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/about"}>About</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/jobs"}>Jobs</Link>
                </li>
                <li
                  onClick={() => {
                    setOpen((prev) => !prev), scrollTo(0, 0);
                  }}
                  className=""
                >
                  <Link to={"/internships"}>Internships</Link>
                </li>
                {token && (
                  <li
                    onClick={() => {
                      setOpen((prev) => !prev), scrollTo(0, 0);
                    }}
                    className=""
                  >
                    <Link to={"/post-jobs"}>Post Jobs</Link>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {token ? (
              <div className="h-5 flex justify-center items-center cursor-pointer  text-blue-700 rounded-md  relative group">
                <div className="absolute  top-0 right-0 z-10 text-black rounded ">
                  <ul className="list-none m-0 px-2 bg-gray-100 text-sm">
                    <li
                      onClick={logout}
                      className="py-1 px-2 hover:bg-gray-200 text-red-600 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center  ">
                <button
                  onClick={() => {
                    navigate("/login"), scrollTo(0, 0);
                  }}
                  className="flex items-center gap-2   px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                >
                  Admin{" "}
                  <img
                    src={assets.arrow_icon}
                    alt="arrow_icon"
                    className="w-2"
                  />
                </button>
              </div>
            )}
            <div
              onClick={handleToggle}
              className="block md:hidden z-40 cursor-pointer "
            >
              {open ? (
                <IoMdClose color="green" size={30} />
              ) : (
                <GiHamburgerMenu color="green" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
