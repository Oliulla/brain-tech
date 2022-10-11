import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionsDetails from '../QuizQuestionsDetails/QuizQuestionsDetails';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData().data.questions;
    const [countCorrect, setCountCorrect] = useState(0);

    return (
        <div className='my-20 w-8/12 mx-auto'>
            {
                countCorrect ? <p className='rounded-md bg-blue-900 md:w-3/6 px-8 py-4 text-xl md:text-2xl'
                >
                    Total Correct: {countCorrect}
                </p>
                : undefined
            }
            {
                quizQuestions.map((quizQuestion, index) => (
                    <QuizQuestionsDetails 
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                        index={index}
                        setCountCorrect={setCountCorrect}
                        countCorrect={countCorrect}
                    />
                )
                )
            }
        </div>
    );
};

export default QuizQuestions;