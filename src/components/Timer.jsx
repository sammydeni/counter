import React, { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { BiRotateLeft } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import styles from '../UI/Card.module.css'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card";

var myInterval;

const Timer = () => {
    const navigator = useNavigate();

  const [timerCount, setTimerCount] = useState(0);
  const [isGoing, setIsGoing] = useState(true);

  const backToHome = () => {
    navigator('/');
  }  
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
       <div className={styles.header}>
        <button className={styles.back} onClick={backToHome} >
        <IoArrowBackCircleSharp style={{'verticalAlign': 'middle'}}/> 
        </button>
        <h2>Timer</h2>
        </div>
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
