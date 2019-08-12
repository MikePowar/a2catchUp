var express = require('express');
var router = express.Router();

var messages = [
  {
    name: "Rza",
    message: "Bobby Digital",
    id: 0
  },
  {
    name: "Gza",
    message: "Liquid Swords",
    id: 1 
  },
  {
    name: "Chef Raekwon",
    message: "Only Built 4 Cuban Linx",
    id: 2 
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
});

router.delete('/:id', function(req, res){
  console.log(req.body);
  console.log(req.body);

  messages = messages.filter(e=>e.id!=req.params.id);
  res.send(JSON.stringify('Message deleted'))
});

module.exports = router;

