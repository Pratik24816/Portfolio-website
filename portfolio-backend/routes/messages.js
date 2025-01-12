const express = require("express");
const router = express.Router();
const Message = require("../models/Message"); 


router.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

  
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});


router.get("/all", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

module.exports = router;
