import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import "./App.css";
import Homepage from "./components/Homepage";
import Counter from "./components/Counter";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/timer' element={<Timer/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
