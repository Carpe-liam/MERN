// import model controller to be able to access the CRUD functions
const JokeController = require("../controllers/joke.controller")

// routes are app.get(">html route here<", >ControllerName.functionName),
module.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.findSingleJoke)
    app.get("/api/jokes/random", JokeController.findRandomJoke)
    app.put("/api/jokes/update/:id", JokeController.updateJokeById)
    app.post("/api/jokes/new", JokeController.createNewJoke)
    app.delete("api/jokes/delete/:id", JokeController.deleteJoke)
}