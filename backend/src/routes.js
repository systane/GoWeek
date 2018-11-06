const express = require('express');

const routes = express.Router();//Módulo de rotas do express

const TweetController = require('./controllers/TweetController');

routes.get('tweets', TweetController.index);
routes.post('tweets', TweetController.store);

module.exports = routes;