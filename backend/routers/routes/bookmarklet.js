const express = require("express");
const {
  createBookmarklet,
  getOneBookmarklet,
  deleteBookmarklet,
  getAllBookmarklet,
} = require("./../controllers/bookmarklet");

const bookmarkletRouter = express.Router();

bookmarkletRouter.post("/add", createBookmarklet);
bookmarkletRouter.get("/display", getOneBookmarklet);
bookmarkletRouter.get("/displayAll", getAllBookmarklet);
bookmarkletRouter.put("/delete/:id", deleteBookmarklet);

module.exports = bookmarkletRouter;
