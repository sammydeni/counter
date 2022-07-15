import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";

const buttonStyle = {
    'fontSize': '2rem',
    'width': 'auto'
}


const Homepage = () => {

    const navigator = useNavigate();

    const goToCounter = () => {
        navigator('/counter');
    }

    const goToTimer = () => {
        navigator('/timer');
    }

    return <Card>
        <h2>Tool List</h2>
        <div>
            <button style={buttonStyle} onClick={goToCounter}>Counter</button>
            <button style={buttonStyle} onClick={goToTimer}>Timer</button>
        </div>

    </Card>;
}
 
export default Homepage;