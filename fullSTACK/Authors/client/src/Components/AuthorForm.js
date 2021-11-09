import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AuthorForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory()

    const formSubmit = e => {
        e.preventDefault()
        
        axios.post('http://localhost:8000/authors/new', {
            firstName,
            lastName
        })
            .then(response => console.log(response), history.push('/authors'))
            .catch(err => {
                const errorResponse  = err.response.data.error
                console.log(err)
                const errorArr = []

            })
    }

    return(
        <div>
            <form onSubmit={ formSubmit }>
                <p>
                    <label>First Name:</label>
                    <input type="text" onChange={e=> setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" onChange={e=> setLastName(e.target.value)} />
                </p>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default AuthorForm