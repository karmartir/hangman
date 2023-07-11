import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import words from './words.json'
import Word from "./Word";
import Keyboard from "./Keyboard";
import Man from "./Man";

function App() {
  const[wordToGuess, setToWordGuess]=useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
const incorrectLetters = guessedLetters.filter(letter =>
    !wordToGuess.includes(letter));
const addGuessedLetters = useCallback((letter: string) => {
    if(guessedLetters.includes(letter)) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter])
}, [guessedLetters])
  /*  const addGuessedLetters = (letter: string) => {
        if(guessedLetters.includes(letter)) return;
        setGuessedLetters([...currentLetters, letter])
    }
*/
  useEffect (() => {
      const handler = (e: KeyboardEvent) => {
          const key = e.key;
          if(!key.match(/^[a-z]/)) return;
            e.preventDefault();
            addGuessedLetters(key);
      }
      document.addEventListener('keypress', handler);
      return () => {document.removeEventListener('keypress', handler)}
  }, [guessedLetters])

    return (
        <div className="App">
            <Man numberOfMistakes={incorrectLetters.length}/>
            <Word
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <Keyboard/>

        </div>
    );
}

export default App;
