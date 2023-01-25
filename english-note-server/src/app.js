const express = require("express");
const cors = require("cors");

const vocabsRouter = require("./routes/vocabs/vocabs.router");
const coverRouter = require("./routes/cover/cover.router");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);
app.use(express.json());
app.use("/vocabs", vocabsRouter);
app.use("/cover", coverRouter);

module.exports = app;
