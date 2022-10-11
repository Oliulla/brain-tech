import React, { useState } from 'react';
import './Option.css'

const Option = ({option, quizQuestion}) => {
    const {correctAnswer} = quizQuestion
    const {findCorrect, setFindCorrect} = useState();
    
    const handleFindCorrect = (clickedOption) => {
        // console.log(clickedOption, '||',  correctAnswer)
        const correctOption = correctAnswer.split(' ').join('');
        const userClickedOption = clickedOption.split(' ').join('');
        // console.log(correctAnswer.split(' ').join(''))
        // console.log(clickedOption.split(' ').join(''))
        // const dataChk = clickedOption === correctAnswer;
        if(userClickedOption === correctOption) {
            console.log('correct answere')
        }
        else {
            console.log('incorrect answere')
        }
        // setFindCorrect('False');
        // console.log("Not correct")
    }
    // console.log(findCorrect);

    return (
        <div 
            onClick={(e) => handleFindCorrect(e.target.innerText)}

            className='listSquare border border-emerald-500 mt-8 text-2xl w-11/12 md:w-8/12 
            px-2 py-4 cursor-pointer'
        >
            <p>{option}</p>
        </div>
    );
};

export default Option;