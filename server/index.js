const PORT = 9000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.json("testing routing");
});
app.listen(8000, () => console.log("server is running on port 9000"));
