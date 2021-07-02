const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()

app.use(serveStatic(path.join(__dirname, 'public')))
app.use(serveStatic(path.join(__dirname, 'node_modules/twilio-video/dist/')))
app.use(serveStatic(path.join(__dirname, 'node_modules/@twilio/video-processors/dist/build')))
app.listen(3000)
