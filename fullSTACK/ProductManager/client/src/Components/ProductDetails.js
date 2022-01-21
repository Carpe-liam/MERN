import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const {removeFromDom} = props
    const history = useHistory()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/' +id)
            .then(response => setProduct(response.data))
            .catch(err => console.error(err));
    }, []);
    
    const deleteProduct = ( productId ) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => { 
                removeFromDom( productId ) 
            },
            history.push('/api/products')
            )
            .catch(err => console.log(err))
    }

    return (
        <div>
            <nav>
                <Link to='/api/products'>Home</Link>
            </nav>
            <p>Poduct Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/api/products/" + product._id + "/edit"}>
                Edit
            </Link>
            <button onClick={ (e)=> {deleteProduct(product._id) } }> Delete </button>
        </div>

    )
}
    
export default ProductDetail;