// IMPORT EXPRESS & SET 'app' TO EXPRESS() FUNCTION
const express = require("express")
const app = express()

// IMPORT DB CONFIG FILE
require("./server/config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

// IMPORT ROUTES AND SET THEM TO A VARIABLE AND SET AS FUNCTION CONTAINING APP
const AllMyJokeRoutes = require("./server/routes/joke.routes")
AllMyJokeRoutes(app)

// SET LISTENER TO LOG IN TERMINAL ONCE SERVER IS LIVE
app.listen(8000, () => console.log("The servers is locked and loaded at port: 8000"))