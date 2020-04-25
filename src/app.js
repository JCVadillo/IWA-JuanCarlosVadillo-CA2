/*This the server*/

require('./db/db-connection.js')
const express = require('express')
const router = require('./routes')

const app = express()

//Heroku's enviorment port or local port 3000
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port);
