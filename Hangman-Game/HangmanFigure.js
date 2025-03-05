
import React, { Component } from "react";

class HangmanFigure extends Component {
  render() {
    const { wrongGuesses } = this.props;
    const hangmanParts = [
      `
  +---+
  |   |
      |
      |
      |
      |
=========`,
      `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
      `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
      `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
      `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
      `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
      `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
    ];

    return (
      <div className="hangman-figure">
        <pre>{hangmanParts[wrongGuesses]}</pre>
      </div>
    );
  }
}

export default HangmanFigure;
