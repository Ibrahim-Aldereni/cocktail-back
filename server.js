"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3001;

///////////////////////////////////////// imports //////////////////////////////

const getAllDrinksHandler = require("./modules/getAllDrinksHandler");
const addFavHandler = require("./modules/addFavHandler");
const getFavHandler = require("./modules/getFavHandler");
const deleteFavHandler = require("./modules/deleteFavHandler");
const updateFavHandler = require("./modules/updateFavHandler");
///////////////////////////////////////// routes//////////////////////////////

//localhost:3001/updateFav
server.put("/updateFav", updateFavHandler);

//localhost:3001/deleteFav
server.delete("/deleteFav/:name", deleteFavHandler);

//localhost:3001/getFav
server.get("/getFav", getFavHandler);

//localhost:3001/addFav
server.post("/addFav", addFavHandler);

//localhost:3001/getAllDrinks
server.get("/getAllDrinks", getAllDrinksHandler);

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
