import express from "express";
import Cards from "../models/card.js";

const app = express();

// ALL APIS HERE

//  create a card
app.post("/add-tinder-card", (req, res) => {
  const newCard = req.body;
  Cards.create(newCard)
    .then((result) => {
      res.status(201).send({
        message: "Created successfully",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/tinder/cards", (req, res) => {
  // return res.send("hey");
  Cards.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default app;
