
import React, { Component } from "react";

class Keyboard extends Component {
  render() {
    const { onGuess, disabled } = this.props;
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    return (
      <div className="keyboard">
        {letters.map((letter) => (
          <button key={letter} onClick={() => onGuess(letter)} disabled={disabled}>
            {letter}
          </button>
        ))}
      </div>
    );
  }
}

export default Keyboard;
