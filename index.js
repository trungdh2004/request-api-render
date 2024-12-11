const express = require("express");
require("dotenv").config();
const axios = require("axios");

const app = express();

setInterval(async () => {
  const { data } = await axios.post(process.env.URL + "/test/pagingTest");
  console.log("data", data);
}, 5000 * 60);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
