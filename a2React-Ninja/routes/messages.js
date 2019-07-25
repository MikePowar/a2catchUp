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

router.post('/', function(req, res, next){
  //console.log(req.body)
  const newMessage = req.body
  messages.push(newMessage)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(newMessage))
})

module.exports = router;

