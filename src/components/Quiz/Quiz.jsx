import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {logo, name, total} = quiz;
    return (
        <div className='h-full bg-[#F0DB4F] flex justify-center items-center mt-12 md:mt-0 text-black shadow-2xl rounded-md shadow-yellow-800'>
            <div>
                <div>
                    <img className='w-full' src={logo} alt={name} />
                </div>
                <div className='text-[0.8rem] md:text-sm text-white flex items-center justify-between px-2 md:px-7 rounded-b-md py-4 w-full bg-red-800'>
                    <p>{name}</p>
                    <p>Total Quizes: {total}</p>
                    <button>Start Practice</button>
                </div>
            </div>
        </div>
    );
};

export default Quiz;