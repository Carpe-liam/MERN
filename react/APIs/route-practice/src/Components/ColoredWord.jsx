import React from 'react'
// ========= IMPORTS ==========
//import {useState} from 'react'
import { useParams } from 'react-router'

const ColoredWord = () => {

// ======== VARIABLES =========
    const {word, text, back } = useParams()

// ======== FUNCTIONS|HANDLERS ==========



// ======== DISPLAY OUT ========
    return (
        <div className="text-center mt-10 text-4xl" style={{}} style={{backgroundColor: back, color: text }}>
            <h1>{word}</h1>
            <h1>{text}</h1>
            <h1>{back}</h1>
        </div>
    )
}

export default ColoredWord
