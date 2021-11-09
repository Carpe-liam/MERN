const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be 3 characters long"] 
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, "Last name must be 3 characters long"] 
    }
}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema)