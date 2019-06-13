var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;
app.listen(port);
app.use(function(req,res,next){
	console.log('Time',Date.now());
	console.log('Request Type',req.method);	
	console.log('Request Url',req.originalUrl);	
	console.log(req.body);
next();
})

var routes = require('./api/routes/todoListRoutes');

routes(app);

console.log('todo list RestFul API server started on: '+port);
