import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <img
        src="/ypg_logo.webp"
        alt="logo"
        width={60}
        height={60}
        onClick={() => {
          navigate("/"), scrollTo(0, 0);
        }}
        className="cursor-pointer text-blue-600 font-semibold"
      />
    </div>
  );
};

export default Logo;
