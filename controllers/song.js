const express = require("express");
const router = express.Router();
const mongoose = require("../db/connection");
const Song = require("../models/song");
const db = mongoose.connection;

// route to list all songs
router.get("/", async (req, res) => {
  const song = await Song.find({});
  res.json({
    status: 200,
    data: song,
  });
});

// CREATE route - POST
router.post("/", async (req, res) => {
  const song = await Song.create(req.body);
  res.json({ status: 200, data: song });
});

// UPDATE route - PUT
router.put("/:id", async (req, res) => {
  const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({
    status: 200,
    message: "item updated",
    data: song,
  });
});

// DELETE route - delete
router.delete("/:id", async (req, res) => {
  const song = await Song.findByIdAndDelete(req.params.id);
  res.json({
    status: 200,
    message: "item deleted",
    data: song,
  });
});

module.exports = router;
