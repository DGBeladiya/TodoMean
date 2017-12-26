var todo=require("../database/todoModel.js");
function readTodo(res){
	todo.find({},function(err,response){
		res.json(response);
	});
}
module.exports={
	createTodo:function(req,res){
		var newTodo=new todo({
			task:req.body.task
		});
	newTodo.save(function(err,todo){
		if(err){
			res.send({"error":"Error Occur"});
		}
		else{
			readTodo(res);
		}
	})
	},
	//updateTodo:function(req,res){},
	deleteTodo:function(req,res){
		todo.remove({"task":req.body.index},function(err,response)
		{
		if(err)
		{
			res.json({"error":"Sorry"});
		}
		else
		{
			readTodo(res)
		}
		});
	},
	readTodo:function(req,res){
		readTodo(res)
		
	}
};