import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const AuthorDetails = (props) => {
    const [author, setAuthor] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h4>Author Name:</h4>
            <p>{author.firstName} {author.lastName}</p>
        </div>
    )
}

export default AuthorDetails