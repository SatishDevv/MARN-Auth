import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const singUP = async (req, res, next) => {
// distructures req.body
  const { username, email, password } = req.body;
//  create  a hash password using the bryptjs library by passing cleartext password and ...
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
    res.json({ error: error.message });
  }

};
