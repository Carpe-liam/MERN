import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProductForm from '../Components/ProductForm'
import ProductList from '../Components/ProductList'

const Main = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    return (
        <>
            <ProductForm /> 
            <ProductList products={products} />
        </>
    )
}

export default Main