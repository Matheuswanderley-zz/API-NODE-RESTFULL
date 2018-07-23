var express = require('express'),

app = express(),

port = process.env.PORT || 3000,

mongoose = require('mongoose'),

Message = require('./api/models/msgModel'),

bodyParser = require('body-parser');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://matheus:i0n4d34d@ds147034.mlab.com:47034/mytasklist_matt');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require('./api/routes/msgRoutes');

routes(app);

app.listen(port);

console.log('Message RESTful API server started on: ' + port);