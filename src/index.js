const express = require("express");
const path = require("path");
const port = process.env.PORT || 5500;
const app = express();
const server = require("http").createServer(app);

const iniciarServer = () => {
  var publicPath = path.resolve(__dirname, "../views");
  app.use(express.static(publicPath));
  // set the view engine to ejs
  app.set("view engine", "ejs");

  app.get("/", function (req, res) {
    res.render("pages/index.ejs");
  });
  app.get("/redes", function (req, res) {
    res.render("pages/redes.ejs");
  });
  app.get("/contacto", function (req, res) {
    res.render("pages/contacto.ejs");
  });
  server.listen(port, () => {
    console.log(`El server esta corriendo el puerto:${port}`);
  });
};
iniciarServer();
