const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL, // Use the FRONTEND_URL variable
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions)); // Enable CORS with the defined options
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
    process.exit(1); // Exit if MongoDB connection fails
  });

// Use the message routes
app.use("/api/messages", messageRoutes);

// Default API message to confirm server is running
app.get("/", (req, res) => {
  res.json({ message: "API is connected and working!" });
});

// Error handling for invalid routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
