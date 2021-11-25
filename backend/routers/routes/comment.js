const express = require("express");
const { createComment, getOneComment } = require("./../controllers/comment");

const commentRouter = express.Router();

commentRouter.post("/add", createComment);
commentRouter.get("/display", getOneComment);

module.exports = commentRouter;
