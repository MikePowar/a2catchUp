const express = require('express');
const router = express.Router();

//Message Model
const Message = require('../../models/Message');

// @route GET api/messages
// @desc  Get All Messages
// @access Public
router.get('/', (req, res) => {
    Message.find()
        .sort({ date: -1 })
        .then(messages => res.json(messages))
})

// @route POST api/messages
// @desc  Create a message
// @access Public
router.post('/', (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        message: req.body.message
    });
    newMessage.save().then(message => res.json(message));
});

// @route DELETE api/messages/:id
// @desc  Delete a message
// @access Public
router.delete('/:id', (req, res) => {
    Message.findById(req.params.id)
        .then(message => message.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});





module.exports = router;