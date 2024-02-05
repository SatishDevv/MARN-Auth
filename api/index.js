import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
dotenv.config();

const app = express();
// this is an connection method that is used to connect to the database server. if there is connection error will be returned instead.
mongoose
  .connect(process.env.MONGO_TEST)
  .then(() => {
    console.log("connected to the mongoose database server");
  })
  .catch((err) => {
    console.log(err);
  });

// this is an use method that is used to call the pertcular methods/functions when user hited perticuler URI in browsers search box .
app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
