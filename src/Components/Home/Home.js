import React from 'react';
import siteImage from '../../Assets/5100_4_01.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='flex align-middle'>
            <img className='siteImage' src={siteImage} alt="" />
            <div className='text-slate-500 mt-40 ml-40'>
                <h1 className='text-4xl font-bold'>Hey Ninja Programmer!!</h1>
                <p className='mt-12'>Welcome to our website here you can develop your skills and judge yourself  <br /> by examining yourself with quiz</p>
            </div>
        </div>
    );
};

export default Home;