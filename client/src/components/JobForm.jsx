import React, { useContext } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
const JobFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  salary: z.string().min(1, { message: "Salary is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  requirements: z.string().min(1, { message: "Requirements is required" }),
  facility: z.string().min(1, { message: "Facility Name is required" }),
  contact: z
    .string()
    .min(1, { message: "Contact is required" }),
});
const JobForm = () => {
  const { token } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JobFormSchema),
  });

  const handleSubmitJobForm = async (job) => {
    try {
      const { data } = await apiRequest.post("/api/post-job", job, {
        headers: { token },
      });

      if (data.success) {
        toast.success(data.message);
        reset();
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center pt-10 mb-5">
      <div className="container">
        <div className="mt-5">
          <form
            onSubmit={handleSubmit(handleSubmitJobForm)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="w-full flex flex-col">
              <input
                {...register("title")}
                type="text"
                name="title"
                placeholder="Job Title"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.title && (
                <p className="text-red-600">{errors.title.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("salary")}
                type="text"
                name="salary"
                placeholder="Salary"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.salary && (
                <p className="text-red-600">{errors.salary.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <input
                {...register("location")}
                type="text"
                name="location"
                placeholder="Location"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.location && (
                <p className="text-red-600">{errors.location.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col">
              <textarea
                {...register("contact")}
                type="text"
                name="contact"
                placeholder="Contact"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.contact && (
                <p className="text-red-600">{errors.contact.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col md:col-span-2">
              <textarea
                {...register("requirements")}
                name="requirements"
                placeholder="Requirements"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.requirements && (
                <p className="text-red-600">{errors.requirements.message}</p>
              )}
            </div>
            <div className="w-full flex flex-col md:col-span-2">
              <textarea
                {...register("facility")}
                name="facility"
                placeholder="Facility Name"
                className="border rounded px-3 py-2 w-full"
              />
              {errors.facility && (
                <p className="text-red-600">{errors.facility.message}</p>
              )}
            </div>

            <div className="w-full md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded w-full"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
