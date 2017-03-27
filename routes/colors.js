const { Router } = require('express')
const path = require('path')

const colorRouter = Router()

colorRouter.get('/colors', (req, res, next) => {
    console.log("Got some colors here for ya")
    res.sendFile(path.join(__dirname, '../public', 'colors.html'))
})

module.exports = colorRouter