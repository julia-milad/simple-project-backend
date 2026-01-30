const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  console.log("POST HIT", req.body);
  const { text } = req.body;

  if (!text) return res.status(400).json({ error: "Text required" });

  const msg = { id: Date.now(), text };
  messages.push(msg);

  res.status(201).json(msg);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

