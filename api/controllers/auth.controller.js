import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const singUP = async (req, res, next) => {
// distructures req.body
  const { username, email, password } = req.body;
//  create  a hash password using the bryptjs library inside the bryptjs.hashSync() method. by passing cleartext password and second parameter/arguments is number of rounds of hashing to perform. in this case 10 round of hashing are used.
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password:hashPassword,
  });

  try {
//  wait for the user to be created (it take some time to save the user) in the database and then move to next ... 
    await newUser.save();
    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    next(error)
  }

};
