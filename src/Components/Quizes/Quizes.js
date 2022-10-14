import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './quizes.css'

const Quizes = () => {
  const loaderData = useLoaderData()
  const quizesData = loaderData.data.questions
  // const { options, question,correctAnswer } = quizesData
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);


  const handleAnswerOption = (answer) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };


  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < quizesData.length && setCurrentQuestion(nextQues);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < quizesData.length; i++) {
      quizesData[i].options.map(
        (answer) =>
          quizesData[i].correctAnswer &&
          answer[i] === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };
  



  console.log(quizesData[1].correctAnswer)
  return (
    
    <div> 

      <h2>{loaderData.data.name}</h2>
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {quizesData.length}
        </h1>
      ) : (
        <>

      
      <div className="flex flex-col items-start w-full">
        <h4 className="mt-10 text-xl text-white/60">
          Question {currentQuestion + 1} of {quizesData.length}
        </h4>
        <div className="mt-4 text-2xl text-white">
          {quizesData[currentQuestion].question.replace(/(<([^>]+)>)/ig,"")}
        </div>
      </div>


      <div className="flex flex-col w-full">
        {quizesData[currentQuestion].options.map((answer, index) => (
          <div
            key={index}
            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
            onClick={(e) => handleAnswerOption(answer)}
          >
            <input type="radio" name={answer}
              value={answer}
              onChange={(e) => handleAnswerOption(answer)}
              checked={
                answer === selectedOptions[currentQuestion]?.answerByUser
              } className="w-6 h-6 bg-black" />
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
          onClick={
            currentQuestion + 1 === quizesData.length ? handleSubmitButton : handleNext
          }
          className="w-[49%] py-3 bg-indigo-600 rounded-lg"
        >
          {currentQuestion + 1 === quizesData.length ? "Submit" : "Next"}
        </button>


      </div>
        
      </> 
      )} 
           </div> 
    
  )
};



export default Quizes;