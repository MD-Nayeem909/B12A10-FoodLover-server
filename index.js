import "dotenv/config";
import cors from "cors";
import express from "express";
import morgan from "morgan";

import { connectDB } from "./dbConnection.js";

import router from "./router/authRoutes.js";
import reviewRoutes from "./router/reviewRoutes.js";
import userRouter from "./router/userRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "https://b12-a10-food-lover-client.vercel.app", // Allow only your client's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  })
);

// middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", router);
app.use("/api/reviews", reviewRoutes);
app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.send("Welcome to FoodLovers API");
});

connectDB(async () => {
  app.listen(port, () => {
    console.log(`FoodLovers app listening at http://localhost:${port}`);
  });
});
