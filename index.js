const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("./api");

app.listen(3000, () => {
  console.log("Servidor arrancado!");
});
