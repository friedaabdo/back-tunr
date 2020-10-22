const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: String,
  artist: String,
  time: Number,
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
