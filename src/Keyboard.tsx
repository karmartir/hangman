import React from 'react';
import styles from './Keyboard.module.css'

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"

]
type KeyboardProps = {
    disabled: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetters: (letter: string) => void // потому что она ничего не возвращает
}

function Keyboard(
    {
        /*disabled = false,*/
        activeLetters,
        inactiveLetters,
        addGuessedLetters
    }
        : KeyboardProps) {

    return <div
        style={{
            display: "grid",
            justifyContent: 'space-evenly',
            gridTemplateColumns: "repeat(9, 1fr)",
            gap: ".5rem",
        }}
    >
        {KEYS.map((key, index) => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)

            return (
                <button
                    key={index}
                    onClick={() => addGuessedLetters(key)}
                    className={`${styles.btn} ${isActive ? styles.active : ''}
                    ${isInactive ? styles.inactive : ''}`}
                    disabled={isActive || isInactive}
                >
                    {key}
                </button>
            )

        })}
    </div>

}

export default Keyboard;