const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas without deprecated options
mongoose
  .connect(process.env.MONGO_URI || "mongodb+srv://prajapatipm16:3ClpFm4uUsxIKPjM@portfolio.noz1l.mongodb.net/PortfolioDB?retryWrites=true&w=majority&appName=PortFolio")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Use the message routes
app.use("/api/messages", messageRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
