const { Router } = require('express')
const path = require('path')

const watRouter = Router()

watRouter.get('/wat', (req, res, next) => {
    console.log("Do not touch my wat")
    res.sendFile(path.join(__dirname, '../public', 'wat.html'))
})

module.exports = watRouter