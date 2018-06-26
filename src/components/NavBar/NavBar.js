import React from "react";
import "./NavBar.css";


const NavBar = props => (

<div className="navbar">
<h3>Card Game</h3>
<h3>Score: {props.currentScore} | Top Score: {props.bestScore}</h3>
</div>

);


export default NavBar;