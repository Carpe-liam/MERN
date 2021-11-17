import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AuthorList from '../Components/AuthorList'

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [subForm, setSubForm] = useState(false)

    const chageSubF = () =>{
        setSubForm(!subForm)
    }

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author=> author._id != authorId))
    }

    useEffect(()=> {
        axios.get('http://localhost:8000/authors')
            .then(response => {
                setAuthors(response.data)
                setSubForm(!subForm)
            })
            .catch(err => console.error(err))
    }, [subForm])

    return(
        <div>
            <AuthorList authors={authors} removeFromDom={removeFromDom} />
        </div>
    )

}

export default Main