import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Tracker() {
  const location = useLocation();

  useEffect(() => {
    let visitorId = localStorage.getItem("visitorId");
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem("visitorId", visitorId);
    }

    fetch("http://localhost:8000/api/ypg-track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        visitorId: visitorId,
        url: location.pathname, // React Router path
        timestamp: new Date().toISOString(),
      }),
    });
  }, [location]); // runs every time the route changes

  return null; // nothing to render
}

export default Tracker;
