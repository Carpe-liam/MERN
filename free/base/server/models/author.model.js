const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name required"],
        minlength: [3, "First name must be 3 characters long"] 
    },
    lastName: {
        type: String,
        required: [true, "Last name required"],
        minlength: [3, "Last name must be 3 characters long"] 
    },
    birthday: {
        type: String,
        required: [true, "Birthday Required"]
    },
    grade: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports.Author = mongoose.model("Author", AuthorSchema)