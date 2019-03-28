const express = require('express');
const bodyParser = require('body-parser');
const coars = require('cors');
const routes = require('./routes/routes')
const mongoose = require('mongoose');
const MongoURI = "mongodb://localhost:27017/posts-fullstack";
// Initalize App #STARTS
const app = express();
// Initalize App #ENDS

// CONFIGURE APP MODULES #STARTS
app.use(coars({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(routes);
// CONFIGURE APP MODULES #ENDS

mongoose.connect(MongoURI).then((result) => {
    console.log("Connected !")
}).catch((err) => {
    console.log(err);
});

app.listen(3000)