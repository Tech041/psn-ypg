import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobIsLoading, setJobIsLoading] = useState(true);
  const [jobItem, setJobItem] = useState(null);
  const [search, setSearch] = useState("");
  const [listed, setListed] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const navigate = useNavigate();
  // apply for jobs
  const deleteJob = async (id) => {
    try {
      const { data } = await apiRequest.delete(`/api/job/delete/${id}`, {
        headers: { token },
      });
      if (data.success) {
        toast.success(data.message);
        navigate("/jobs");
        fetchAllJobs();
        setLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error);
    }
  };

  // fetch all jobs
  const fetchAllJobs = async () => {
    const { data } = await apiRequest.get("/api/fetch-jobs");
    if (data.success) {
      setJobs(data.allJobs);
      setJobIsLoading(false);
      setJobItem(data.allJobs[data.allJobs.length-1]); // Default to first job
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  const value = {
    token,
    setToken,
    listed,
    setListed,
    search,
    setSearch,
    deleteJob,
    jobIsLoading,
    jobItem,
    setJobItem,
    jobs,
    loading,
    fetchAllJobs,
    navigate,
    isLoading,
    setIsLoading,
    userData,
    setUserData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
