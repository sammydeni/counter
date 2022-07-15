import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { BiRotateLeft } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import Card from "../UI/Card";

var myInterval;

const Timer = () => {
  const [timerCount, setTimerCount] = useState(0);
  const [isGoing, setIsGoing] = useState(true);

  const play = () => {
    if (isGoing) {
      myInterval = setInterval(() => {
        setTimerCount((count) => count + 1);
      }, 1000);
      setIsGoing(!isGoing);
    } else {
      clearInterval(myInterval);
      setIsGoing(!isGoing);
    }
  };

  const stop = () => {
    clearInterval(myInterval);
    setTimerCount(0);
    setIsGoing(true);
  };

  return (
    <Card>
      <h2>Stopwatch</h2>
      <h1>{timerCount}</h1>
      <div>
        <button onClick={play}>
          {isGoing && <FaPlay style={{ verticalAlign: "middle" }} />}
          {!isGoing && <FaPause style={{ verticalAlign: "middle" }} />}
        </button>
        <button onClick={stop}>
          <BiRotateLeft style={{ verticalAlign: "middle" }} />
        </button>
        {<button>
          <AiOutlineFieldTime style={{ verticalAlign: "middle" }} />
        </button>}
      </div>
    </Card>
  );
};

export default Timer;
