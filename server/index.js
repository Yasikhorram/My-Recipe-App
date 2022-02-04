const PORT = 9000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

//This enables json middleware on every route we create for our API
app.use(express.json());

app.use(cors());
//test route
app.get("/", (req, resp) => {
  success: "Hello testing";
});

// listen on the port
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
