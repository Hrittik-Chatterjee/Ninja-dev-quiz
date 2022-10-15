import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          quizesData[i].correctAnswer && answer  === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };
  
  const diffToast =() =>{
    
    
        // if(quizesData[currentQuestion].correctAnswer=== selectedOptions.answerByUser)
        // {
        //   toast('correct answer',{
        //     position:'top-center'})
        //   }else{
        //     toast('wrong answer')
        //   }
        // quizesData[currentQuestion].correctAnswer=== selectedOptions[0]?.answerByUser?  toast('correct answer',{position:'top-center'}) : toast('wrong answer')
        // toast('nothing is better then this')

        for (let i = 0; i < selectedOptions.length; i++) {
         
            if( quizesData[currentQuestion].correctAnswer  === selectedOptions[i].answerByUser){
                  toast.success('correct answer',{
                    position:'top-center',
                    theme:'colored'
                  })
                  }
            
        }
    
  }

 
console.log(quizesData[currentQuestion].correctAnswer)
console.log(selectedOptions)



  console.log(quizesData[1].correctAnswer)
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
            <p className="ml-6 text-white" onClick={diffToast}>{answer}</p>
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