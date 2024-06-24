import expressAsyncHandler from "express-async-handler";
// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = expressAsyncHandler(async (req,res) =>{
    res.status(404);
    throw new Error("auth error");
    res.status(200).json({message:"Auth user"})
});

// @desc Register a new user
// route POST /api/users/register
// @access Public
const registerUser = expressAsyncHandler(async (req,res) =>{
    res.status(200).json({message:"Register user"})
});

// @desc Logout User
// route POST /api/users/logout
// @access Private
const logoutUser = expressAsyncHandler(async (req,res) =>{
    res.status(200).json({message:"Logout user"})
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = expressAsyncHandler(async (req,res) =>{
    res.status(200).json({message:"User profile"})
});

// @desc update user profile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = expressAsyncHandler(async (req,res) =>{
    res.status(200).json({message:"Update user profile"})
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}