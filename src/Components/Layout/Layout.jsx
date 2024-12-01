import React, { createContext, useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { DotLoader } from "react-spinners";

export const TopicContext = createContext([]);

const Layout = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchedTopics = useLoaderData();

  useEffect(() => {
    // Delay rendering for 5 seconds
    const delay = setTimeout(() => {
      if (fetchedTopics && fetchedTopics.length > 0) {
        setTopics(fetchedTopics);
        setLoading(false);
      }
    }, 5000);

    return () => clearTimeout(delay); // Clean up timeout on unmount
  }, [fetchedTopics]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <DotLoader color="#C71585" />
      </div>
    );
  }

  return (
    <TopicContext.Provider value={topics}>
      <Header />
      <Outlet />
    </TopicContext.Provider>
  );
};

export default Layout;
