const express = require("express");
const itemRouter = express.Router();
const Item = require("../models/items.js");

itemRouter.get("/", (req, res) => {
  Item.find((err, items) => {
    if (err) return res.status(500).send(err);
    return res.send(items);
  })
})

itemRouter.post("/", (req, res) => {
  const newItems = new Item (req.body);
  newItems.save(err => {
    if (err) return res.status(500).send(err);
    return res.send(newItems);
  })
})

itemRouter.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .exec((err, item) => {
      if (err) return res.status(500).send(err);
      return res.send(item);
    });
});

itemRouter.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
    if (err) return res.status(500).send(err);
    return res.send(updatedItem)
  })
})

itemRouter.delete("/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, removedItem) => {
    if (err) return res.status(500).send(err);
    return res.send(removedItem)
  })
})

module.exports = itemRouter;