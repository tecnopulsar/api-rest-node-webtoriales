const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Obteniendo recursos de atletas");
});

router.get("/", (req, res) => {
  res.send("Obteniendo recursos de atletas");
});

router.post("/", (req, res) => {
  res.send("Creando un nuevo recurso de atletas");
});

router.put("/", (req, res) => {
  res.send("Agregar un nuevo recurso de atletas");
});

router.delete("/", (req, res) => {
  res.send("Eliminar un recurso de atletas");
});

module.exports = router;
