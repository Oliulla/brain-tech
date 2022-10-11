import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Option from '../Option/Option';

const QuizQuestionsDetails = ({quizQuestion, index}) => {
    const {question, correctAnswer, options} = quizQuestion;
    const [correct, setCorrect] = useState();

    const handleShowCorrectAnswere = () => {
        setCorrect(correctAnswer)
    }
    console.log(correct)

    return (
        <div className='flex flex-col items-start my-14'>
            <ol>
                <li className='text-3xl'>Q-{index+1}: {question.slice(3, -4)}</li>
                <button 
                    onClick={handleShowCorrectAnswere}
                    className='bg-blue-900 mt-2 p-2 rounded-md'
                >
                    Show Correct Answer
                </button>
                <p className={`bg-gray-700 md:w-9/12 p-4 rounded-md mt-2 md:text-xl ${correct ? 'block' : 'hidden'}`}>{correct}</p>
            </ol>
            {
                options.map(option => 
                    <Option
                        key={option.id} 
                        option={option}
                        quizQuestion={quizQuestion}
                    />
                )
            }
            <ToastContainer />
        </div>
    );
};

export default QuizQuestionsDetails;