import React from 'react';
import "./Jumbotron.css";


const Jumbotron = props => (
    <div className="jumbotron text-center">
    <h1>Card Counting Game</h1>
    <h4>{props.clickMessage}</h4>
    </div>
);

export default Jumbotron;