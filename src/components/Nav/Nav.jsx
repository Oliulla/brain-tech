import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Nav = () => {
    const [open, setOpen] = useState(false);
    const menus = [
        {id: 1, path: '/home', name: 'Home'},
        {id: 2, path: '/stats', name: 'Stats'},
        {id: 3, path: '/blogs', name: 'Blogs'},
    ];

    return (
        <nav className='bg-gray-800 w-full py-4 px-6 md:px-14 flex justify-between items-center'>
            <div>
                <Link className='text-2xl md:text-3xl font-semibold' to='/'>Brain Tech</Link>
            </div>

            <div className={`
                bg-slate-800 w-3/6 md:w-auto 
                h-full absolute md:sticky 
                flex flex-col md:flex md:flex-row 
                items-center py-7 md:py-0 gap-6 md:gap-14 
                z-50 ease-in-out duration-700 
                ${open ? 'left-0 top-16': 'left-[-500px] top-16'} 
                `}
            >
                {
                    menus.map(menu => <Link 
                        key={menu.id}
                        to={menu.path}
                        className="hover:text-yellow-200"
                        >
                            {menu.name}
                        </Link>
                    )
                }
            </div>
            
            <div onClick={() => setOpen(!open)} className="md:hidden h-7 w-7 text-blue-300 cursor-pointer ">
                {
                    !open ? <Bars3Icon /> : <XMarkIcon /> 
                }
            </div>
        </nav>
    );
};

export default Nav;