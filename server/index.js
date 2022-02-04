const PORT = 9000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("testing routing");
});
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
