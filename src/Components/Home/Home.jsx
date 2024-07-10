import React, { useContext, useState, useEffect } from "react";
import siteImage from "../../Assets/5100_4_01.jpg";
import { TopicContext } from "../Layout/Layout";
import Topic from "../Topic/Topic";
import { DotLoader } from "react-spinners";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const topics = useContext(TopicContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (topics.length > 0) {
      setData(topics);
      setLoading(false);
    }
  }, [topics]);

  return (
    <div>
      <div className="align-middle grid md:grid-cols-2 sm:grid-cols-1">
        <div>
          <img className="w-[400px] h-[400px]" src={siteImage} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-slate-500 ">
            <h1 className="text-4xl font-bold">Hey Ninja Programmer!!</h1>
            <p className="mt-12">
              Welcome to our website here you can develop your skills and judge
              yourself <br /> by examining yourself with quiz
            </p>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center">
          <DotLoader color="#C71585" />
        </div>
      ) : (
        <div className="mx-12 my-20 grid md:grid-cols-4 sm:grid-cols-1 gap-4 content-center">
          {data.map((topic) => (
            <Topic topic={topic} key={uuidv4()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
