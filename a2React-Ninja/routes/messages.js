var express = require('express');
var router = express.Router();

var messages = [
  {
    name: "Rza",
    message: "Bobby Digital",
    id: 1
  },
  {
    name: "Gza",
    message: "Liquid Swords",
    id: 2 
  },
  {
    name: "Chef Raekwon",
    message: "Only Built 4 Cuban Linx",
    id: 3 
  }
]

router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(messages))
});

module.exports = router;

/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.json([
    {
      name: "Rza",
      message: "Bobby Digital",
      id: 1
    },
    {
      name: "Gza",
      message: "Liquid Swords",
      id: 2 
    },
    {
      name: "Chef Raekwon",
      message: "Only Built 4 Cuban Linx",
      id: 3 
    }
  ]);
});

module.exports = router; */
