import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import words from './words.json'
import Word from "./Word";
import Keyboard from "./Keyboard";
import Man from "./Man";

function App() {
    const [wordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    });
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(letter =>
        !wordToGuess.includes(letter));

    const isLoser = incorrectLetters.length >= 6 // тогда проиграл
    const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter)) // выиграл


    const addGuessedLetters = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return;
        setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

    /*  function addGuessedLetters = (letter: string){
          if(guessedLetters.includes(letter)) return;
          setGuessedLetters(currentLetters => [...currentLetters, letter])
      }*/

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]/)) return;
            e.preventDefault();
            addGuessedLetters(key);
        }
        document.addEventListener('keypress', handler);
        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [addGuessedLetters, guessedLetters])

    return (
        <div style={
            {
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                margin: '0 auto',
                alignItems: 'center',

            }
        }>
            <div style={{fontSize: '2rem', textAlign: 'center'}}>
                {isWinner && 'Wow, you won! Congratulations!'}
                {isLoser && 'Oops! Refresh to try again'}
            </div>

            <Man numberOfMistakes={incorrectLetters.length}/>
            <Word
                reveal={isLoser}
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <div
                style={{alignSelf: 'stretch'}}>
                <Keyboard

                    disabled={isWinner || isLoser}
                    activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetters={addGuessedLetters}
                />
            </div>
        </div>
    );
}

export default App;
