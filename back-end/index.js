// Module imports
const express = require('express')
const helmet = require('helmet')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const blogpostsRoutes = require('./routes/BlogpostsRoutes')

// Constants
const PORT = process.env. PORT || 5000
const whitelist = [
  'localhost:3000',
  'https://blog-post---material-ui.web.app/',
  'https://blog-post---material-ui.firebaseapp.com/'
]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

//  Configurations
const app = express()
require('dotenv').config()
app.use(helmet())
app.use(cors())

// Middleware
app.use(helmet())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/images', express.static(`${__dirname}\\public`))
app.use('/', blogpostsRoutes)

//  Database Connections
app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
const database = mongoose.connection

database.on('error', error => {
  console.log(error);
})

database.once('open', () => {
  console.log('**********************************Databse connection successful!**********************************');
})


// Listen to server
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`))

exports.module = app