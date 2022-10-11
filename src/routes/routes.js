import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizQuestions from "../components/QuizQuestions/QuizQuestions";
import Root from "../components/Root/Root";
import Stats from "../components/Stats/Stats";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/quiz/:quizId',
                // loader: (params) => fetch(`https://openapi.programming-hero.com/api/quiz/${console.log(params.params.quizId)}`),
                loader: (params) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.params.quizId}`),
                element: <QuizQuestions />
            },
            {
                path: '/stats',
                element: <Stats />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
        ]
    }
]);