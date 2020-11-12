const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const bodyParser = require('body-parser')
const mailer = require('./mailer')

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
const config = require('../../../webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));



app.post('/feedback', (req, res) => {
    if(!req.body.email || !req.body.userMessage){
        return res.sendStatus(400)
    }
    const message = {
        to: req.body.email,
        subject: 'Feedback',
        html: req.body.userMessage
    }
    mailer(message)
    res.redirect('http://localhost:9999/#feedback')
})

// Serve the files on port 3000.
app.listen(9999, function () {
    console.log('Example app listening on port 9999!\n');
});