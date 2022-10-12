import React, { useContext } from 'react';
import siteImage from '../../Assets/5100_4_01.jpg'
import { TopicContext } from '../Layout/Layout';
import Topic from '../Topic/Topic';
import { v4 } from 'uuid'

import './Home.css'

const Home = () => {
    const topics = useContext(TopicContext)
    const data = topics[0].data
    console.log(data)
    return (
        <div>
        <div className='flex align-middle'>
            <img className='siteImage' src={siteImage} alt="" />
            <div className='text-slate-500 mt-40 ml-40'>
                <h1 className='text-4xl font-bold'>Hey Ninja Programmer!!</h1>
                <p className='mt-12'>Welcome to our website here you can develop your skills and judge yourself  <br /> by examining yourself with quiz</p>
                
            </div>
            

        </div>
        <div className='mx-12 my-20 grid grid-cols-4 gap-4 content-center ...'>
                    {data.map(topic => <Topic key={v4()}
                        topic={topic}></Topic>)}
                </div>
        </div>
    );
};

export default Home;