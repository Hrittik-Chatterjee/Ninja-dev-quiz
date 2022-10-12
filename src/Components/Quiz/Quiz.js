import React from 'react';

const Quiz = () => {
    return (
        <div className='border-black border-2 h-40 w-80 justify-items-end ml-96 mt-20'>
                <p className='text-black font-bold text-2xl'>Here is the Question?</p>
            <div className="">
                
                <div className="flex items-center mr-4">
                    <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">Inline 1</label>
                </div>
                <div className="flex items-center mr-4">
                    <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">Inline 2</label>
                </div>
                <div className="flex items-center mr-4">
                    <input checked="" id="inline-checked-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-black">Inline checked</label>
                </div>
                <div className="flex items-center">
                    <input disabled="" id="inline-disabled-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-black focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="inline-disabled-radio" className="ml-2 text-sm font-medium text-gray-400 dark:text-black">Inline disabled</label>
                </div>
            </div>

        </div>
    );
};

export default Quiz;