const express = require("express");
const db = require("../../data/dbConfig");

const router = express.Router();

router.get("/", (req, res, next) => {
  db("cars")
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  db("cars")
    .where(req.params)
    .first()
    .then((cars) => {
      res.json(cars);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  db("cars")
    .insert(req.body)
    .then((ids) => {
      return db("cars").where({ id: ids[0] });
    })
    .then((newCar) => {
      res.status(201).json(newCar[0]);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  const env = process.env.NODE_ENV || "development";
  const message =
    env === "development" ? err.message : "something bad happened";
  res.status(500).json(message);
});

module.exports = router;
