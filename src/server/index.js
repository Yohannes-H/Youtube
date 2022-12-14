//for using ES Modules instead of CommonJS, the type property must be specified with a value of "module"
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to MongoDB");
    })
    .catch((error) => {
      throw error;
    });
};
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//MIDDLEWARE
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to server");
});
