// ========= IMPORTS ==========
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import axios from 'axios'
//import {useState} from 'react'

const Planets = () => {

// ======== VARIABLES =========
    

// ======== FUNCTIONS|HANDLERS ==========

// ======== DISPLAY OUT ========
    return (
        <div>
            <form className="d-flex text-center justify-center bg-green-500 rounded p-4"
                onSubmit="">
                <div className="mt-2 ">
                    <label><b> Search for: </b></label>
                    <select className="ms-4">
                        <option disabled selected>Pick one!</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className="mt-2 ms-4">
                    <label><b>ID: </b></label>
                    <input type="number" className="ms-2 bg-grey-300 rounded" />
                </div>
                <div className="ms-4">
                    <button className="btn bg-blue-600 hover:bg-blue-900" type="submit">Search</button>
                </div>
            </form>


            <BrowserRouter>
                <Switch>
                    <Route path="https://swapi.dev/api/planets/:number">
                        <Planets />
                    </Route>
                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Planets
