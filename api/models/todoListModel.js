'use strict'


var mysql = require('mysql');
var con = mysql.createConnection({ 
	host : '127.0.0.1',
	user :'root',
	password : 'root',
	database : 'node_rest',
	insecureAuth: true
});
con.connect();

exports.get_all_task= function(result){
	con.query("select * from task ",function(err,res){
		console.log(res);
	if(err){
	console.log("error: ",err);
	result(err,null);

	}else{
	result(null,res);

	}


});

};



