require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 8956;

connectDB();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("pass serv");
app.use(require("./routes"));

app.listen(PORT, () => console.log("server running"));
