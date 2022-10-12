import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({option, quizQuestion, countCorrect, setCountCorrect}) => {
    const {correctAnswer} = quizQuestion;
    const [checkCorrect, setCheckCorrect] = useState(0);
    
    const handleFindCorrect = (clickedOption) => {
        const correctOption = correctAnswer.split(' ').join(' ');
        console.log(correctOption);
        const userClickedOption = clickedOption.split(' ').join(' ');
        console.log(userClickedOption);
        
        if(userClickedOption === correctOption) {
            toast.success("Correct Answer!", {autoClose: 1200});
            setCheckCorrect(1)

            setCountCorrect(countCorrect + 1);
        }
        else {
            toast.warning('Incorrect Answer', {autoClose: 1200});
            setCheckCorrect(2)
        }
    }

    return (
        <div 
            onClick={(e) => handleFindCorrect(e.target.innerText)}
            className={`border border-emerald-500 
                mt-8 text-2xl w-11/12 md:w-8/12 
                px-2 py-4 cursor-pointer 
                ${checkCorrect === 1 ? 'bg-blue-800' : 
                checkCorrect === 2 ? 'bg-red-600' : 
                'bg-gray-600'} 
            `}
        >
            <p>{option}</p>
        </div>
    );
};

export default Option;