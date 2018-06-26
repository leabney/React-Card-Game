import React from 'react'
import "./Cards.css";


const Cards = props => (
  <div class="card-container">
    <div onClick={() => props.setClicked(props.id)} className="card">
      <img alt={props.name} src={props.image} height="200px" width="130px" />
    </div>
  </div>

);

export default Cards;