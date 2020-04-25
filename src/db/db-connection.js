/*This file will deal
With the MongoDB connection
*/

const mongoose = require('mongoose')

//Connection esablished depent either Local host or heroku's enviorment
if ( process.env.NODE_ENV === 'production') {
    var connectionURL = process.env.connectionURL
} else {
    const config = require('../config')
    var connectionURL = config.connectionURL
    console.log("Me conecte localmente");
}

//Actual DB connection
mongoose.connect( connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
