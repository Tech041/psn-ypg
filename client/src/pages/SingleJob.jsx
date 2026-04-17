import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";
import { formatDistanceToNow } from "date-fns";

const spanStyle = "font-semibold text-lg py-2";

const SingleJob = () => {
  const { jobs, deleteJob, token } = useContext(AppContext);
  const { id } = useParams();
  const [jobItem, setJobItem] = useState(null);

  useEffect(() => {
    if (jobs.length > 0) {
      const foundJob = jobs.find((job) => job._id === id);
      setJobItem(foundJob);
    }
  }, [jobs, id]);

  if (!jobItem) {
    return <Spinner />;
  }

  return (
    <section className="w-full min-h-screen bg-gray-50  pt-20">
      <div className="container max-w-3xl mx-auto pt-10 px-4  pb-10">
        {/* Motivational Header */}
        <header className="text-center mb-10">
          <h1 className="text-green-600 italic text-xl font-semibold">
            We wish you well in your job hunt, Goodluck!!!
          </h1>
        </header>

        {/* Job Card */}
        <div className="bg-green-50 shadow-lg rounded-xl p-8 border border-green-500">
          {/* Job Title */}
          <h2 className="text-3xl  capitalize font-bold text-gray-800 mb-6">
            {jobItem.title}
          </h2>

          {/* Job Details */}
          <div className="space-y-4 text-gray-700">
            <p>
              <span className={spanStyle}>💰 Salary:</span> ₦{jobItem.salary}
            </p>
            <p>
              <span className={spanStyle}>📋 Requirements:</span>{" "}
              {jobItem.requirements}
            </p>
            <p>
              <span className={spanStyle}>🏢 Facility:</span> {jobItem.facility}
            </p>
            <p>
              <span className={spanStyle}>📞 Contact:</span> {jobItem.contact}
            </p>
            <p>
              <span className={spanStyle}>⏳ Posted:</span>{" "}
              {formatDistanceToNow(new Date(jobItem.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>

          {/* Delete Button */}
          {token && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => deleteJob(jobItem._id)}
                className="bg-red-600 hover:bg-red-500 text-white px-6 py-2 rounded-lg shadow-md transition"
              >
                Delete Job
              </button>
            </div>
          )}
        </div>

        {/* Back Link */}
        <div className="flex items-center justify-center mt-10">
          <Link
            to={jobItem.category === "internships" ? "/internships" : "/jobs"}
            className="text-blue-600 font-medium hover:underline"
          >
            {jobItem.category === "internships"
              ? "← View all Internships"
              : "← View all Jobs"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SingleJob;
