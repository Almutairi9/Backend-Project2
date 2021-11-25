const asyncHandler = require("express-async-handler");
const User = require("../../db/models/userSchema");

const createUser = asyncHandler(async (req, res) => {
  const { userName, email, password, phoneNumber, age, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(" User Already Exists");
  }
  const user = await User.create({
    userName,
    email,
    password,
    phoneNumber,
    age,
    pic,
  });

  if (user) {
    res.status(200).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      age: user.age,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured !");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      age: user.age,
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password !");
  }
});
const getOneuser = (req, res) => {
  const { getUser } = req.body;

  userModel
    .findOne({ userName: getUser })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const getAllUsers = (req, res) => {
  //// set limit with loading functions *******************************
  userModel
    .find({})
    .limit(13)
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { userName, age, phoneNumber, email } = req.body;
  try {
    const user = await User.find({ _id: id });

    const newData = await User.findOneAndUpdate(
      { _id: id },
      {
        age: age ? age : user.age,
        phoneNumber: phoneNumber ? phoneNumber : user.phoneNumber,
        email: email ? email : user.email,
        userName: userName ? userName : user.userName,
      },
      { new: true }
    );
    console.log("NEW DATA", newData);

    res.status(200).json(newData);
  } catch (error) {
    console.log("update profile error", error);
  }
};

const softDeleteUser = (req, res) => {
  const { id } = req.params;
  const { age } = req.body;
  userModel
    .findOneAndUpdate({ _id: id }, { age: age })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createUser,
  authUser,
  getOneuser,
  getAllUsers,
  softDeleteUser,
  updateUser,
};
