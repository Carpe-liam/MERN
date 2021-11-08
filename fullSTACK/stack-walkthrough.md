# MERN STACK WALKTHROUGH GUIDE

1. Open up terminal, create new project folder and enter into it:
    - =>` mkdir projectName`
    - => `cd project `

2. Create new package & package.json:
    - => `npm init -y`

3. Install dependencies:
    - => `npm install express`
    - => `npm install mongoose`

4. Create server.js:
    - => Mac: ` touch server.js `
    - => PC: `copy nul server.js `

5. Open server.js with vscode:
    ``` js
    const express = require('express')
    const app = express()
    const port = 8000

    app.listen(port, () => console.log(`Listening on port: ${port}`) )

6. Check everything so far runs: 
    ``` t
    nodemon server.js
    ctrl+c

7. Get server folder created: 
    ``` t
    mkdir server
    cd server
    mkdir config
    mkdir controllers
    mkdir models
    mkdir routes

8. Create react app client folder (Front end):
    ``` t
    cd ..
    npx create-react-app client

9. Create controller under controllers:
    `thing.controller.js`
    -   now add start code: 
    ``` js
    module.exports.index = (request, response) => {
        response.json({
            message: "hello world"
        })
    }

10. Create route under routes:
    `thing.routes.js`
    -   now add start code:
    ``` js
    const ThingController = require("..controllers/thing.controller")

    module.exports = function(app) {
        app.get('/api', ThingController.index)
    }

11. Go to `server.js` and enter the requirement for routes:
    ``` js
    require('./server/routes/thing.routes')(app)

12. Can send get request on postman to `localhost:8000/api` which should give "Hello World"


---


## Client Steps

1. Install axios into client folder:
    ``` t
    npm install axios

2. Make a `Main.js` in `src` and enter following code: 
    ``` js
    import React, { useEffect, useState } from 'react'
    import axios from 'axios'

    export default () => {
        const [message, setMessage ] = useState("Loading...")

        useEffect(() =>{
            axios.get('http://localhost:8000/api')
                .then(response => {
                    setMesage(response.data.message)
                })
        }, [])

        return (
            <div>
                <h2> Message from backend: {message}</h2>
            </div> 
        )
    }

3. Clear out `App.js` and import Main:
    ``` js
    import React from 'react'
    import Main from './Main' /*(still in source)*/
    function App() {
        return(
            <div className="App">
                <Main />
            </div>
        )
    }

    export default App

4. In client, run react project:
    ``` t
    npm run start

5. check `localhost:3000`
    - should only have: `Message from backend: Loading...` displayed on page
    - this is because there's no data coming in from API

6. Install cors inside the `PROJECT FOLDER`
    ``` t 
    npm install cors

7. Import/require cors in `server.js` so the file looks like:
    ``` js
    const express = require('express')
    const cors = require('cors')

    const app = express()
    app.use(cors())
    const port = 8000

    app.listen(port, () => console.log(`Listening on port: ${port}`) )

8. Check `localhost:3000` and see if the message changes
    - should display:  `Message from backend: hello world`


---

---

# TIME FOR FULL CRUD - SERVER-SIDE

1. Go to `server` folder and create a new `mongoose.config.js` and enter:
    ``` js
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost/>>>DBNAME<<<', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
        .then(() => console.log("Database connection established. DB: >>>DBNAME<<< "))
        .catch(error => console.log("There was an error", error))

2. Create your thing model in `./server/models`. boiler-code:
    ``` js
    const mongoose = require('mongoose')

    const ThingSchema = new mongoose.Schema({
        keyname?: type 
        /*example of above*/
        firstName: String,
        age: Number
    }, {timestamps: true})

    module.exports.Thing = mongoose.model("Thing", ThingSchema)

3. Reconfigure `server.js` to be able to send post request and full CRUD capabilty with API. boiler-code:
    ``` js
    // ==== IMPORT AND INSTANTIATE EXPRESS SERVER
    const express = require('express')
    const cors = require('cors')
    const port = 8000
    const app = express()

    // ==== CONNNECT MONGOOSE TO MONGO-DB
    require('./server/config/mongoose.config')

    // ==== CONFIGURE FOR EXPRESS SERVER
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))


    // ==== CONNECT EXPRESS TO ROUTES
    require("./server/routes/product.routes")(app)

    // ==== RUN EXPRESS SERVER
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    })

4. Edit `thing.controller.js` to be able to create a thing:
    ``` js
    const { Thing } = require('../models/thing.model')

    module.exports.index = (request, response) => {
        response.json({
            message: "hello world"
        })
    }

    module.exports.createThing = (request, response) => {
        const { keyName, keyName2, ... } = request.body
        Thing.create({
            keyName,
            keyName2
        })
            .then(thing => response.json(thing))
            .catch(error => response.json(error))
    }

5. Add routes to `thing.routes.js` to allow functionality:
    ``` js
    const ThingController = require("..controllers/thing.controller")

    module.exports = function(app) {
        // CREATE
        app.post('/api/createaddress', ThingController.createThing)
        // READ
        app.get('/api/', ThingController.index)
        // UPDATE
        // DELETE
    }

6. Test Post request with Postman: 
    - set request to post
    - `localhost:8000/api/createaddress`
        - enter in `keyName` + value
        - enter in `keyName2` + value
    - should display a successful post request

---
---

# CLIENT SIDE - POST REQUEST W/ FORM

1. In `./client/src` create `Components` and `Views` folders

2. move `Main.js` into Views folder
    - update `App.js` import to `'./views/Home.js'`

3. In `Components` create `ThingForm.js`. boiler-code:
    ``` js
    import React, { useState } from 'react'
    import axios from 'axios'

    export default props => {
        const [ keyName, setKeyName ] = useState("")
        const [ keyName2, setKeyName2 ] = useState("")

        const onSubmitHandler = e => {
            e.preventDefault()

            axios.post('http://localhost:8000/api/createThing', {
                keyName,
                keyName2
            })
                .then(response => console.log("Response: ", response))
                .catch(error => console.log("Error: ", error))
        }


        return(
            <form onSubmit={ onSubmitHandler }>
                <p>
                    <label>keyName</label>
                    <input type="text" onChange={e => setKeyName(e.target.value)}>
                </p>
                <p>
                    <label>keyName2</label>
                    <input type="text" onChange={e => setKeyName2(e.target.value)}>
                </p>
                <input type="submit">
            </form>
        )
    }

4. Now we will utilize that form in our `Main.js` by removing everything and importing `ThingForm.js`
    ``` js
    import React, { useEffect, useState } from 'react'
    import ThingForm from '../Components/ThingForm'

    export default () => {

        return(
            <ThingForm />
        )
    }

5. Open 2 terminals: Helpful to have them side by side: 
    - in `projectname/client` directory, run `npm run start`
    - in `projectname` directory, run `nodemon server.js`

6. Everything should be running, so lets go to `localhost:3000`
    - our form should be displaying and if we open `inspect > console` when we hit the submit button, the data is logged in json format and we can go in and see it!