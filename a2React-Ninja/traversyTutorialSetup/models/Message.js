const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema for messages
//TODO: is id necessary ? as mongoDB will create one via ObjectID ???
const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    id: {
        type: String
    }
});

//
module.exports = Message = mongoose.model('message', MessageSchema);