
// WordDisplay.js used to display guessed letters 
import React, { Component } from "react";

class WordDisplay extends Component {
  render() {
    const { word, guessedLetters } = this.props;
    return (
      <div className="word-display">
        {word.split("").map((letter, index) => (
          <span key={index} className="letter">
            {guessedLetters.includes(letter) ? letter : "_"}
          </span>
        ))}
      </div>
    );
  }
}

export default WordDisplay;
