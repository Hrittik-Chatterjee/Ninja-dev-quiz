import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { EyeIcon } from "@heroicons/react/24/solid";
import "react-toastify/dist/ReactToastify.css";
import "./quizes.css";

const Quizes = () => {
  const loaderData = useLoaderData();
  const quizesData = loaderData.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(quizesData.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (answer) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = { answerByUser: answer };
    setSelectedOptions(updatedOptions);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion > 0 ? prevQuestion - 1 : 0
    );
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) =>
      prevQuestion < quizesData.length - 1 ? prevQuestion + 1 : prevQuestion
    );
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    selectedOptions.forEach((selected, index) => {
      const correctAnswer = quizesData[index].correctAnswer;
      if (selected && selected.answerByUser === correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  const diffToast = (answer) => {
    const correctAnswer = quizesData[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      toast.success("Your answer is correct", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      toast.warning("Wrong answer", {
        position: "top-center",
      });
    }
  };

  const showCorrectAnswer = () => {
    const correctAnswer = quizesData[currentQuestion].correctAnswer;
    toast(correctAnswer, {
      position: "top-center",
      theme: "dark",
    });
  };

  return (
    <div>
      <h2 className="text-6xl font-bold">{loaderData.name}</h2>
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {quizesData.length}
        </h1>
      ) : (
        <div className="w-full flex justify-center">
          <div className="border-2 border-slate-600 px-12 py-6 mt-6 mb-6 rounded-lg bg-pink-800">
            <div className="flex flex-col items-start w-full">
              <h4 className="mt-10 text-xl text-white/60">
                Question {currentQuestion + 1} of {quizesData.length}
              </h4>
              <div className="mt-4 text-2xl flex text-white">
                {quizesData[currentQuestion].question.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )}
                <EyeIcon
                  onClick={showCorrectAnswer}
                  className="h-6 w-6 text-pink-200 mt-2 ml-4 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              {quizesData[currentQuestion].options.map((answer, index) => (
                <div key={index} onClick={(e) => diffToast(answer)}>
                  <div
                    className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
                    onClick={(e) => handleAnswerOption(answer)}
                  >
                    <input
                      type="radio"
                      name={quizesData[currentQuestion].question}
                      value={answer}
                      checked={
                        selectedOptions[currentQuestion]?.answerByUser ===
                        answer
                      }
                      className="w-6 h-6 bg-black"
                    />
                    <p className="ml-6 text-white">{answer}</p>
                  </div>
                </div>
              ))}
              <ToastContainer />
            </div>

            <div className="flex justify-between w-full mt-4">
              <button
                onClick={handlePrevious}
                className="w-[49%] py-3 bg-slate-800 text-white rounded-lg"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>

              <button
                onClick={
                  currentQuestion === quizesData.length - 1
                    ? handleSubmitButton
                    : handleNext
                }
                className="w-[49%] py-3 bg-slate-800 text-white rounded-lg"
              >
                {currentQuestion === quizesData.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quizes;
