import React from 'react';
import Option from '../Option/Option';

const QuizQuestionsDetails = ({quizQuestion}) => {
    // console.log(quizQuestion);
    const {question, options} = quizQuestion;
    return (
        <div className='flex flex-col items-start my-14'>
            <ol start={1}>
                <li className='text-3xl'>{question.slice(3, -4)}</li>
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
        </div>
    );
};

export default QuizQuestionsDetails;