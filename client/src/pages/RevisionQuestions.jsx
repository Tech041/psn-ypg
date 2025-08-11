import React, { useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";
import Quiz from "../components/Quiz";
import Spinner from "../components/Spinner";

const RevisionQuestions = () => {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const { data } = await apiRequest.get("/api/questions");
      if (data.success) {
        setQuiz(data.questions);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <section className=" min-h-screen w-full">
      <div className="container">
        <div className="mt-20 pt-20">
          <h2 className="text-center text-base text-gray-600 mt-8">
            This
            <span className="font-semibold text-blue-600 px-1">
              BrainTeaze
            </span>{" "}
            is powered by{" "}
            <span className="font-bold text-gray-800">NELTECH</span>, the
            official partner of
            <span className="text-green-600 font-medium px-1">
              PSN-YPG Lagos Chapter.
            </span>
            Visit us at :
            <a
              href="https://neltech.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 px-1"
            >
              https://neltech.onrender.com
            </a>
          </h2>
          {loading ? <Spinner /> : <Quiz questions={quiz} />}
        </div>
      </div>
    </section>
  );
};

export default RevisionQuestions;
