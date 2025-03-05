
// App.js used to manage the game state 
import React, { Component } from "react";
import HangmanFigure from "./HangmanFigure";
import Keyboard from "./Keyboard";
import WordDisplay from "./WordDisplay";
import GameOver from "./GameOver";
import "./App.css";

const words = ["react", "javascript", "hangman", "programming", "developer", "Stack", "Overflow", "Script"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      word: words[Math.floor(Math.random() * words.length)],
      guessedLetters: [],
      wrongGuesses: 0,
      maxWrong: 6,
    };
  }

  handleGuess = (letter) => {
    this.setState((prevState) => {
      const { word, guessedLetters, wrongGuesses, maxWrong } = prevState;
      if (guessedLetters.includes(letter) || wrongGuesses >= maxWrong) return null;
      return word.includes(letter)
        ? { guessedLetters: [...guessedLetters, letter] }
        : { guessedLetters: [...guessedLetters, letter], wrongGuesses: wrongGuesses + 1 };
    });
  };

  resetGame = () => {
    this.setState({
      word: words[Math.floor(Math.random() * words.length)],
      guessedLetters: [],
      wrongGuesses: 0,
    });
  };

  render() {
    const { word, guessedLetters, wrongGuesses, maxWrong } = this.state;
    const gameOver = wrongGuesses >= maxWrong;
    const isWinner = word.split("").every((letter) => guessedLetters.includes(letter));
    return (
      <div className="game-container">
        <h1>Hangman Game</h1>
        <HangmanFigure wrongGuesses={wrongGuesses} />
        <WordDisplay word={word} guessedLetters={guessedLetters} />
        <Keyboard onGuess={this.handleGuess} disabled={gameOver || isWinner} />
        {(gameOver || isWinner) && <GameOver isWinner={isWinner} word={word} onRestart={this.resetGame} />}
      </div>
    );
  }
}

export default App;
