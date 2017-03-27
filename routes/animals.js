const { Router } = require('express')
const path = require('path')

const animalRouter = Router()

animalRouter.get('/monkeys', (req, res, next) => {
  console.log("Fetching some monkeys");
  console.log(`This ran at ${req.requestedTime}`)
  res.sendFile(path.join(__dirname, '../public', '/public/monkeys.html'));
});

animalRouter.get('/chickens', (req, res, next) => {
  console.log("Lookin fer chickens");
  res.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
});

animalRouter.post('/chickens', (req, res, next) => {
  console.log("Posting a form for chickens");
});

module.exports = animalRouter
