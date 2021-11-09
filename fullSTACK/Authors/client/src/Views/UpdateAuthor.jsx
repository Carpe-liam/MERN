import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateAuthor = (props) => {
    const {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory()

    console.log(id)

    useEffect(() => {
        axios.get('http://localhost:8000/authors/'+id)
            .then(res => {
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
    }, [])

    const updateAuthorHandler = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/authors/'+id, {
            firstName,
            lastName
        })
            .then(res => console.log(res), history.push('/authors'))
            .catch(err => console.log(err))
    }
    
    return (
        <div>
            <hr/>
            <h4>Update Author</h4>
            <form onSubmit={ updateAuthorHandler }>
                <p>
                    <label>First Name:</label>
                    <input type="text" 
                    name="firstName"
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)} />
                </p>
                <p>
                    <label>Last Name:</label>
                    <input type="text" 
                    name="lastName"
                    value={lastName}
                    onChange={e=> setLastName(e.target.value)} />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UpdateAuthor