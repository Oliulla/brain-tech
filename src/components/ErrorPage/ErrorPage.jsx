import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div className='flex flex-col justify-center items-center h-96 text-3xl w-auto'>
            <h1>Opps! You Are In Wrong Path.</h1>
            <h4>{error ? error.status : undefined}</h4>
            {
                error ?
                <p>{error.statusText || error.message}</p>
                : undefined
            }
        </div>
    );
};

export default ErrorPage;