const express = require('express'); //importa a dependencia do node_modules (express)
const mongoose = require('mongoose');
const cors = require('cors');

const app = express(); //instancia a aplicação

const server = require('http').Server(app); //Extrai o servidor http criado com o express
const io = require('socket.io')(server); //habilita o servidor para escutar o protocolo WS(WebSocket), além do Http comum


mongoose.connect('mongodb://root:root123@ds155203.mlab.com:55203/goweek-systane', {
    useNewUrlParser: true
});


//Cria um middleware
app.use((req, res, next) =>{
    req.io = io; //Cria uma nova variavel em cada requisição

    return next(); //Continua com a próxima requisição
});

app.use(cors());//habilita o cors
app.use(express.json());//Indica que as requisições serão em json
app.use(require('./routes'));

//Aloca a aplicação (app) na porta 3000 e executa uma função de callback quando o servidor iniciar
server.listen(3000, ()=>{
    console.log('Server started on port 3000 :)');
});

