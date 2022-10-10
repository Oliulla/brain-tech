import React from 'react';
import { useLoaderData } from 'react-router-dom';
import headerImg from '../../Images/headerImg.jpg'
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes)
    return (
        <main className='w-full'>
            <header className='my-8 flex justify-center'>
                <img className='w-10/12 md:w-8/12 h-60' src={headerImg} alt="Quiz Quistion" />
                <p className='text-center hidden md:block md:absolute top-36 text-2xl bg-gray-800 p-4 w-6/12'>Let Burn Your Skills Through Playing Quiz</p>
            </header>
            <section className="my-12 w-9/12 mx-auto md:grid grid-cols-2 gap-12">
                {
                    quizes.map(quiz => (
                        <Quiz
                            key={quiz.id}
                            quiz={quiz} 
                        />
                    ) 
                    )
                }
            </section>
        </main>
    );
};

export default Home;