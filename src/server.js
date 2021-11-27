const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = Number(process.env.PORT) || 3001;
const URL_GENERAL = process.env.URL_GENERAL || "127.0.0.1:";

// create and setup express app
async function main() {
  const app = express();
  app.use(cors());

  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));

  //Routes
  app.get("/", function (req, res) {
    res.send("YEAH ;)");
  });

  // start express server
  app.listen(PORT, () =>
    console.log(`server running on ${URL_GENERAL + PORT}`)
  );
}

main();
