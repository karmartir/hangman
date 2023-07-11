import React from 'react';

type WordProps = {
    wordToGuess: string;
    guessedLetters: string[];
}

const Word = ({wordToGuess, guessedLetters}: WordProps) => {

    return (
        <div>
            {wordToGuess.split('').map((letter, index) => (
                <span style={{borderBottom: '.1em solid black'}} key='index'>


                </span>
                ))}
        </div>
    );
};

export default Word;