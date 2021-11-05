// IMPORT OUR MODELS FOR THIS CONTROLLERS
const { response, request } = require("express")
const User = require("../models/user.model")

// THE FOLLOWING ARE FUNCTIONS THAT PERFORM BASIC CRUD OPERATIONS USING OUR MODEL

// get all users
module.exports.findAllUsers = (request, response) => {
    User.find()
        .then(allUsers => response.json({users: allUsers}))
        .catch(err => response.json({message: "Something went wrong", error: err}))
}

// get one user by id
module.exports.findSingleUser = (request, response) => {
    User.findOne({ _id: request.params.id })
        .then(singleUser => response.json({ user: singleUser }))
        .catch(err => response.json({message: "Something went wrong", error: err}))
    }

// create a new user
module.exports.createNewUser = (request, response) => {
    User.create(request.body)
        .then(createdNewUser=> response.json({ user: createdNewUser }))
        .catch(err => response.json({message: "Something went wrong", error: err}))
}

// make a change to existing user
module.exports.updateExistingUser = (request, response) => {
    User.findOneAndUpdate({ _id: request.params.id }, request.body, {new: true})
        .then(updatedUser => response.json({ user: updatedUser}))
        .catch(err=> response.json({ message: "Something went wrong", error: err}))
}

// delete a user by id
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(err => response.json({ message: "Something went wrong", error: err}))
}