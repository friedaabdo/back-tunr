require("dotenv").configure();
const express = require("express");
const logger = require("morgan");
const app = express();

const { PORT = 3500, NODE_ENV = "development" } = process.env;

const cors = require("cors");
const corsOptions = require("./config/cors");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());

app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ hello: "Hello World" });
});

const songRouter = require("./controllers/song");

app.listen(PORT, () => {
  console.log(`listening in on port: ${PORT}`);
});
