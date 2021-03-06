var express = require('express')
var app = express()
var useragent = require('express-useragent')
var ip = require("ip")
var port = process.env.PORT || 3000
var address = process.env.IP

app.set('views', __dirname)
app.set('view engine', 'pug')
app.use(express.static(__dirname))
app.use(useragent.express())

app.get('/', function(req, res) {
    res.render('index', {os: req.useragent.os, browser: req.useragent.browser,
                language: req.acceptsLanguages()[0], ip: ip.address()})
})

app.listen(port, address)
