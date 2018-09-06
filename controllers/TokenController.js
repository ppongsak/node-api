var express = require('express')
var bodyParser = require('body-parser')

// Require middleware modules.
var middlewareRequest = require('../middleware/basicAuth')
// var Token = require('../models/Token')

var app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

exports.validateCredential = async function(req, res, next) {
    console.log('tokenController')
    try {
        const checkToken = await middlewareRequest.validate(req)
        next()
    } catch (error) {
        next(error)
    }

    res.json(200, {
        status: 'ok',
        code: 200,
        data: { name: 'pongsak', lastname: 'prabparn' }
    })
}