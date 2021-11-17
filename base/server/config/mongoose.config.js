const mongoose = require('mongoose')

db_name = x___X

mongoose.connect('mongodb://localhost/' + db_name, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log("Database connection established. DB: "x___X "))
    .catch(error => console.log("There was an error", error))