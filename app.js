const express = require('express')
const app = express()
//const gasRouter = require('./controllers/gas')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

app.use(express.json())

app.get('/test',(request, response) => {
    logger.info(request.query)
    response.send('/test')
  })
app.post('/gas',(request, response) => {
    logger.info('POST /gas', request.body)
    response.send('/gas')
  })

//app.use('/gas', gasRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



module.exports = app