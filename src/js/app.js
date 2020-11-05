const express = require('express')
const bodyParser = require('body-parser')
const mailer = require('./services/mailer')
const PORT = 9999

import '../scss/style.scss'
import '../img/main.jpg'
import '../img/phone.png'
import '../img/question.png'
import '../img/contacts.png'
import '../img/feedback.png'

import Router from './services/router.js';

new Router()

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.get('/#feedback', (req, res) => {
    res.sendFile(__dirname + "/registration.html")
})

app.post('/', (req, res) => {
    if(!req.body.email || !req.body.userMessage) return res.sendStatus(400)
    const message = {
        to: req.body.email,
        subject: 'Feedback',
        html: req.body.userMessage
    }
    mailer(message)
    res.redirect('/#feedback')
})

app.listen(PORT, () => console.log(`Listening port ${PORT}`))