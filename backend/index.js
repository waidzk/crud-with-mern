import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
const mongodb = "mongodb://127.0.0.1:27017/fullstack_db";
mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database connected"));

//MIDDLEWARE
app.use(cors());
//agar kita dapat menerima data dalam format json
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("server up and running..."));
