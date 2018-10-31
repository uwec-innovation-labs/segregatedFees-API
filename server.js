var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var csv = require("csvtojson");

// set the path to the data file
const csvFile = "data.csv";

// configure express app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the port to run the api on
var port = process.env.port || 8080;

/*** ROUTES ***/
var router = express.Router();

router.get("/", function(req, res) {
  csv()
    .fromFile(csvFile)
    .then(jsonObj => {
      res.json(jsonObj);
    });
});

router.get("/info", function(req, res) {
  res.json({
    message: "Welcome to the API for UWEC segregated fees",
    version: "v0",
    documentation: "https://github.com/UWEC-ITC/segregatedFees-API"
  });
});

router.get("/activities", function(req, res) {
  csv()
    .fromFile(csvFile)
    .then(jsonObj => {
      var data = [];
      for (var i = 0; i < jsonObj.length; i++) {
        data.push(jsonObj[i].activity);
      }
      res.status("200");
      res.json(data);
    });
});

router.get("/activities/:activity", function(req, res) {
  csv()
    .fromFile(csvFile)
    .then(jsonObj => {
      for (var i = 0; i < jsonObj.length; i++) {
        if (
          jsonObj[i].activity.toLowerCase() == req.params.activity.toLowerCase()
        ) {
          res.status("200");
          res.json(jsonObj[i]);
        }
      }
      res.status("404");
      res.json({ message: req.params.activity + " is not an activity" });
    });
});

app.use(router);

app.listen(port);
console.log("Magic is happening on port " + port);

module.exports = app;
