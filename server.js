//dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("./middleware/logger.js");
//create instances
const itemsRouter = require("./routes/items.js");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/items";

app.use(bodyParser.json());
app.use(logger);
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api/items", itemsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", build));
});

mongoose.connect(db, err => {
  if (err) throw err;
  console.log("Connected to the database");
});

app.listen(port, () => console.log("Server running on port " + port));
