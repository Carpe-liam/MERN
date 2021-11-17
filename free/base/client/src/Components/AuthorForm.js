import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AuthorForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [grade, setGrade] = useState('')
    const history = useHistory()

    //ARRAY FOR ERRORS
    const [errors, setErrors] = useState([])

    const formSubmit = e => {
        e.preventDefault()
        const formData = {
            firstName,
            lastName, 
            birthday,
            grade
        }
        
        axios.post('http://localhost:8000/authors/new', formData)
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
                <p>
                    <label>Birthday:</label>
                    <input type="date" onChange={e=> setBirthday(e.target.value)} />
                </p>
                <p>
                    <label>Grade:</label>
                    <select onChange={e=> setGrade(e.target.value)}>
                        <option value='9' >9</option>
                        <option value='10' >10</option>
                        <option value='11' >11</option>
                        <option value='12' >12</option>
                    </select>
                </p>

                <input type="submit" value="Create" />
            </form>
            {errors.map((err, index) => <p key={index} className="text-danger">{err}</p>)}
        </div>
    )
}

export default AuthorForm

// Player.find().collation({locale:'en',strength: 2}).sort({name:1})
