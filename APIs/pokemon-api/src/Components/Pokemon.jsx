import React from 'react'
// ========= IMPORTS ==========
import {useState, useEffect} from 'react'

const Pokemon = (props) => {

// ======== VARIABLES =========
    const [pokemon, setPokemon] = useState(0)

// ======== FUNCTIONS|HANDLERS ==========
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(
            { name: response.results }
            ))
    }

// ======== DISPLAY OUT ========
    return (
        <div className='text-center'>
            <form onSubmit={ e =>  handleSubmit(e) }>
                <button className="btn bg-yellow-400 mt-20" type="submit">
                Show Me The Pokemon!</button>
            </form>
            <div>
                { pokemon.name ? pokemon.name.map(
                    (poke, index) => {
                        return(
                            <div key={index}>{poke.name}</div>
                        )
                    }
                ) : null  }
            </div>
        </div>
    )
}

export default Pokemon
