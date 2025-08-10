import { FaInstagram } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const Footer = () => {
  const { token } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <footer className="bg-black  text-white h-full" id="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center  gap-14  text-sm">
          <div className="">
            <div className="">
              <div
                onClick={() => {
                  navigate("/"), scrollTo(0, 0);
                }}
                className="p-2"
              >
                <img
                  src="/ypg_logo.webp"
                  alt=""
                  className="w-[60px] h-[60px] rounded-md "
                />
              </div>
            </div>
          </div>
          <div className="">
            <p className=" capitalize text-xl font-medium  pt-5 text-gray-300 ">
              PSN-YPG Lagos Chapter
            </p>
            <ul className="flex flex-col gap-1 text-gray-400">
              <li className="cursor-pointer py-1">
                <Link onClick={() => scrollTo(0, 0)} to={"/"} className="">
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link to={"/about"} onClick={() => scrollTo(0, 0)} className="">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className=" capitalize text-xl font-medium pt-5  text-gray-300 ">
              For Pharmacists
            </p>
            <div className="">
              <div className="flex  items-center ">
                <ul className="flex flex-col gap-1 text-gray-400">
                  <li className="cursor-pointer py-1">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/jobs"}
                      className=""
                    >
                      Browse Jobs
                    </Link>
                  </li>
                  <li className="cursor-pointer py-1">
                    <Link
                      onClick={() => scrollTo(0, 0)}
                      to={"/internships"}
                      className=""
                    >
                      Internships
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {token && (
            <div className="">
              <p className=" capitalize text-xl font-medium  text-gray-300 ">
                For Admin
              </p>
              <div className="">
                <div className="flex  items-center ">
                  <ul className="flex flex-col gap-1 text-gray-400">
                    <li className="cursor-pointer py-1">
                      <Link
                        onClick={() => scrollTo(0, 0)}
                        to={"/post-jobs"}
                        className=""
                      >
                        Post Job
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="py-4">
          <p className=" capitalize text-xl font-medium mb-5 text-gray-300 ">
            Contact Us
          </p>
          <div className="">
            <div className="flex  items-center ">
              <div className="flex items-center justify-center gap-3 ">
                <div className="">
                  <a
                    href="https://www.instagram.com/psnypg_lagos?igsh=MTB3Ym1xdTRmemV2bw%3D%3D&utm_source=qr"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <FaInstagram size={20} color="white" />
                    </span>
                  </a>
                </div>
                <div className="">
                  <a
                    href="https://twitter.com/psnypg_lagos?s=21&t=B9hakgcNqa93fslJ3hodeg"
                    target="_blank"
                    className=""
                  >
                    <span className="">
                      <RiTwitterXLine size={20} color="white" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-center py-1">Visit our official website</p>

          <a
            href="https://psnypglagos.org"
            target="_blank"
            className="text-center block text-blue-500 underline pb-2"
          >
            https://psnypglagos.org
          </a>
        </div>
        <div className="">
          <hr className="" />
          <p className="py-5 text-xs  text-center  ">
            Copyright &copy;PSN-YPG Lagos {new Date().getFullYear()} <br />
            <span className="">Powered By Neltech.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
