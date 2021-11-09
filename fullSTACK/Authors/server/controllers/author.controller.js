const { request } = require("express")
const { Author } = require("../models/author.model")

// ==== CREATE ====
module.exports.createAuthor = (req, res) => {
    const { firstName, lastName } = req.body
    Author.create({
        firstName,
        lastName
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}
// ===== READ =====
module.exports.getAllAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err=> res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}
// ==== UPDATE ====
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
}

// ==== DELETE ====
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConf => res.json(deleteConf))
        .catch(err => res.json(err))
}