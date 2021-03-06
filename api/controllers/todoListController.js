'use strict';
var tasks = [];

var model = require('../models/todoListModel');


exports.get_task = function (req, res) {
	
	model.get_task(req.params.id,function(response){
		console.log(response);
		if (response.length > 0) { 
			res.json(response)
		} else { 
			res.json("task not found");
		} });


	};
	

exports.all_task = function (req, res) {
	model.get_all_task(function(response){
		if(response.length > 0){
			res.json(response)
		}else{
			res.json("empty tasks");
		}
	})
};
exports.create_task = function (req, res) { 
	if (req != null && req.body) {
	let task = req.body;
		model.get_task(task.task_id,function(response){
			if (response.length > 0) { 
				res.json("Record already exist")
			} else { 
					model.create_task(task,function(response){
						res.json("1 record inserted");
					})			
			} 
		});
		}else{
			res.json("Error input ");
		};
}
exports.delete_task = function (req, res) {
	if (req != null) {
		model.delete_task(req.params.id,function(response){
			if (response === 1) {
				 res.json('Task N°' + req.params.id + ' deleted ');
			} else { 
				res.json('Task N°' + req.params.id + ' not found ');
			}

		});
		
	}
}
function isTaskExist(task_id) { 
	console.log(task_id);
	let res = -1; for (let i = 0; i < tasks.length; i++) {
		console.log(tasks[i].task_id);
		if (tasks[i].task_id == task_id) {
			res = i;
		}
	}
	return res;
}
