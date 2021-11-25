const express = require("express");
const {
  createUser,
  authUser,
  getOneuser,
  getAllUsers,
  updateUser,
  softDeleteUser,
} = require("./../controllers/users");

const userRouter = express.Router();

userRouter.post("/", createUser); // signup 
userRouter.post("/login", authUser);
userRouter.get("/show", getOneuser);
userRouter.get("/showAll", getAllUsers);
userRouter.put("/update/:id", updateUser);
userRouter.put("/delete/:id", softDeleteUser); 

module.exports = userRouter;
