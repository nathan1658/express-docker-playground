"use strict";

const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  let versionNo = require("./package.json").version;

  res.send("Hello World SUCKER!!!! Version: " + versionNo);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
