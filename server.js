const express= require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')

const router = require('./routes')

let app = express()
//use modules
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
//use router to resolve routes
app.use('/', router)
//start app
const dbConfig = require('./dbconfig')
dbConfig(() => {
    app.listen(3000)
})