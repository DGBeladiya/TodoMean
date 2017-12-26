var app=angular.module("todoApp",[]);
app.controller("todoController",function($scope,$http){
	$scope.todo={"task":""};
	$scope.todoList=[];
	$http({method:"get",url:"/todoList"})
		.success(function(data){
			$scope.todoList=data;
			}).error(function(reason){});
	$scope.addItem=function()
	{
		$http({method:"put",url:"/addTodo",data:$scope.todo})
		.success(function(data){
			$scope.todoList=data;
			}).error(function(reason){});
			$scope.todo={"task":""};
	}
	$scope.removeItem=function(index)
	{
		$http({method:"delete",url:"/deleteTodo",data:{index:index+""}
			,headers: { 'Content-Type': 'application/json' }

	})
		.success(function(data){
			$scope.todoList=data;
		}).error(function(error){

		});
	}
});