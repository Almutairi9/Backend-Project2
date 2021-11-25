const express = require("express");
const { createRating, getOneRating } = require("./../controllers/rating");

const ratingRouter = express.Router();

ratingRouter.post("/addRating", createRating);
ratingRouter.get("/displayRating", getOneRating);

module.exports = ratingRouter;
