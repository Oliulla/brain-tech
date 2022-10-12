import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Root/Root';

const QuizTopics = () => {
    const quizes = useContext(QuizContext);
    
    return (
        <div>
            <h2 className='md:text-3xl font-semibold mx-auto text-center mt-4 md:my-8 border-b border-blue-500 w-2/3'>
                Practice More On This Technologies
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 w-9/12 mx-auto gap-10 mt-0 md:my-10'>
            {
                quizes.map(quiz => < Quiz 
                    key={quiz.id}
                    quiz={quiz}
                />)
            }
            </div>
        </div>
    );
};

export default QuizTopics;