var auth = require('basic-auth')

exports.validate = function(req, res, next) {
    var credentials = auth(req)
    // res.json({ name: credentials.name, pass: credentials.pass })
    // res.json(200, req.body)

    if (
        !credentials ||
        credentials.name !== 'rebate' ||
        credentials.pass !== 'rebate'
    ) {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic cmViYXRlOnJlYmF0ZQ==')
        res.end('Access denied')
    } else {
        console.log('Access : ')
        next()
    }
}
