
// module Express mini framework 
//https://developer.mozilla.org/fr/docs/Learn/Server-side/Express_Nodejs/Introduction
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
	//body-parser middleware to handler post request 
	//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
var bodyParser = require('body-parser');
app.listen(port);

app.set('view engine','ejs');
//
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var routes = require('./api/routes/todoListRoutes');
routes(app);
console.log('todo list RestFul API server started on: '+port);
