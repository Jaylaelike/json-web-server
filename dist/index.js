"use strict";

var jsonServer = require('json-server');
var server = jsonServer.create();
// const fs = require("fs");
// const filePath = fs.writeFileSync('db.json', JSON.stringify(data));

var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = process.env.PORT || 3001;
var cors = require('cors');
server.use(cors({
  origin: true,
  credentials: true,
  preflightContinue: false,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}));
server.options('*', cors());
server.use(middlewares);
server.use(router);
server.listen(port, function () {
  console.log('JSON Server is running');
});