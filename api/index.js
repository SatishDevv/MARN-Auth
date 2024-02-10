import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
// it allows you to get the data in json format from the client side,
app.use(express.json());
app.use(cookieParser());

// this is an connection method that is used to connect to the database server. if there is connection error will be returned instead.
mongoose
  .connect(process.env.MONGO_TEST)
  .then(() => {
    console.log("connected to the mongoose database server");
  })
  .catch((err) => {
    console.log(err);
  });

  app.listen(3000, () => {
    console.log("server listening on port 3000");
  });
  

// this is an use method that is used to call the pertcular methods/functions when user hited perticuler URI in browsers search box .
app.use("/api/user", userRoutes);
app.use('/api/auth', authRoutes );


// creata a middlware to handle the error

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})
