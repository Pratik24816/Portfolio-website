const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const messageRoutes = require("./routes/messages");

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
  .connect("mongodb+srv://prajapatipm16:3ClpFm4uUsxIKPjM@portfolio.noz1l.mongodb.net/PortfolioDB?retryWrites=true&w=majority&appName=PortFolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));


app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
