import React, { useState } from "react";
import Card from "../UI/Card";
import styles from '../UI/Card.module.css'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";



const Counter = () => {
const navigator = useNavigate();
  const [counterVal, setCounterVal] = useState(0);

  const backToHome = () => {
    navigator('/');
  }  

  const increase = () => {
    setCounterVal((val) => val + 1);
  };

  const decrease = () => {
    if(counterVal > 0) {
    setCounterVal((val) => val - 1);
    }
  };

  return (
    <Card>
        <div className={styles.header}>
        <button className={styles.back} onClick={backToHome} >
        <IoArrowBackCircleSharp style={{'verticalAlign': 'middle'}}/> 
         </button>
        <h2 >Counter</h2>
        </div>
       
     
      <h1>{counterVal}</h1>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </Card>
  );
};

export default Counter;
