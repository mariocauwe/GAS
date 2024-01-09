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

  /**
   * X-Goog-Channel-ID: channel-ID-value
X-Goog-Channel-Token: channel-token-value
X-Goog-Channel-Expiration: expiration-date-and-time // In human-readable format. Present only if the channel expires.
X-Goog-Resource-ID: identifier-for-the-watched-resource
X-Goog-Resource-URI: version-specific-URI-of-the-watched-resource
X-Goog-Resource-State: sync
X-Goog-Message-Number: 1
   */
app.post('/gas',(request, response) => {
    logger.info('POST /gas', request.get('X-Goog-Channel-Token'), request.get('X-Goog-Resource-ID'))
    response.send('/gas')
  })

//app.use('/gas', gasRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)



module.exports = app