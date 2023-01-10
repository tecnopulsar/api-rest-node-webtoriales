const express = require("express");
const router = express.Router();

const deportesRouter = require("./deportes");
const atletasRouter = require("./atletas");

router.use("/deportes", deportesRouter);
router.use("/atletas", atletasRouter);

module.exports = router;
