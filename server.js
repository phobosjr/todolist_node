var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
app.listen(port);

app.configure(function(){
	app.use(express.bodyParser());
})

var routes = require('./api/routes/todoListRoutes');

routes(app);

console.log('todo list RestFul API server started on: '+port);
