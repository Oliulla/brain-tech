import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {logo, name, total, id} = quiz;
    return (
        <div className='h-full bg-[#F0DB4F] flex justify-center items-center 
            mt-12 md:mt-0 text-black shadow-2xl rounded-md shadow-yellow-800'
            data-aos="zoom-in-down"
        >
            <div>
                <div>
                    <img className='w-full' src={logo} alt={name} />
                </div>
                <div className='text-[0.8rem] md:text-sm text-white flex items-center justify-between px-2 md:px-7 rounded-b-md py-4 w-full bg-red-800'>
                    <p>{name}</p>
                    <p>Total Quizes: {total}</p>
                    
                    <Link to={`/quiz/${id}`} className='bg-indigo-900 p-2 rounded-md flex items-center gap-1'>
                        <span>Start Practice</span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5} stroke="currentColor" 
                            className="w-4 h-6"> <path strokeLinecap="round" 
                            strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /> 
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;