import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData().data.questions;
    console.log(quizQuestions);
    return (
        <div>
            <h2>Quiz questions here</h2>
            {
                quizQuestions.map(quizQuestion => <p key={quizQuestion.id}>{quizQuestion.question}</p>)
            }
        </div>
    );
};

export default QuizQuestions;