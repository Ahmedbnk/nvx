
const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;
const DATA_FILE = "./data.json";

app.use(cors());
app.use(express.json());

// Load users
const loadUsers = () => {
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

// Save users
const saveUsers = (users) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2), "utf-8");
};

// Get all users
app.get("/users", (req, res) => {
  const users = loadUsers();
  res.json(users);
});

// Update votes
app.post("/vote/:id", (req, res) => {
  const users = loadUsers();
  const userId = parseInt(req.params.id);

  const user = users.find((user) => user.id === userId);
  if (user) {
    user.vote += 1;
    saveUsers(users);
    res.json({ success: true, user });
  } else {
    res.status(404).json({ success: false, message: "User not found" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
