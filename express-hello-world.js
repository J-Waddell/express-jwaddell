// const express = require('express')
// const app = express()
// // console.log(express)

// const time = (req, res, next) => {
//     req.timeRequested = Date.now()
//     next()
// }

// app.get('/', (req, res) => {
//     res.send('Hello, World!')
// })
// app.listen(8080)

//joe sheps way
'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// routes modules
const routes = require('./routes/');

// middleware
const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

const expressStatic = (req, res, next) => {
    res.expressedStatic = __dirname + '/public'
    next()
}

app.use(expressStatic);

app.use(requestTime);

app.use(routes);

app.use( (req, res) => {
  res.send("Where do you think you're going? We only have monkeys and chickens here.")
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
