import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionsDetails from '../QuizQuestionsDetails/QuizQuestionsDetails';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData().data.questions;
    console.log(quizQuestions);
    return (
        <div className='my-20 w-8/12 mx-auto'>
            {
                quizQuestions.map(quizQuestion => (
                    <QuizQuestionsDetails 
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                    />
                )
                )
            }
        </div>
    );
};

export default QuizQuestions;