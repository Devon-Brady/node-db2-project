const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Cars= require("./cars-model");

router.get("/", (req, res) => {
  Cars.get().then((cars) => {
    res.status(200).json(cars);
  });
});
 module.exports = router;