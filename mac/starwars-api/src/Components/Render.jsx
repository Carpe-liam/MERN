// ========= IMPORTS ==========
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    useHistory,
    useParams
} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Render = () => {

// ======= VARIABLES ========
    const { category, number } = useParams()
    const [ displayInfo, setDisplayInfo] = useState({})

// ======= FUNCTIONS|HANDLERS ========

// getting call from history redirect and params
    useEffect( () => {
        axios.get(`https://swapi.dev/api/${category}/${number}`)
            .then( response => {
                console.log(response)
                setDisplayInfo(response.data)
            })
            .catch(error=> console.log(error))
    }, [category, number] )

// ======= DISPLAY OUT ========
    return (
        <div className="mx-auto p-4 text-center" style={{width: '700px'}}>
            {
                category==="people" ?
                    <div>
                        <h1 className="text-4xl"> <b> {displayInfo.name} </b> </h1>
                        <hr/>
                        <h3> Height: { displayInfo.height} </h3>
                        <h3> mass: { displayInfo.mass} </h3>
                        <h3> Hair Color: { displayInfo.hair_color} </h3>
                        <h3> Skin Color: { displayInfo.skin_color} </h3>
                    </div> :

                category==="planets" ?
                    <div>
                        <h1 className="text-4xl"> <b> { displayInfo.name } </b> </h1>
                        <hr/>
                        <h3> Climate: {displayInfo.climate} </h3>
                        <h3> Terrain: {displayInfo.terrain} </h3>
                        <h3> Surface Water: {displayInfo.surface_water} </h3>
                        <h3> Population: {displayInfo.population} </h3>
                    </div> :

                category==="starships" ?
                    <div>
                        <h1 className="text-4xl"> <b> {displayInfo.name} </b> </h1>
                        <hr/>
                        <h3> Model: {displayInfo.model} </h3>
                        <h3> Manufacturer: {displayInfo.manufacturer} </h3>
                    </div> :

                category==="vehicles" ?
                    <div>
                        <h1 className="text-4xl"> <b> {displayInfo.name} </b> </h1>
                        <hr/>
                        <h3> Model: {displayInfo.model} </h3>
                        <h3> Manufacturer: {displayInfo.manufacturer} </h3>
                        <h3> Crew: {displayInfo.crew} </h3>
                    </div> :

                category==="films" ?
                    <div>
                        <h1 className="text-4xl"> <b> {displayInfo.title} </b> </h1>
                        <hr/>
                        <h3> Producer: {displayInfo.producer} </h3>
                        <h3> Director: {displayInfo.director} </h3>
                    </div> :

                category==="species" ?
                    <div>
                        <h1 className="text-4xl"> <b> {displayInfo.name} </b> </h1>
                        <hr/>
                        <h3> Classification: {displayInfo.classification} </h3>
                        <h3> Skin Color: {displayInfo.skin_colors} </h3>
                        <h3> Hair Color: {displayInfo.hair_colors} </h3>
                        <h3> Language: {displayInfo.language} </h3>
                    </div> :

                    <div>
                        <img src="http://nerdist.com/wp-content/uploads/2017/08/Obi-Wan-Hello-08182017.gif" alt="" />
                        <h1 className="text-4xl">GENERAL KENOBI</h1>
                    </div> 

            }
        </div>
    )
}

export default Render
