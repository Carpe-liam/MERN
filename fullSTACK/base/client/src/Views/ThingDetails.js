import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ThingDetails = (props) => {
    const [thing, setThing] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/things/'+ id)
            .then(res => setThing(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(thing)
    return (
        <div className="pt-4">
            <p>Name: {thing.name}</p>
            <Link to={`/api/things/${thing._id}/edit`} className="btn bg-red-500 hover:bg-red-900 mt-4">
                Edit
            </Link>
        </div>
    )
}

export default ThingDetails