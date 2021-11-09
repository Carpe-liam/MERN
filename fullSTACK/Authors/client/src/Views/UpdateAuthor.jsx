import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateAuthor = (props) => {
    const {id} = useParams()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory()

    //ARRAY FOR ERRORS
    const [errors, setErrors] = useState([])

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
        const formData = {
            firstName,
            lastName
        }
        
        axios.put('http://localhost:8000/authors/'+id, formData)
            // SUCCESS POST
            .then(response => {
                console.log(response)
                setErrors([])
                history.push('/authors')
            })
            // FAIL POST
            .catch(err => {
                const errorResponse  = err.response.data.errors
                console.log(errorResponse)
                const errorArr = []
                // LOOP THROUGH ALL ERRORS AND GET MESSAGES
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
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
            {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
        </div>
    )
}

export default UpdateAuthor