import React from 'react';
import { Link } from 'react-router-dom';




const Topic = ({topic}) => {
      const {name,logo,total,id} = topic  
        
    return (
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-65 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">Total Quizes: {total}</p>
                    </div>
                    <button  type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"><Link rel="noopener noreferrer" to={`/quizes/${id}`}>Start Quiz</Link></button>
                </div>
            </div>
    
    );
};

export default Topic;