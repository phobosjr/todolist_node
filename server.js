var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var routes = require('./api/routes/todoListRoutes');

routes(app);

console.log('todo list RestFul API server started on: '+port);
