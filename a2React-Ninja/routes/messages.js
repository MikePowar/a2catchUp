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

  messages = messages.filter(e=>e.id!=req.params.id);
  res.send(JSON.stringify('Message Deleted'))

  // var messageId = parseInt(deletedMessageId);
  // console.log(deletedMessageId);
  // console.log(messageId);
  // var currentMessage = messages.filter(e=>e.id===messageId)[0];
  // if (currentMessage){
  //   messages = messages.filter(e=>e.id!=messageId);
  //   res.send(JSON.stringify(deletedMessageId));
  //   res.sendStatus(204);
  //   }
  // else {
  //   res.sendStatus(404);
  // }

});

module.exports = router;

