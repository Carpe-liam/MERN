const AuthorController = require("../controllers/author.controller")

module.exports = function(app) {
    // CREATE
    app.post('/authors/new', AuthorController.createAuthor)
    // READ
    app.get('/authors', AuthorController.getAllAuthors)
    app.get('/authors/:id', AuthorController.getAuthor)
    // UPDATE
    app.put('/authors/:id', AuthorController.updateAuthor)
    // DELETE
    app.delete('/authors/:id', AuthorController.deleteAuthor)
} 