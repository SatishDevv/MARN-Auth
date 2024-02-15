import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from './routes/auth.route.js'
import cookieParser from "cookie-parser";
import connectDB from "./db/connection.js";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express();
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});    

// it allows you to get the data in json format from the client side,
app.use(express.json());
app.use(cookieParser());

// this is an connection method that is used to connect to the database server. if there is connection error will be returned instead.
connectDB()
.then(() => {
    console.log("connection established");
})
.catch((error) =>{
    console.log(`this is DB connection error ${error}`); 
})

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
