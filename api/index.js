require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(require("cors")());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));

app.listen(PORT, () => console.log("server running"));
