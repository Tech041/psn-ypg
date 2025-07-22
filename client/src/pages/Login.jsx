import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import apiRequest from "../utils/apiRequest";

const loginSchema = z.object({
  password: z.string().min(6, { message: "Password must be 6 chars min" }),
});

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmitHandler = async (loginData) => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await apiRequest.post("/api/auth/login", loginData);
      if (data.success) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        reset();
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen  bg-white pt-20  ">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="w-96">
            <div className="bg-green-600 p-10 rounded-lg shadow-lg w-full  text-white text-sm">
              <h2 className="text-3xl text-white text-center mb-3 font-semibold">
                Login
              </h2>
              <p className="text-center text-sm mb-6">Admin account</p>
              <form onSubmit={handleSubmit(onSubmitHandler)} className="">
                <div className="mb-4">
                  <div className=" flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-white">
                    <img src={assets.lock_icon} alt="lock_icon" className="" />
                    <input
                      {...register("password")}
                      type="password"
                      className="bg-white outline-none text-black w-full"
                      placeholder="Password"
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-center">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-green-500 to-yellow-500 text-white font-medium"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
