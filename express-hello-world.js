const express = require('express')
const app = express()
// console.log(express)

const time = (req, res, next) => {
    req.timeRequested = Date.now()
    next()
}

app.get('/', (req, res) => {
    res.send('Hello, World!')
})
app.listen(8080)
