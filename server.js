var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var csv = require('csvtojson')
var morgan = require('morgan')

app.use(morgan('tiny'));

// set the path to the data file
const csvFile = 'data.csv'

// configure express app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the port to run the api on
var port = process.env.port || 8080;

/*** ROUTES ***/
var router = express.Router();
router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the API for UWEC segregated fees',
    documentation: 'https://github.com/UWEC-ITC/segregatedFees-API'
  });
})

router.get('/activities/all', function(req, res) {
  csv().fromFile(csvFile).then((jsonObj => {
    res.json(jsonObj);
  }))
})

app.use('/v0', router);

app.listen(port);
console.log('Magic is happening on port ' + port)
