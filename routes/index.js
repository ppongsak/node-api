var express = require('express')
var router = express.Router()

// Require controller modules.
var tokenController = require('../controllers/TokenController')

// var gcp = require('../controllers/gcp')

//	the client application makes an authorization request to the authorization
//	Authorization = Basic
//  grant_type=client_credentials
//	client = rebate
//	password = 6rebate
// 	POST /token to get access token

// Token
// router.post('/token', middlewareRequest.validate)
// router.get('/gcp', gcp)
router.post('/token', tokenController.validateCredential)

module.exports = router
