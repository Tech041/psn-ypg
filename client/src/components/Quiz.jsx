import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const current = questions[currentIndex];

  const handleOptionClick = (i) => {
    setSelected(i);
    setShowExplanation(true);

    if (i === current?.correctAnswerIndex) {
      toast.success("✅ Correct!", {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error("❌ Incorrect!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleToggleExplanation = () => {
    setShowExplanation((prev) => !prev);
  };

  const handleNext = () => {
    setSelected(null);
    setShowExplanation(false);
    setCurrentIndex((prev) => Math.min(prev + 1, questions?.length - 1));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <ToastContainer />
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* <h2 className="text-xl font-semibold mb-4">
          Question {currentIndex + 1} of {questions?.length}
        </h2> */}

        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800">
            {current?.question}
          </p>
        </div>

        <ul className="space-y-3">
          {current?.options?.map((option, i) => {
            const isCorrect = i === current?.correctAnswerIndex;
            const isSelected = i === selected;

            let base = "px-4 py-2 rounded-lg cursor-pointer border transition";
            let style = "border-gray-300 bg-gray-50 hover:bg-blue-100";

            if (showExplanation) {
              if (isSelected && isCorrect) {
                style = "bg-green-100 border-green-500 text-green-800";
              } else if (isSelected && !isCorrect) {
                style = "bg-red-100 border-red-500 text-red-800";
              } else if (isCorrect) {
                style = "bg-green-50 border-green-400 text-green-700";
              }
            } else if (isSelected) {
              style = "bg-blue-100 border-blue-400";
            }

            return (
              <li
                key={i}
                className={`${base} ${style}`}
                onClick={() => handleOptionClick(i)}
              >
                {option}
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleToggleExplanation}
            disabled={selected === null}
            className={`px-4 py-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition ${
              selected === null ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === questions?.length - 1}
            className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
              currentIndex === questions?.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {currentIndex === questions?.length - 1 ? "Finish" : "Next ➡"}
          </button>
        </div>

        {showExplanation && (
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Explanation:</strong> {current?.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
