// ========= IMPORTS ==========
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    useHistory
} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'


const APIForm = () => {

// ======== VARIABLES =========
    const [categories, setCategories] = useState([])

    const [formData, setFormData] = useState({
        category: "",
        id: ""
    })

    const history = useHistory()

// ======== FUNCTIONS|HANDLERS ==========
    useEffect( () => {
        axios.get("https://swapi.dev/api/")
            .then(response => {
                console.log(Object.keys(response.data))
                setCategories(Object.keys(response.data))
            })
    }, [])






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
        </div>
    )
}

export default APIForm
