const express = require("express");
const router = express.Router();
const validator = require("./members.validation");
const { list, subscribe } = require("./members.controller");

router.get("/list", (req, res) => {
  list(req, res);
});

router.post("/subscribe", async (req, res) => {
  const { errors, isValid } = validator.subscribe(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  subscribe(req, res);
});

module.exports = router;
