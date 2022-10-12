import React from 'react';
import './Header.css'
import logo from '../../Assets/ninja.png'

const Header = () => {
    return (
        <div>
            <header className="header p-4 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <div className='flex logoandname'>
                        <img className='image' src={logo} alt="" />
                        <h1>Ninja Dev Quiz</h1>
                    </div>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/statics" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Statics</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="/faq" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">FAQ</a>
                        </li>
                    </ul>

                </div>
            </header>
        </div>
    );
};

export default Header;