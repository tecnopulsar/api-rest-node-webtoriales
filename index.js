require("dotenv").config();

const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");

const { notFound, errorHandler } = require("./middlewares");

const api = require("./api/index");
const db = require("./db");

const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(morgan("tiny"));
app.use("/api", api);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App escuchando en el http://localhost:${PORT}`);
});
