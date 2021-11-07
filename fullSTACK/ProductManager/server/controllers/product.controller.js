const { Product } = require('../models/product.model')

// ==== CREATE ====
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body
    Product.create({
        title,
        price,
        description
    })
    .then(product => response.json(product))
    .catch(error => response.json(error))
}

// ==== READ ====
module.exports.getAllProducts = (req, res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json({message: "Something went wrong.", error: err}))
}

module.exports.getProductById = (request, response) => {
    Product.findOne({ _id: request.params.id})
        .then(thisProd => response.json(thisProd))
        .catch(err => response.json({message: "WOOWW, We do NOT sell those, for shame! Shame on you and your cat!", error: err}))
}

// ==== UPDATE ====
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new:true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// ==== DELETE ====
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteRequest => response.json(deleteRequest))
        .catch(err => response.json(err))
}