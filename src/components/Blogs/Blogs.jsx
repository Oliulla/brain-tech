import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16 mb-20 md:w-9/12 mx-auto px-4'>
            <h3 className='text-center text-3xl'>All Blogs</h3>
            <div className='mt-8'>
                <h2 className='text-3xl'>1. What Is The Purpose Of React Router?</h2>
                <p className='text-red-600'>Ans:</p>
                <p className='md:text-xl'>
                    React Router is mainly used for SPA. SPA stands for Single Page Applications.
                    React Router is used to define multiple routes in the application. 
                </p>
                <p className='md:text-xl'>
                    React Router, and dynamic, client-side routing, allows us to build a single-page 
                    web application with navigation without the page refreshing as the user navigates. 
                </p>
            </div>
 
            <div className='mt-8'>
                <h2 className='text-3xl'>2. How Does Context API Work?</h2>
                <p className='text-red-600'>Ans:</p>
                <p className='md:text-xl'>
                    Context API provides a way to pass data without props drilling. It effectively
                    produce a global variable to pass data to its child components to make a tree.
                </p>
                <p className='md:text-xl'>
                    It avoids props drilling to pass data. Every context wrap its childs and we can
                    easily get from its child using useContext method.
                </p>
            </div>

            <div className='mt-8'>
                <h2 className='text-3xl'>3. What Is The React useRef Hook</h2>
                <p className='text-red-600'>Ans:</p>
                <p className='md:text-xl'>
                    React useRef hook is like a box that can keep a mutable value in its .current
                    property. It means, It accepts one argument as the
                    initial value and returns a reference. A reference is an object having a special property
                    current. It can be used to access a DOM element directly.
                </p>
                <h3 className='text-2xl mt-6'>There are 2 rules to remember about references:</h3>
                <p className='md:text-xl'>
                    1. The value of the reference is persisted (stays the same) between component re-renderings;
                </p>
                <p className="text-xl">
                    2. Updating a reference doesn't trigger a component re-rendering.
                </p>
            </div>
        </div>
    );
};

export default Blogs;