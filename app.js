import express from 'express';
import cors from "cors"
import authRoutes from "./routes/authRoutes.js"
import dotenv from "dotenv"
import connectDB from './config/db.js';

// Load environment variables from .env
dotenv.config();

//connect to database
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Define your routes
app.use("/api/auth", (req, res, next) => {
    console.log(`API Request Received: ${new Date().toISOString()} - Method: ${req.method} - Path: ${req.originalUrl}`);
    next();
  }, authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World from the backend!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
