import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionsDetails from '../QuizQuestionsDetails/QuizQuestionsDetails';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData().data.questions;
    
    return (
        <div className='my-20 w-8/12 mx-auto'>
            {
                quizQuestions.map((quizQuestion, index) => (
                    <QuizQuestionsDetails 
                        key={quizQuestion.id}
                        quizQuestion={quizQuestion}
                        index={index}
                    />
                )
                )
            }
        </div>
    );
};

export default QuizQuestions;