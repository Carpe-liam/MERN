import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import DeleteButton from '../Components/DeleteButton';

const Update = (props) => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setProduct(res.data)
            })
    }, []);

    const updateProduct = product => {
        e.preventDefault();
        
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => console.log(res), props.changeDom())
            .catch(err => console.error(err));
    }

    return (
        <div>
            <nav>
                <Link to='/api/products'>Home</Link>
            </nav>
            <h1>Update {product.title} </h1>
            <ProductForm onSubmitProp={updateProduct} initalTitle={product.title} initialPrice={product.price} initalDescription={product.description}/> 
            <DeleteButton productId={product._id} successCallback={()=> history.push("/api/products")} />
        </div>
    )
}

export default Update;