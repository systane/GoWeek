const express = require('express'); //importa a dependencia do node_modules (express)
const mongoose = require('mongoose');

const app = express(); //instancia a aplicação

mongoose.connect('mongodb://root:root123@ds155203.mlab.com:55203/goweek-systane', {
    useNewUrlParser: true
});

app.use(require('./routes'));

//Aloca a aplicação (app) na porta 3000 e executa uma função de callback quando o servidor iniciar
app.listen(3000, ()=>{
    console.log('Server started on port 3000 :)');
});

