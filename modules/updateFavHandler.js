"use strict";

const favModal = require("../collections/fav");

function deleteFavHandler(req, res) {
  const { name, img, target } = req.body;

  favModal.updateOne(
    { name: target },
    { $set: { name: name, img: img } },
    (err, data) => {
      favModal.find({}, (err, data) => {
        if (err) {
          res.status(500).send("there is an error");
        } else {
          res.send(data);
        }
      });
    }
  );
}

module.exports = deleteFavHandler;
