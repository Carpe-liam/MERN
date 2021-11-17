import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "X__X"List from '../Components/'X__X'List'

const Main = () => {
    const [x__x, set"X__X"] = useState([])
    const [subForm, setSubForm] = useState(false)

    const chageSubF = () =>{
        setSubForm(!subForm)
    }

    // === HOME PAGE ===
    useEffect(()=> {
        axios.get('http://localhost:8000/authors')
            .then(response => {
                set"X__x"(response.data)
                setSubForm(!subForm)
            })
            .catch(err => console.error(err))
    }, [subForm])

    return(
        <div>
            <"X__X"List 'x__x'={'x__x'} removeFromDom={removeFromDom} />
        </div>
    )

}

export default Main