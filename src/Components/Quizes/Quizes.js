import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'
import 'react-toastify/dist/ReactToastify.css';
import './quizes.css'

const Quizes = () => {
  const loaderData = useLoaderData()
  const quizesData = loaderData.data.questions
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
        // eslint-disable-next-line no-loop-func
        (answerr) =>
          quizesData[currentQuestion].correctAnswer && answerr === selectedOptions[i].answerByUser &&
          (newScore++)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

 

  const diffToast = () => {


    for (let i = 0; i < selectedOptions.length; i++) {

      if (quizesData[currentQuestion].correctAnswer === selectedOptions[i].answerByUser) {
        toast.success('Your answer is correct', {
          position: 'top-center',
          theme: 'colored'
        })
      }else{
        toast.warning('Wrong answer',{
          position: 'top-center'
        })
      }

    }

  }

  const showCorrectAnswer = () => {
    toast(quizesData[currentQuestion].correctAnswer, {
      position: 'top-center',
      theme: 'dark'
    })
  }



  return (

    <div>

      <h2 className='text-6xl font-bold'>{loaderData.data.name}</h2>
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-white">
          You scored {score} out of {quizesData.length}
        </h1>
      ) : (

        <div className='w-full flex justify-center  '>
          <div className='border-2 border-slate-600 px-12 py-6 mt-6 mb-6 rounded-lg bg-pink-800'>

            <div className="flex flex-col items-start w-full">
              <h4 className="mt-10 text-xl text-white/60">
                Question {currentQuestion + 1} of {quizesData.length}
              </h4>
              <div className="mt-4 text-2xl flex text-white">
                {quizesData[currentQuestion].question.replace(/(<([^>]+)>)/ig, "")}
                <EyeIcon onClick={showCorrectAnswer} className="h-6 w-6 text-pink-200 mt-2 ml-4" />

              </div>
            </div>

            
              <div className="flex flex-col w-full">
                {quizesData[currentQuestion].options.map((answer, index) => (

                  <div  key={index} onClick={diffToast}>
                    <div
                     
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
                  </div>

                ))}
                <ToastContainer />
              </div>

              <div className="flex justify-between w-full mt-4">
                <button
                  onClick={handlePrevious}
                  className="w-[49%] py-3 bg-slate-800 text-white rounded-lg"
                >
                  Previous
                </button>

                <button
                  onClick={
                    currentQuestion + 1 === quizesData.length ? handleSubmitButton : handleNext
                  }
                  className="w-[49%] py-3 bg-slate-800 text-white rounded-lg"
                >
                  {currentQuestion + 1 === quizesData.length ? "Submit" : "Next"}
                </button>


              </div>

            </div>
          </div>
      )}

        </div>



      )
      };



      export default Quizes;