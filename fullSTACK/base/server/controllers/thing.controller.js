const { response, request } = require('express');
const { Thing } = require('../models/thing.model');


// ==== CREATE ====
module.exports.createThing = (request, response) => {
    const { name } = request.body
    Thing.create({
        name
    })
        .then(thing => response.json(thing))
        .catch(error => response.json(error))
}

// ==== READ ====
module.exports.getAllThings = (req, res) => {
    Thing.find({})
        .then(things => res.json(things))
        .catch(err => res.json(err))
}

module.exports.getThing = (req, res) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.json(thing))
        .catch(err => res.json(err))
}

// ==== UPDATE ====
module.exports.updateThing = (req, res) => {
    Thing.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
        .then(updatedThing => res.json(updatedThing))
        .catch(err => res.json(err))
}


// ==== DELETE ====
module.exports.deleteThing = (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(deleteConfimation => res.json(deleteConfimation))
        .catch(err=> res.json(err))
}