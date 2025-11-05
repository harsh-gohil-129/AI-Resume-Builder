import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoute.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

await connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live...");
});

app.use("/api/users", userRoutes);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:3000`);
});
