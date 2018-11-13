const express = require('express');

const routes = express.Router();//Módulo de rotas do express

const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store);

routes.post('/user', UserController.store);
routes.get('/user', UserController.listAll);

module.exports = routes;