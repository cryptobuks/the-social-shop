const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');


var app = express();


if(process.env.NODE_ENV == "production") {
	mongoose.connect(process.env.MONGO_DB);
} else {
	console.log("LOCAL ENV");
	mongoose.connect('mongodb://admin:PASSWORDilgrappoloDB@ds145303.mlab.com:45303/ilgrappolodb');
}

//heroku config:set MONGO_DB="mongodb://<user>:<password>@ds157233.mlab.com:57233/todo-list"



var router = require('./services/router');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/v1', router);

app.use('/static',express.static(path.join(__dirname, 'public')));
app.use('/lib',express.static(path.join(__dirname, 'node_modules')));






var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('[*] Listening on', PORT);

