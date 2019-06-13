'use strict';
var tasks = [];

var model = require('../models/todoListModel');


exports.get_task = function (req, res) {
	let index = isTaskExist(req.params.id);
	if (index >= 0) { 
		res.json(tasks[index])
	} else { 
		res.json("task not found");
	} }

exports.all_task = function (req, res) {
	res.json(model.get_all_task);
};
exports.create_task = function (req, res) { 
	if (req != null) {
		let index = isTaskExist(req.body.task_id);
		if(index >= 0){
			res.json("task already exist ")
		}else{ 
			let new_task = req.body;
			tasks.push(new_task);
			res.json(new_task);
		} 
	}
}
exports.delete_task = function (req, res) {
	if (req != null) {
		let index = isTaskExist(req.params.id);
		if (index >= 0) {
			tasks.splice(1, index); res.json('Task N°' + req.params.id + ' deleted ');
		} else { 
			res.json('Task N°' + req.params.id + ' not found ');
		}
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
