import React, { useState, useEffect, useContext } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { formatDistanceToNow } from "date-fns";

import Spinner from "./Spinner";
import { AppContext } from "../context/AppContext";

const spanStyle = "font-semibold text-lg py-2";

const JobList = () => {
  const {
    jobIsLoading,
    jobItem,
    search,
    jobs,
    listed,
    setListed,
    fetchAllJobs,
    setJobItem,
    deleteJob,
    token,
  } = useContext(AppContext);

  const [openAccordionId, setOpenAccordionId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const handleJobId = (item) => {
    setJobItem(item);
  };

  const toggleAccordion = (id) => {
    setOpenAccordionId((prevId) => (prevId === id ? null : id));
  };

  const filteredPost = async () => {
    let postCopy = !jobIsLoading && jobs?.slice();
    if (search) {
      postCopy = postCopy?.filter((item) =>
        item?.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setListed(postCopy.reverse());
    setCurrentPage(1); // Reset to first page on search
  };

  useEffect(() => {
    filteredPost();
  }, [search, jobs]);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = listed?.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(listed?.length / jobsPerPage);

  const PaginationControls = () => (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-green-500 text-white" : "bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );

  return (
    <section className="w-full h-full">
      <div className="container">
        {/* Desktop view */}
        {jobIsLoading ? (
          <Spinner />
        ) : (
          <div className="hidden md:block pb-4">
            <div className="flex justify-between gap-4">
              {/* Job list */}
              <div className="flex-1 max-h-screen overflow-y-auto md:border-r-2">
                {currentJobs &&
                  currentJobs.map((item) => (
                    <div
                      onClick={() => handleJobId(item)}
                      key={item._id}
                      className={`my-3 py-2 px-2 hover:cursor-pointer ${
                        jobItem?._id === item._id
                          ? "bg-gray-100 border-l-2 border-green-500"
                          : ""
                      }`}
                    >
                      <div className="text-green-800 font-semibold">
                        {item?.title}
                      </div>
                      <div className="italic text-sm text-gray-500">
                        ₦ {item?.salary}
                      </div>
                    </div>
                  ))}
              </div>

              {/* Job details */}
              <div className="flex-1 max-h-screen overflow-y-auto">
                {jobItem && (
                  <div className="mt-5">
                    <div>
                      <span className={spanStyle}>Job Title:</span>{" "}
                      {jobItem.title}
                    </div>
                    <div>
                      <span className={spanStyle}>Salary:</span>{" "}
                      {jobItem.salary}
                    </div>
                    <div>
                      <span className={spanStyle}>Requirements:</span>{" "}
                      {jobItem.requirements}
                    </div>
                    <div>
                      <span className={spanStyle}>Facility:</span>{" "}
                      {jobItem.facility}
                    </div>

                    <div>
                      <span className={spanStyle}>Contact:</span>{" "}
                      {jobItem.contact}
                    </div>
                    <div>
                      <span className={spanStyle}>Posted:</span>{" "}
                      {formatDistanceToNow(new Date(jobItem.createdAt), {
                        addSuffix: true,
                      })}
                    </div>
                    {token && (
                      <div className="mt-4 pt-4 flex justify-center mb-4">
                        <button
                          onClick={() => deleteJob(jobItem._id)}
                          className="bg-blue-600 hover:bg-blue-400 text-white px-4 py-2 rounded-md"
                        >
                          Delete Job
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <PaginationControls />
          </div>
        )}

        {/* Mobile view */}
        {jobIsLoading ? (
          <Spinner />
        ) : (
          <div className="block md:hidden">
            {currentJobs &&
              currentJobs.map((item) => (
                <div key={item._id} className="border-b">
                  <div
                    className="p-4 flex justify-between items-center my-2 cursor-pointer"
                    onClick={() => toggleAccordion(item._id)}
                  >
                    <div>
                      <div className="font-semibold text-green-700">
                        {item.title}
                      </div>
                    </div>
                    <span>
                      {openAccordionId === item._id ? (
                        <IoChevronDownOutline size={15} />
                      ) : (
                        <FaAngleUp size={15} />
                      )}
                    </span>
                  </div>

                  {openAccordionId === item._id && (
                    <div className="p-4 bg-white text-sm space-y-1">
                      <div>
                        <span className={spanStyle}>Job Title:</span>{" "}
                        {item.title}
                      </div>
                      <div>
                        <span className={spanStyle}>Salary:</span> {item.salary}
                      </div>
                      <div>
                        <span className={spanStyle}>Requirements:</span>{" "}
                        {item.requirements}
                      </div>
                      <div>
                        <span className={spanStyle}>Facility:</span>{" "}
                        {item.facility}
                      </div>

                      <div>
                        <span className={spanStyle}>Contact:</span>{" "}
                        {item.contact}
                      </div>
                      <div>
                        <span className={spanStyle}>Posted:</span>{" "}
                        {formatDistanceToNow(new Date(item.createdAt), {
                          addSuffix: true,
                        })}
                      </div>
                      {token && (
                        <div className="mt-2 text-center">
                          <button
                            onClick={() => deleteJob(item._id)}
                            className="bg-blue-600 hover:bg-blue-400 text-white px-3 py-2 rounded"
                          >
                            Delete Job
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            <PaginationControls />
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;
