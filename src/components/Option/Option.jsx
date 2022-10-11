import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Option.css'

const Option = ({option, quizQuestion}) => {
    const {correctAnswer} = quizQuestion;
    
    const handleFindCorrect = (clickedOption) => {
        const correctOption = correctAnswer.split(' ').join('');
        const userClickedOption = clickedOption.split(' ').join('');
        
        if(userClickedOption === correctOption) {
            toast.success("Correct Answer!", {autoClose: 900});
        }
        else {
            toast.warning('Incorrect Answer', {autoClose: 900});
        }
    }

    return (
        <div 
            onClick={(e) => handleFindCorrect(e.target.innerText)}
            className={`listSquare border border-emerald-500 mt-8 text-2xl w-11/12 md:w-8/12 
            px-2 py-4 cursor-pointer`}
        >
            <p>{option}</p>
        </div>
    );
};

export default Option;