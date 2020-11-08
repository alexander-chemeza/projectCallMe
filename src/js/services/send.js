const express = require('express')
var path = require('path')
const bodyParser = require('body-parser')
const mailer = require('./mailer')
const PORT = 9990

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.redirect('/')
})

app.post('/', (req, res) => {
    if(!req.body.email || !req.body.userMessage) return res.sendStatus(400)
    const message = {
        to: req.body.email,
        subject: 'Feedback',
        html: req.body.userMessage
    }
    mailer(message)
    res.redirect('/')
})

app.listen(PORT, () => console.log(`Listening port ${PORT}`))

module.exports = app