const express = require('express')
const app = express()

app.get('/api/v1/ping', function(req, res) {
    res.sendStatus(200)
})

app.listen(3000)