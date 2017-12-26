var express=require("express");
var router=express.Router();
var bodyParser=require("body-parser");
var json=bodyParser.json();
var todoRouter=require("./router/todoRouter.js");
router.use(express.static("public"));

router.all("/",function(req,res){
	res.setHeader("Content-Type","text/html");
	res.sendFile("public/index.html");
});
router.put("/addTodo",json,todoRouter.createTodo);

router.get("/todoList",json,todoRouter.readTodo);

router.delete("/deleteTodo",json,todoRouter.deleteTodo);

module.exports=router;