import React, { useState } from 'react'
import axios from 'axios'

const ThingForm = props => {
    const [ name, setName ] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/things/createThing', {
            name
        })
            .then(response => console.log("Response: ", response), setName(""), props.changeDom())
            .catch(error => console.log("Error: ", error))
    }

    return(
        <form onSubmit={ onSubmitHandler }>
            <p>
                <label>Name:</label>
                <input type="text" className="ms-3 rounded p-1 text-dark"
                onChange={e => setName(e.target.value)} />
            </p>
            <input className="btn bg-green-400 hover:bg-green-800 my-3" type="submit" />
        </form>
    )
}

export default ThingForm