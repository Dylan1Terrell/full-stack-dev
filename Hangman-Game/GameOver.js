
// GameOver.js used to display game messages 
import React, { Component } from "react";

class GameOver extends Component {
  render() {
    const { isWinner, word, onRestart } = this.props;
    return (
      <div className="game-over">
        <h2>{isWinner ? "Congratulations You Win!" : "So sorry Game Over!"}</h2>
        <p>The word was: {word}</p>
        <button onClick={onRestart}>Restart Game</button>
      </div>
    );
  }
}

export default GameOver;
