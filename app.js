const express = require('express')
const logger = require('morgan')
const path = require('path')
const http = require('http')
const config = require('./config/config')
const app = express()

const homeRoutes = require('./routes/home')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', homeRoutes)
app.set('port', config.httpServer.port)


const server = http.createServer(app)
server.on('listening', onListening)
server.listen(config.httpServer.port)


function onListening () {
  console.log(config.appName + ' is listening on ' + config.httpServer.port)
}

process.on('SIGINT', function () {
  console.log(config.appName + ' stopped. ')
  process.exit()
})

module.exports = app
