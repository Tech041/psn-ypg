import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

// Dynamic imports.
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const PostJobs = React.lazy(() => import("./pages/PostJobs"));
const Jobs = React.lazy(() => import("./pages/Jobs"));
const SingleJob = React.lazy(() => import("./pages/SingleJob"));
const WhyUs = React.lazy(() => import("./pages/WhyUs"));
const OurBlog = React.lazy(() => import("./pages/OurBlog"));
const About = React.lazy(() => import("./pages/About"));
const Internships = React.lazy(() => import("./pages/Internships"));
const RevisionQuestions = React.lazy(() => import("./pages/RevisionQuestions"));

const App = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/post-jobs" element={<PostJobs />} />
        <Route path="/job-details/:id" element={<SingleJob />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/our-blog" element={<OurBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/revision-questions" element={<RevisionQuestions />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
