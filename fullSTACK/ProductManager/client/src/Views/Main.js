import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

const Main = () => {

    const [products, setProducts] = useState([])
    const [domChange, setDomChange] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log("Error: ", err))
    }, [domChange])

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
            .then(response => {
                setProducts([...products, response.data])
            })
    }

    const changeDom = () => {
        setDomChange(!domChange)
    }

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <>
            <ProductForm changeDom={changeDom} createProduct={createProduct} initialTitle=""  initialPrice="" initialDesciription=""/> 
            <ProductList products={products} removeFromDom={removeFromDom}  />
        </>
    )
}

export default Main