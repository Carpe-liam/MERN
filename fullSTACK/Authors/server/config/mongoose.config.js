const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/authors', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established. DB: authors "))
    .catch(error => console.log("There was an error", error))