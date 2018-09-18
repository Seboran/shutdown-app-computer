import express from "express";
import wintools from "wintools";

const app = express();

app.get("/shutdown", function(req, res) {
  wintools.shutdown.poweroff();
});

app.listen(process.env.PORT || 3000);
