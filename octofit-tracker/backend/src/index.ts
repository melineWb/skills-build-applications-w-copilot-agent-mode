import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = Number(process.env.PORT) || 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/octofit_tracker";

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("OctoFit Tracker backend is running.");
});

async function start() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB at", MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB or start server:", error);
    process.exit(1);
  }
}

start();
