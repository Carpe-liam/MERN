import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {authorId, successCall } = props

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/authors/'+authorId)
            .then(res => {
                successCall()
            })
    }

    return (
        <button onClick={ deleteAuthor } className="btn btn-danger ms-4">
            Delete
        </button>
    )
}

export default DeleteButton