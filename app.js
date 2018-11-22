const express = require('express')
const app = express()
const flash = require('express-flash')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const services  = require('./Services/services')
const api = require('./api/api')
const postgres = require('pg')
// const logic = require('./public/domFunc')
const Pool = postgres.Pool

const axios = require('axios')

const connectionString = process.env.DATABASE_URL || 'postgresql://coder:pg123@localhost:5432/salad'

const pool = new Pool({
  connectionString
})

// const weather = logic()
const Holder = services(pool)
const routes = api(Holder)

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  
  }))
  app.use(flash())
  app.use(bodyParser.json())
  app.set('view engine', 'handlebars')
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(session({
    secret: '<add a secret string here>',
    resave: false,
    saveUninitialized: true
  }))


app.get('/api',routes.all),
app.get('/api/clothing/:weather_rating', routes.clothesForWeather)



let PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('App starting on port', PORT)
})