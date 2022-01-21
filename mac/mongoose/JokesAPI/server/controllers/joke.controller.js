// IMPORT OUR MODELS FOR THIS CONTROLLERS
const Joke = require("../models/joke.model")

/*
++++ THE FOLLOWING ARE FUNCTIONS THAT PERFORM BASIC CRUD OPERATIONS USING OUR MODEL ++++
*/

// get all jokes
module.exports.findAllJokes = (request, response) => {
    Joke.find()
        .then(allJokes => response.json({ jokes: allJokes }))
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}

// get one joke by id
module.exports.findSingleJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id})
        .then(thisJoke => response.json({ joke: thisJoke }))
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}

// get one random joke
module.exports.findRandomJoke = (request, response) => {
    Joke.find()
        .then(allDaJokes => {
            res.json( {joke: this[Math.floor(Math.random() * allDaJokes.length)]})
        })
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}

// create a new joke
module.exports.createNewJoke = (request, response) => {
    Joke.create(request.body)
        .then(createdJoke => response.json({ joke: createdJoke }))
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}

// make a change to existing joke by id
module.exports.updateJokeById = (request, response) => {
    Joke.findOneJokeUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedJoke => response.json({ joke: updatedJoke }))
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}

// delete a joke by id
module.exports.deleteJoke = (request, response) => {
    Joke.deleteJokeOne({ _id: request.params.id })
        .then(result => response.json({ result: result}))
        .catch(err => response.json({message: "Who.. who exactly told you that you're funny? They lied ..", error: err}))
}