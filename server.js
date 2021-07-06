"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3001;

///////////////////////////////////////// imports //////////////////////////////

///////////////////////////////////////// routes//////////////////////////////

//localhost:3001/
server.get("/", (req, res) => {
  res.send("HOME");
});

//localhost:3001/*
server.get("*", (req, res) => {
  res.status(404).send("oage not found");
});

///////////////////////////////////////////listen //////////////////////////

server.listen(PORT, () => {
  console.log(`listining on port ${PORT}`);
});
