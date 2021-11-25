const bookmarkletModel = require("../../db/models/bookmarklet");

const createBookmarklet = (req, res) => {
  const { bookmarklet } = req.body;

  const newBookmarklet = new bookmarkletModel({
    bookmarklet,
  });

  newBookmarklet
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getOneBookmarklet = (req, res) => {
  const { getBookmarklet } = req.body;

  bookmarkletModel
    .findOne({ bookmarklet: getBookmarklet })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllBookmarklet = (req, res) => {
  //// set limit with loading functions *******************************
  bookmarkletModel
    .find({})
    .limit(1)
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

///// Soft Delete
const deleteBookmarklet = (req, res) => {
  const { id } = req.params;
  bookmarkletModel
    .findOneAndUpdate({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createBookmarklet,
  getOneBookmarklet,
  deleteBookmarklet,
  getAllBookmarklet,
};
