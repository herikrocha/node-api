const express = require('express'); 
const cors = require('cors'); //Permitir acesso externo à app, por outros domínios
const mongoose = require('mongoose'); 
const requireDir = require('require-dir'); //Pra nao precisar ficar dando require em cada tabela(model)

//Iniciando o App
const app = express(); 
app.use(express.json()); //permitir que eu envie dados pra minha app no formato json
app.use(cors()); //Default é permitir acesso a toda a app

//Iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models'); //require em todos os models

//Rotas
app.use('/api', require('./src/routes')); //Coringa: recebe todo tipo de requisicao: post, get, delete

app.listen(3001); //ouvir porta 3001 do navegador