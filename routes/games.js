const { Router } = require('express');
const path = require('path');

const gameRouter = Router();

gameRouter.get('/boardgames', (req, res, next) => {
  console.log("Fetching some boardgames");
  res.sendFile(path.join(__dirname, '../public', 'boardgames.html'));
});

gameRouter.get('/videogames', (req, res, next) => {
  console.log("Fetching videogames");
  res.send(`<h3>Search for Games</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`);
});

gameRouter.post('/videogames', (req, res, next) => {
  console.log("submitting a form post request for videogames");
  // res.send("Go outside and play")
  next();
});

module.exports = gameRouter;