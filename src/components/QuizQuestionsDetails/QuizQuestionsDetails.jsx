import React from 'react';
import { ToastContainer } from 'react-toastify';
import Option from '../Option/Option';

const QuizQuestionsDetails = ({quizQuestion, index}) => {
    // console.log(quizQuestion);
    const {question, options} = quizQuestion;
    return (
        <div className='flex flex-col items-start my-14'>
            <ol>
                <li className='text-3xl'>Q-{index+1}: {question.slice(3, -4)}</li>
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