require('dotenv').config()

const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    },
    {
        from: 'mailer'
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) {
            throw err
        } else {
            console.log('Email sent: ', info)
        }
    })
}

module.exports = mailer