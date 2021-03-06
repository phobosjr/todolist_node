'use strict'
module.exports = function(app){

var todoList = require('../controllers/todoListController');

app.route('/')
.get(function(req,res){
    res.render('pages/index',{
        title:"home"
    });
})
app.route('/about')
.get(function(req,res){
    res.render('pages/about',{
        title:"about"
    });
})

app.route('/tasks')
.get(todoList.all_task)


app.route('/task') .post(todoList.create_task) ;
app.route('/task/:id')
.get(todoList.get_task)
.delete(todoList.delete_task);


}
