//Remember to go back and update package.json file in the a2React-Ninja folder (express)
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//bodyparser: take requests and get data from body - ie from requests
const bodyparser = require('body-parser');
const path = require('path');

const messages = require('./routes/api/messages')

const app = express();

//Bodyparser Middleware
app.use(bodyparser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=>console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/messages', messages);

if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//NOTE below changed to local - 8000 from deployment tutorial (if problems...go to 5000)
//setting up port: Herouku Deployment  || local - 5000
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`)); 

//BELOW ADDED from : https://coursework.vschool.io/deploying-mern-with-heroku/

// ... other imports 
//const path = require("path")

// ... other app.use middleware 
//app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
//app.get("*", (req, res) => {
//    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//});

//app.listen(8000);
