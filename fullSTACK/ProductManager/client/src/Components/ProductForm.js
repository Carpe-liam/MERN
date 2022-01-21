import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const ProductForm = (props) => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")
    const history = useHistory()
    

    const onSubmitHandler = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/create_product', { 
            title,
            price,
            description
        })
            .then(response => console.log("Response: ", response), setTitle(""), setPrice(""), setDescription(""), props.changeDom())
            .catch(error => console.log("Error: ", error))
        
    }


    return(
        <div>
            <h1>Product Manager</h1>
            <hr />
            <form onSubmit={ onSubmitHandler }>
                <p>
                    <label>Title:</label>
                    <input type="text" onChange={e => setTitle(e.target.value)} />
                </p>
                <p>
                    <label>Price: </label>
                    <input type="number" min="0" onChange={e => setPrice(e.target.value)} />
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={e => setDescription(e.target.value)} />
                </p>
                <input type="submit" value="create" />
            </form>
        </div>
    )
}

export default ProductForm