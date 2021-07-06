"use strict";

const favModal = require("../collections/fav");

function addFavHandler(req, res) {
  const { name, img } = req.body;

  favModal.find({ name }, (err, data) => {
    if (err) {
      res.status(500).send("there is an error");
    } else {
      if (data.length == 0) {
        let newfav = new favModal({
          name: name,
          img: img,
        });

        newfav.save();
        res.send("fav added");
      } else {
        console.log("fav exist");
      }
    }
  });
}

module.exports = addFavHandler;
