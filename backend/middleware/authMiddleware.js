import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = expressAsyncHandler(async (req, res, next) => {
  let token;
  // token = req.cookies.jwt || req?.headers?.authorization?.split(" ")[1];
  //   console.log("cookie",req.cookies.jwt);
  //   console.log("authorization",req?.headers?.authorization);
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (
    req?.headers?.authorization &&
    req?.headers?.authorization.startsWith("Bearer")
  ) {
    token = req?.headers?.authorization?.split(" ")[1];
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
