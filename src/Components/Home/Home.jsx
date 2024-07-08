import React, { useContext } from "react";
import siteImage from "../../Assets/5100_4_01.jpg";
import { TopicContext } from "../Layout/Layout";
import Topic from "../Topic/Topic";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const topics = useContext(TopicContext);
  const data = topics;

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

      <div className="mx-12 my-20 grid md:grid-cols-4 sm:grid-cols-1 gap-4 content-center ...">
        {data.map((topic) => (
          <Topic topic={topic} key={topic._id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
