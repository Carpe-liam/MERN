const { request } = require("express")
const { xx } = require("../models/"x___X")

// ==== CREATE ====
module.exports.create'X__x' = (req, res) => {
    const { keyname, keyname } = req.body
    X__x.create({
        keyname,
        keyname
    })
        .then(x__x => res.json(x__x))
        .catch(err => {
            console.log("Validation Failed")
            res.status(400).json(err)
        })
}
// ===== READ =====
module.exports.getAll'X__x' = (req, res) => {
    X__x.find()
        .then(x__x => res.json(x__x))
        .catch(err=> res.json(err))
}

module.exports.get'X__x' = (req, res) => {
    X__x.findOne({ _id: req.params.id })
        .then(x__x => res.json(x__x))
        .catch(err => res.json(err))
}
// ==== UPDATE ====
module.exports.update'X__x' = (req, res) => {
    X__x.findByIdAndUpdate({ _id: req.params.id }, req.body, {runValidators: true, new: true})
        .then(updated'X__x' => res.json(updated'X__x'))
        .catch(err => res.status(400).json(err))
}

// ==== DELETE ====
module.exports.delete'X__x' = (req, res) => {
    X__x.deleteOne({ _id: req.params.id })
        .then(deleteConf => res.json(deleteConf))
        .catch(err => {
            console.log("Validation Failed")
            res.status(400).json(err)
        })
}