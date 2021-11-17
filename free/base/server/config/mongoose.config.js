const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/test1', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established. DB: test1 "))
    .catch(error => console.log("There was an error", error))