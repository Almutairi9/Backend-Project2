const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;
const db = require("./backend/db/db");
const cors = require("cors");
app.use(cors());

const morgan = require("morgan");
app.use(morgan("dev"));

const userRouter = require("./backend/routers/routes/users");
app.use("/users", userRouter);

const commentRouter = require("./backend/routers/routes/comment");
app.use("/comment", commentRouter);

const ratingRouter = require("./backend/routers/routes/rating");
app.use("/rating", ratingRouter);

const bookmarkletRouter = require("./backend/routers/routes/bookmarklet");
app.use("/bookmarklet", bookmarkletRouter);

const {notFound,errorHandler} = require ("./backend/middelware/errorhandler")
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
