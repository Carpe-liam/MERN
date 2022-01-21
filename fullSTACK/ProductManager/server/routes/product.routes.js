const ProductController = require('../controllers/product.controller'); 

module.exports = function(app){
    // CREATE
    app.post('/api/create_product', ProductController.createProduct)
    // READ
    app.get('/api/products', ProductController.getAllProducts)
    app.get('/api/:id', ProductController.getProductById)
    // UPDATE
    app.put('/api/products/:id', ProductController.updateProduct)
    // DELETE
    app.delete('/api/product/:id', ProductController.deleteProduct)
}

