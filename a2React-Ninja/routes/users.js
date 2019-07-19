var express = require('express');
var router = express.Router();

var messagesExpress = [
  {
    "name": "Mike",
    "message": "Im here from express",
    "id": 1
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(users));
});

module.exports = router;
