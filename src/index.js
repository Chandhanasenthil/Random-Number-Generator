import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {useState} from 'react';
const root = ReactDOM.createRoot(document.getElementById("root"));

function Randomnumber(){

var [count,setCount] = useState(0);
function generaterandomnumber()
{
    setCount(Math.floor(Math.random() * 100)+1)
}
function reset(){
    setCount(0)
}
return(
    <div className="container">
        <h1 className="count">Random Number Generator</h1>
        {count===0?<p className="count">No Number Generated Yet</p>:<p className="count">{count}</p>}
        <button className="btn" onClick={generaterandomnumber}>Generate Random Number</button>
        <button className="btn"  onClick={reset}>Reset</button>
        
    </div>
)}
root.render(<Randomnumber />);
