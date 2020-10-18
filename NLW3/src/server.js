//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages')


//iniciando o express
const server = express();

server
  //atualizando arquivos estaticos
  .use(express.static('public'))

  //configurar template engine
  .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    //cria a rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanages', pages.createOrphanage)

  //abre o servidor
  .listen(8080)