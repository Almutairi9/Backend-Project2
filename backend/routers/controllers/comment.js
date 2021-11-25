const commentModel = require("../../db/models/commentSchema");

const createComment = (req, res) => {
  const { comment } = req.body;

  const newComment = new commentModel({
    comment,
  });

  newComment
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getOneComment = (req, res) => {
  const { getComment } = req.body;

  commentModel
    .findOne({ comment: getComment })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { createComment, getOneComment };
