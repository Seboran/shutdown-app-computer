import express from "express";
import bodyParser from "body-parser";
import wintools from "wintools";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/shutdown", function(req, res) {
  const delay = req.body.delay;
  res.send("Received");
  setTimeout(wintools.shutdown.poweroff(), delay * 60 * 1000);
});

app.listen(process.env.PORT || 3000);
