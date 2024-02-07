import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import Jwt from "jsonwebtoken";

export const singUP = async (req, res, next) => {
  // distructures req.body
  const { username, email, password } = req.body;
  //  create  a hash password using the bryptjs library inside the bryptjs.hashSync() method. by passing cleartext password and second parameter/arguments is number of rounds of hashing to perform. in this case 10 round of hashing are used.
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    //  wait for the user to be created (it take some time to save the user) in the database and then move to next ...
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "User Not Found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      next(errorHandler(401, " Worng credentials "));
    }
    const token = Jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password:hashedPassword , ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
