const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
  origin: "https://portfolio-website-pratikf.vercel.app", // Your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions)); // Enable CORS with the defined options
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://prajapatipm16:3ClpFm4uUsxIKPjM@portfolio.noz1l.mongodb.net/PortfolioDB?retryWrites=true&w=majority&appName=PortFolio")
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
