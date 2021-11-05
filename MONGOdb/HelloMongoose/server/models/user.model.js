const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: String,
	age: Number,
	pets: Number, 
	fave_food: String
});

const User = mongoose.model("User", UserSchema);

const newUser = new User({name: "Sean", age: 47, pets: 1, fave_food: "Thai"})
newUser.remove({_id: '6183fe9d84b19c4786ee8431'})


module.exports = User;