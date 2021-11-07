import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => { 

    const { removeFromDom } = props

    const deleteProduct = ( productId ) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => { 
                removeFromDom( productId ) 
            })
            .catch(err => console.log(err))
    }

    return(
        <div>
            {props.products.map((product, index) => {
                return (
                    <div>
                        <h3>
                            <button onClick={ (e)=> {deleteProduct(product._id) } }> Delete </button>
                            <Link to={product._id} key={index}> {product.title} </Link>
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList