import axios from 'axios'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => { 

    const { removeFromDom } = props
    const history = useHistory()

    const deleteProduct = ( productId ) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(response => { 
                removeFromDom( productId ) 
            }, history.push('/api/products'))
            .catch(err => console.log(err))
    }

    return(
        <div>
            {props.products.map((product, index) => {
                return (
                    <div>
                        <h3>
                            <Link to={product._id} key={index}> {product.title} </Link>
                            <DeleteButton productId={product.id} successCallback={()=> removeFromDom(product._id)} /> 
                        </h3>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList