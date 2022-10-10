import React from 'react';
import headerImg from '../../Images/headerImg.jpg'

const Home = () => {
    return (
        <main>
            <header className='my-8 flex justify-center'>
                <img className='w-10/12 md:w-8/12 h-60' src={headerImg} alt="Quiz Quistion" />
                <p className='text-center hidden md:block md:absolute top-36 text-3xl bg-gray-800 p-4 w-6/12'>Let's Burn Your Skills Through Playing Quiz</p>
            </header>
            <section>

            </section>
        </main>
    );
};

export default Home;