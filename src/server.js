const express = require('express');
const path = require('path');
const pages = require('./pages.js');
const server = express()

server
//Arquivos Estáticos
.use(express.static('public'))

//Configurando Template Engine (HBS)
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Rotas
.get('/', pages.index)
.get('/page-locations', pages.pageLocations)
.get('/create-locations', pages.createLocations)
.get('/locations', pages.locations)


//Servidor
server.listen(5500)