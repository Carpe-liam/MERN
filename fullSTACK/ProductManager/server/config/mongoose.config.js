const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/products', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established. DB: products "))
    .catch(error => console.log("There was an error", error))