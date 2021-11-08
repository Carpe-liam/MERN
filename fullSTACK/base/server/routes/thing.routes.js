const ThingController = require('../controllers/thing.controller')

module.exports = function(app) {
    // CREATE
    app.post('/api/things/createThing', ThingController.createThing)
    // READ
    app.get('/api/things', ThingController.getAllThings)
    app.get('/api/things/:id', ThingController.getThing)
    // UPDATE
    app.put('/api/things/:id', ThingController.updateThing)
    // DELETE
    app.delete('/api/things/:id', ThingController.deleteThing)
}