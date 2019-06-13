'use strict'


var mysql = require('mysql');
var con = mysql.createConnection({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	database: 'node_rest',
	insecureAuth: true
});
con.connect();

exports.get_all_task = function (result) {
	con.query("select * from task ", function (err, res) {
		console.log(res);
		if (err) {
			console.log("error: ", err);
			result(err, null);

		} else {
			result(null, res);

		}


	});

};

exports.get_task = function (id, result) {
	console.log(id)
	con.query("select * from task where task_id = " + id, function (err, res) {
		if (err) {
			result(err);

		} else {
			result(res);

		}
	});



}

exports.create_task = function(task,result){

var sql = "INSERT INTO task (task_id,process_task ) VALUES ('"+task.task_id+"', '"+task.process_task+"')";

con.query(sql, function (err, res) {
	if (err) {
		result(err);

	} else {
		result(res);
	}
});


}

