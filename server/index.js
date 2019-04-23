const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const mongoose = require("mongoose");

const router = require("./route");

mongoose.connect(
  "mongodb+srv://robin:robin@cluster0-p34fz.mongodb.net/test?retryWrites=true"
);
mongoose.connection
  .once("open", () => console.log("Connecté à MongoDB"))
  .on("error", error => console.log("Erreur de connexion à MongoDB : ", error));

const expressServer = express();
expressServer.use(morgan("combined"));
expressServer.use(bodyParser.json({ type: "*/" }));

router(expressServer);

const port = 3090;
const server = http.createServer(expressServer);
server.listen(port);
console.log("Le serveur écoute sur le port : ", port);
