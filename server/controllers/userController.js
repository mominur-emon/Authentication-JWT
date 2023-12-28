const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc   Auth user/set token
//route   POST/api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

//@desc   Register a new user
//route   POST/api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Register User" });
});

//@desc   Logout user
//route   POST/api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "LogOut User" });
});

//@desc   Get user profile
//route   GET/api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile " });
});

//@desc   Update user profile
//route   PUT/api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile " });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
