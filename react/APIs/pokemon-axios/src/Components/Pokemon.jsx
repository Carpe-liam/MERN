import React from 'react'
// ========= IMPORTS ==========
import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {

// ======== VARIABLES =========
    const [pokemon, setPokemon] = useState()

// ======== FUNCTIONS|HANDLERS ==========




    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
        .then(response => response.json())
        .then(response => setPokemon(response.results)
            )
    }


    const axiosPokemon = (e) => {
        e.preventDefault()

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        // ======== SUCCESSFUL ========
                    .then( response=> {
                        setPokemon(response.data.results)
                        console.log(response.data)
                    })
        // ======== UNSUCCESSFUL ========
                    .catch( err=> console.log(err))
    }


    
// ======== DISPLAY OUT ========
    return (
        <div className='text-center'>
            <form onSubmit={ e =>  axiosPokemon(e) }>
                <button className="btn bg-yellow-400 mt-20" type="submit">
                Show Me The Pokemon!</button>
            </form>
            <div>
                { pokemon ? pokemon.map(
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