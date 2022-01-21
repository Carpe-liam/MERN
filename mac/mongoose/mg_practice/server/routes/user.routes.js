// import model controller to be able to access the CRUD functions
const UserController = require("../controllers/user.controller")

// routes are app.get(">html route here<", >ControllerName.functionName),
module.exports = app => {
    app.get("/api/users/", UserController.findAllUsers)
    app.get("/api/users/:id", UserController.findSingleUser)
    app.put("/api/users/update/:id", UserController.updateExistingUser)
    app.post("/api/users/new", UserController.createNewUser)
    app.delete("api/users/delete/:id", UserController.deleteUser)
}