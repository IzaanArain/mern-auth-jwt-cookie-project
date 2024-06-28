import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Register a new user
// route POST /api/users/register
// @access Public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({
    name,
    email: email.toLowerCase(),
    password,
  });

  if (user) {
    const token = generateToken(res, user._id);
    return res.status(201).json({
      status: 1,
      message: "User created successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email.toLowerCase() });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(res, user._id);
    return res.status(201).json({
      status: 1,
      message: "User created successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Logout User
// route POST /api/users/logout
// @access Private
const logoutUser = expressAsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ status: 1, message: "User logged out" });
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json({ status: 1, message: "User profile", data: user });
});

// @desc update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = expressAsyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const profileImagePath = req?.files?.profileImage && req?.files?.profileImage.length > 0
      ? req?.files?.profileImage[0].path
      : user?.profileImage;
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    return res.status(200).json({
      status: 1,
      message: "User created successfully",
      data: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        profileImage : profileImagePath
      },
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
