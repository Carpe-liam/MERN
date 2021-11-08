const mongoose = require('mongoose')

const ThingSchema = new mongoose.Schema({
    name: String
}, {timestamps: true})

module.exports.Thing = mongoose.model("Thing", ThingSchema)