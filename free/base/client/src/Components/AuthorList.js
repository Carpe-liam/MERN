import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author=> author._id != authorId))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/authors')
            .then(res=> setAuthors(res.data))
    }, [])


    return(
        <div className=''>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Available Actions</th>
                    </tr>
                </thead>
                <tbody>
                        {
                        props.authors.map( (author, index) =>
                            <tr key={index}>
                                <td > 
                                    {author.firstName} {author.lastName} 
                                </td>
                                <td>
                                    <Link className="btn btn-warning" to={`/authors/${author._id}/edit`}>Edit</Link>
                                    <Link className="ms-3 btn btn-success" to={`/authors/${author._id}`}>View</Link>
                                    <DeleteButton authorId={author._id}
                                    successCall={()=> removeFromDom(author._id)} />
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList