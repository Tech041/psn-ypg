import React from "react";


const JobHeader = ({ setSearch }) => {
  return (
    <section className="w-full h-full pt-10 flex  justify-center my-3">
      <div className="container">
        <h1 className="uppercase text-yellow-700 text-xl md:text-3xl font-semibold text-center">
          one search, millions of jobs
        </h1>
        <div className="flex flex-col items-center justify-center w-full  mt-5">
          <div className="w-[80%]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by title "
              className="placeholder:text-base placeholder:capitalize px-6 py-3 border border-gray-500 w-full rounded-md"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default JobHeader;
