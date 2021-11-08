const mongoose = require('mongoose')

const dbname = "fulbase"

mongoose.connect('mongodb://localhost/' + dbname, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(()=> console.log("Database connection established. DB: " + dbname))
    .catch(error => console.log("There's an error:", error))