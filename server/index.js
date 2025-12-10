
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/mongo.config.js";
import reportRoutes from "./src/routes/report.route.js";
import Asset from "./src/models/asset.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// app.get("/api/message" , (req, res) => {
//   res.json({ message: "hello"});
// });
app.get("/", (req, res) => {
    res.send("Asset Management Backend is running...");
});

// Reporting Routes
app.use("/api/reports", reportRoutes);

//Insert assets in DB
app.post("/api/assets", async (req, res) => {
  try {
    const asset = await Asset.create(req.body);
    res.json(asset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(5000, () => console.log("Backend running on port 5000"));
