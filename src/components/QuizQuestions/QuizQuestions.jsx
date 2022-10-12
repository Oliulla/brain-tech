import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestionsDetails from '../QuizQuestionsDetails/QuizQuestionsDetails';

const QuizQuestions = () => {
    const loaderData = useLoaderData().data
    const {questions, name} = loaderData;

    const [countCorrect, setCountCorrect] = useState(0);

    return (
        <section className='my-20 w-8/12 mx-auto'>
            <h2 className='md:text-4xl mb-2 text-blue-600 font-bold'>Quiz Of {name}</h2>
            {
                countCorrect ? <p className='rounded-md bg-blue-900 md:w-3/6 px-8 py-4 text-xl md:text-2xl'
                >
                    Total Correct: {countCorrect}
                </p>
                : undefined
            }
            {
                questions.map((quizQuestion, index) => (
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
        </section>
    );
};

export default QuizQuestions;