// ========= IMPORTS ==========
import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    useHistory,
    Redirect
} from 'react-router-dom'
import axios from 'axios'
import {useState, useEffect} from 'react'

const APIForm = () => {

// ======= VARIABLES ========
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        category: "",
        number: ""
    })
    const history = useHistory()

// ======= FUNCTIONS|HANDLERS ========

// get our categories on page load
    useEffect( () => {
        axios.get('https://swapi.dev/api/')
            .then( response=> {
                setCategories(Object.keys(response.data))
            })
            .catch(error=> console.log(error))
    }, [])

// form input handler
    const formChangeHandler = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

// form submit handler
    const formSubmitHandler = e => {
        e.preventDefault();
        console.log(formData)

        history.push(`/${formData.category}/${formData.number}`)
    }



// ======= DISPLAY OUT ========
    return (
        <div className="container pt-4">
            <form onSubmit = { formSubmitHandler } className="d-flex justify-center">
                <div className="col-auto ms-4 d-flex justify-center">
                    <label className="w-40">Search for:</label>
                    <select onChange = {e=> formChangeHandler(e)} name="category" id="" className="form-select">
                        {
                        categories.map((categ,index)=>{
                            return <option key= {index} value={categ}>{categ}</option>
                        })
                        }
                    </select>
                </div>
                <div className="col-auto ms-4 d-flex justify-center">
                    <label className="w-20">ID:</label>
                    <input onChange = {e=> formChangeHandler(e)} name="number" type="number" min="1" className="form-control" />
                </div>
                <div className="col-auto ms-4 d-flex justify-center">
                    <input className = "btn btn-success mt-3" type="submit" value="Search" />
                </div>
            </form>
        </div>
    )
}

export default APIForm
