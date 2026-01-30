const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text required" });

  const msg = { id: Date.now(), text };
  messages.push(msg);
  res.status(201).json(msg);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
