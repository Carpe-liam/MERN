// === IMPORT AND INSTANTIATE EXPRESS SERVER
const express = require("express")
const cors = require('cors');
const { urlencoded } = require("express");

// === CONNECT MONGOOSE TO MONGO-DB
require('./server/config/mongoose.config')

// === CONFIGURE FOR EXPRESS SERVER
const app = express();
app.use(cors())
app.use(express.json())
app.use(urlencoded({extended: true}))

// === CONNECT EXPRESS TO ROUTES
require("./server/routes/person.routes")(app)

// === RUN EXPRESS SERVER
app.listen(8000, () => {
    console.log("You are now listening at port 8000");
})

