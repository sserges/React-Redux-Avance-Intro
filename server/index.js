const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");

const expressServer = express();

const router = require("./route");

expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({ type: "*/" }));

const port = 3090;
const server = http.createServer(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);
