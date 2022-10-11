import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

export const QuizContext = createContext();

const Root = () => {
    const quizes = useLoaderData().data;
    
    return (
        <QuizContext.Provider value={quizes}>
            <Nav />
            <Outlet />
            <Footer />
        </QuizContext.Provider>
    );
};

export default Root;