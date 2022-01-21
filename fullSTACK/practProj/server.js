const express = require('express')
const app = express()
const port = 8000

require('./server/routes/person.routes')

app.listen(port, () => console.log(`Listening on port: ${port}`) )