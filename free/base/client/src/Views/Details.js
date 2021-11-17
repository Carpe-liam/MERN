import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const Details = (props) => {
    const [author, setAuthor] = useState({})
    const { id } = useParams();
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8000/authors/' +id)
            .then(response => setAuthor(response.data))
            .catch(err => console.error(err));
    }, []);

    const deleteHandler = () => {
        axios.delete('http://localhost:8000/authors/' +id)
            .then(res => {
                console.log(res.data)
                history.push('/authors')
            })
            .catch()
    }

    return (
        <div>
            <hr />
            <h3>Name: {author.firstName} {author.lastName}</h3>
            <p>Birthday: {author.birthday}</p>
            <p>Grade: {author.grade}</p>
            <Link to={"/authors/" + author._id + "/edit"} className="btn btn-primary" >
                Edit
            </Link>
            <button className="btn btn-danger ms-3" onClick={deleteHandler}>Delete</button>
        </div>
    )
}
    
//<button onClick={ (e)=> {deleteAuthor(author._id) } }> Delete </button>
export default Details;