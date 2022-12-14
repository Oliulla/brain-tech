import React, { useContext } from 'react';
import headerImg from '../../Images/headerImg.jpg'
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Root/Root';

const Home = () => {
    // get loader data using context
    const quizes = useContext(QuizContext);
    
    return (
        <main className='w-full'>
            <header className='my-8 flex justify-center'>
                <img className='w-10/12 md:w-8/12 h-60' src={headerImg} alt="Quiz Quistion" />
                <p className='text-center absolute top-36 md:text-2xl bg-gray-800 p-4 w-6/12'>
                    Let Raise Your Skills Through Playing Quiz
                </p>
            </header>
            
            <section className="my-12 w-9/12 mx-auto md:grid grid-cols-2 gap-12">
                {
                    quizes.map(quiz => (
                        <Quiz
                            key={quiz.id}
                            quiz={quiz} 
                        />
                    ))
                }
            </section>
        </main>
    );
};

export default Home;