import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

export const QuizContext = createContext();

const Root = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes)
    return (
        <QuizContext.Provider value={quizes}>
            <Nav />
            <Outlet />
            <Footer />
        </QuizContext.Provider>
        // <QuizContext.Provider value={quizes}>
        //     <Nav />
        //     <Outlet />
        //     {/* <Footer /> */}
        // </QuizContext.Providor>
    );
};

export default Root;