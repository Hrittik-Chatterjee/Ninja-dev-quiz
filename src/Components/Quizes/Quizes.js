import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './quizes.css'

const Quizes = () => {
  const loaderData = useLoaderData()
  const quizesData = loaderData.data.questions
  const { options, question } = quizesData
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < quizesData.length && setCurrentQuestion(nextQues);
  };



  console.log(quizesData)
  return (
    <div>
      <div className="flex flex-col items-start w-full">
        <h4 className="mt-10 text-xl text-white/60">
          Question {currentQuestion + 1} of {quizesData.length}
        </h4>
        <div className="mt-4 text-2xl text-white">
          {quizesData[currentQuestion].question}
        </div>
      </div>


      <div className="flex flex-col w-full">
        {quizesData[currentQuestion].options.map((answer, index) => (
          <div
            key={index}
            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
          >
            <input type="radio" className="w-6 h-6 bg-black" />
            <p className="ml-6 text-white">{answer}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between w-full mt-4 text-white">
        <button
          onClick={handlePrevious}
          className="w-[49%] py-3 bg-indigo-600 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="w-[49%] py-3 bg-indigo-600 rounded-lg"
        >
          Next
        </button>

      </div>



      <h2>this is quizes</h2>


    </div>
  );
};

export default Quizes;