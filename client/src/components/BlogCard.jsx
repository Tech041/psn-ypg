import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogCard = ({ title, text, src }) => {
  return (
    <div className="w-full h-[500px] border bg-gradient-to-br from-green-50 to-yellow-50 overflow-hidden rounded-md mb-4">
      <div className="w-full h-full flex flex-col justify-center gap-2 ">
        <div className="h-[50%] ">
          <img src={src} alt="team" className=" w-full h-full object-cover" />
        </div>
        <div className="h-[50%]">
          <div className="px-3 text-gray-500">
            <h1 className="capitalize text-gray-700 font-semibold py-1">
              {title}
            </h1>
            <p className="text-sm">{text}</p>
            <div className="flex items-center  pt-3  w-full ">
              <Link
                className="w-full flex items-center gap-2 italic text-sm"
                onClick={() => scrollTo(0, 0)}
                to={"/our-blog"}
              >
                <span className="text-green-500">Read More</span>{" "}
                <IoArrowForwardSharp size={15} color="green" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
