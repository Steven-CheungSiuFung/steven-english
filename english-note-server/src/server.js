const http = require("http");
require("dotenv").config();
const mongoose = require("mongoose");

const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

async function startServer() {
  /*
   *   Do something before listen to the user
   */
  await mongoose.connect(MONGODB_URL);

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
