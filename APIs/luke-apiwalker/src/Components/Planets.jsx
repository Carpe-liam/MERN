// ========= IMPORTS ==========
import React from 'react'
import { useParams } from 'react-router'
//import {useState} from 'react'

const Planets = () => {

// ======== VARIABLES =========
    const { planets, number} = useParams()

// ======== FUNCTIONS|HANDLERS ==========

    axios.get('https://swapi.dev/api/planets/{number}')
            // ======== SUCCESSFUL ========
                        .then( response=> {
                            setPokemon(response.data.results)
                            console.log(response.data)
                        })
            // ======== UNSUCCESSFUL ========
                        .catch( err=> console.log(err))

// ======== DISPLAY OUT ========
    return (
        <div>

        </div>
    )
}

export default Planets
