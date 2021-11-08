import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const UpdateThing = (props) => {
    const { id } = useParams()
    const [name, setName] = useState()
    const history = useHistory() 
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/things/' + id)
            .then(res => {
                setName(res.data.name)
            })
    }, [])

    const updateThing = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/things/'+ id, {
            name
        })
            .then(res => console.log(res), history.push('/api/things'))
            .catch(err=> console.log(err))
    }

    return(
        <div className="mt-4">
            <form onSubmit={ updateThing } className="mt-3">
                <p>
                    <label>Name:</label>
                    <input type="text" name='name' value={name} className="text-dark ms-4"
                    onChange={(e)=> { setName(e.target.value) }} />
                </p>
                <input type="submit" value="Update Name" className="btn mt-4 bg-purple-400 hover:bg-purple-800" />
            </form>
        </div>
    )
}

export default UpdateThing