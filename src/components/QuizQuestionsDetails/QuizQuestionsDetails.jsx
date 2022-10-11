import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Option from '../Option/Option';

const QuizQuestionsDetails = ({quizQuestion, index, countCorrect, setCountCorrect}) => {
    const [correct, setCorrect] = useState();
    const {question, correctAnswer, options} = quizQuestion;

    const handleShowCorrectAnswere = () => {
        setCorrect(correctAnswer)
    }

    return (
        <div className='flex flex-col items-start my-14'>
            <ol>
                <li className='text-3xl'>Q-{index+1}: {question.slice(3, -4)}</li>
                <button 
                    onClick={handleShowCorrectAnswere}
                    className='bg-blue-900 mt-2 p-2 rounded-md flex items-center gap-4'
                >
                    <span>Show Correct Answer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                </button>
                <p className={`bg-gray-700 md:w-9/12 p-4 rounded-md mt-2 md:text-xl ${correct ? 'block' : 'hidden'}`}>{correct}</p>
            </ol>
            {
                options.map((option, idx) => 
                    <Option
                        key={idx} 
                        option={option}
                        quizQuestion={quizQuestion}
                        countCorrect={countCorrect}
                        setCountCorrect={setCountCorrect}
                    />
                )
            }
            <ToastContainer />
        </div>
    );
};

export default QuizQuestionsDetails;