const express = require("express");
const cors = require("cors");
const path = require("path");

const vocabsRouter = require("./routes/vocabs/vocabs.router");
const coverRouter = require("./routes/cover/cover.router");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5173",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/vocabs", vocabsRouter);
app.use("/cover", coverRouter);

// serving application with client side routing
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
