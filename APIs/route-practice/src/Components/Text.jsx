import React from 'react'
// ========= IMPORTS ==========
//import {useState} from 'react'
import { useParams } from 'react-router'

const Text = (props) => {

// ======== VARIABLES =========
    const { text } = useParams()
    let val = parseFloat(text)

// ======== FUNCTIONS|HANDLERS ==========


// ======== DISPLAY OUT ========
    return (
        
        <div className="text-center mt-10 text-4xl">
        {
        (isNaN(val)) ? 
        <h1>The word is: {text} </h1> 
        :  
        <h1>The number is: {text} </h1>
        }
        </div>
        
)
}

export default Text
