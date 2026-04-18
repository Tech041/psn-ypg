import { useContext, useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

export default function Dashboard() {
  const [lifetime, setLifetime] = useState(null);
  const [daily, setDaily] = useState([]);
  const [topUrl, setTopUrl] = useState(null);
  const { setDashboardToken, navigate } = useContext(AppContext);

  const fetchUniqueVisitors = async () => {
    try {
      const response = await apiRequest("/api/stats/unique-visitors");
      // console.log("Unique visitors", response);
      if (response.data.success) {
        setLifetime(response.data.allUniqueVisitors);
      }
    } catch (error) {
      toast.error("Failed to fetch unique visitors");
      // console.error("Error fetching unique visitors:", error);
    }
  };

  const fetchDailyVisitors = async () => {
    try {
      const response = await apiRequest("/api/stats/daily");
      // console.log("daily stats", response);

      if (response.data.success) {
        setDaily(response.data.dailyVisitors);
      }
    } catch (error) {
      toast.error("Failed to fetch daily visitors");
      // console.error("Error fetching daily visitors:", error);
    }
  };

  const fetchTopUrl = async () => {
    try {
      const response = await apiRequest("/api/stats/top-url");
      if (response.data.success) {
        setTopUrl(response.data.mostVisitedUrl);
      }
    } catch (error) {
      toast.error("Failed to fetch top URL");
      // console.error("Error fetching top URL:", error);
    }
  };

  useEffect(() => {
    fetchUniqueVisitors();
    fetchDailyVisitors();
    fetchTopUrl();
  }, []);

  //   Dashboard Logout

  const dashboardLogout = async () => {
    try {
      const { data } = await apiRequest.post("/api/auth/super-admin/logout");

      if (data.success) {
        setDashboardToken("");
        localStorage.removeItem("dashboardToken");
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("dashboardToken")) {
      navigate("/dashboard/login");
    }
  }, []);

  return (
    <main className="w-full min-h-screen pt-40">
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="flex gap-4 ">
          <h1 className="text-2xl font-bold mb-6"> Visitor Dashboard</h1>

          {localStorage.getItem("dashboardToken") && (
            <button
              onClick={dashboardLogout}
              className=" h-10 p-2 bg-red-500 text-white rounded-lg"
            >
              Logout
            </button>
          )}
        </div>

        {/* Lifetime Unique Visitors */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">Total Unique Visitors</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {lifetime ?? "Loading..."}
            </p>
          </div>

          {/* Most Visited URL */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">Most Visited URL</h2>
            {topUrl ? (
              <>
                <p className="text-xl font-bold text-green-600 mt-2">
                  {topUrl._id}
                </p>
                <p className="text-sm text-gray-500">{topUrl.visits} visits</p>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>

        {/* Daily Visitors Table */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Daily Unique Visitors</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 border">Day</th>
                  <th className="px-4 py-2 border">Unique Visitors</th>
                </tr>
              </thead>
              <tbody>
                {daily?.length > 0 ? (
                  daily.map((d, idx) => (
                    <tr key={idx} className="hover:bg-gray-100">
                      <td className="px-4 py-2 border">{d.day}</td>
                      <td className="px-4 py-2 border text-center">
                        {d.uniqueVisitorsCount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="px-4 py-2 text-center">
                      Loading...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
