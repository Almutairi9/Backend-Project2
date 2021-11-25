const ratingModel = require("../../db/models/ratingSchema");

const createRating = (req, res) => {
  const { rating } = req.body;

  const newrating = new ratingModel({
    rating,
  });

  newrating
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getOneRating = (req, res) => {
  const { getRating } = req.body;

  ratingModel
    .findOne({ rating: getRating })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createRating, getOneRating };
