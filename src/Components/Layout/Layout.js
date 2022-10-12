import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const TopicContext = createContext([])

const Layout = () => {
    const topics = useLoaderData()
    // console.log(topics)
    return (
        <TopicContext.Provider value={[topics]}>

            <Header></Header>
            <Outlet></Outlet>

        </TopicContext.Provider>
    );
};

export default Layout;