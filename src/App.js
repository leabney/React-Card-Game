import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Wrapper from './components/Wrapper';
import cards from "./cards.json";

let currentScore = 0;
let bestScore = 0;
let clickMessage = "Click on a card to earn points, but don't click on any card more than once!";



class App extends Component {
    
  // Setting this.state.cards to the cards json array
  state = {
      cards,
      currentScore,
      bestScore,
      clickMessage
  };

  setClicked = id => {

      // Make a copy of the state cards array to work with
      const cards = this.state.cards;

      // Filter for the clicked card
      const clickedCard = cards.filter(card => card.id === id);

      // If the cards's clicked value is already true, 
      // do the game over actions
      if (clickedCard[0].clicked){

          console.log ("Current Score: " + currentScore);
          console.log ("Best Score: " + bestScore);

          currentScore = 0;
          clickMessage = "The " + clickedCard[0].name + " was already clicked!  The game has reset."

          for (let i = 0 ; i < cards.length ; i++){
              cards[i].clicked = false;
          }

          this.setState({clickMessage});
          this.setState({ currentScore });
          this.setState({cards});

      // Otherwise, if clicked = false, and the user hasn't finished
      } else  {

          // Set its value to true
          clickedCard[0].clicked = true;

          // increment the appropriate counter
          currentScore++;
          
          clickMessage = "Great! You haven't click on that card yet! Keep going!";

          if (currentScore > bestScore){
              bestScore = currentScore;
              this.setState({ bestScore });
          }

          // Shuffle the array to be rendered in a random order
          cards.sort(function(a, b){return 0.5 - Math.random()});

          // Set this.state.cards equal to the new cards array
          this.setState({ cards });
          this.setState({currentScore});
          this.setState({clickMessage});
      } 
  };

  render() {
      return (
        
             <Wrapper>
              <NavBar  currentScore={this.state.currentScore}
                       bestScore={this.state.bestScore}/>
              <Jumbotron clickMessage={this.state.clickMessage}/>                         

              {this.state.cards.map(card => (
                  <Cards
                      setClicked={this.setClicked}
                      id={card.id}
                      key={card.id}
                      image={card.image}
                  />
              ))}
          </Wrapper>
      );
  }
}

export default App;
