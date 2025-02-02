const express = require("express");
const cors = require("cors");
const mongoose = require("./config/db");
const faqRoutes = require("./routes/faqRoutes");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", faqRoutes);
app.use("/api/faqs", faqRoutes);
app.get("/display", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "display.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
