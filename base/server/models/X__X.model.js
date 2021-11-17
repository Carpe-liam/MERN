const mongoose = require('mongoose')

const 'X__x'Schema = new mongoose.Schema({
    keyname: {
        type: String,
        required: [true, ""],
        minlength: [3, ""] 
    }
}, {timestamps: true})

module.exports.'X__x' = mongoose.model("'X__x'", 'X__x'Schema)