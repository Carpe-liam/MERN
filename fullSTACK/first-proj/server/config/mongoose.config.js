const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/peopledb", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(()=> console.log("Database connection established. DB: peopledb"))
    .catch(err=> console.log("Oops, error", err))