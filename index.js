var app = angular.module("toDoApp",[]);
app.controller("toDoCtrl",($scope)=>{
    $scope.tasks = localStorage.getItem('tasks');
    if($scope.tasks == null)
    {
        $scope.taskList = [];
    }
    else
    {
        $scope.taskList = JSON.parse($scope.tasks);
    }
   
    $scope.addTask = ()=>{
        $scope.errorMsg = "";
        if(!$scope.taskToAdd)
        {
            return;
        }
        if($scope.taskList.indexOf($scope.taskToAdd) == -1)
        {
            $scope.taskList.push($scope.taskToAdd) 
        }
        else{
            $scope.errorMsg = "Task is already present";
        }
        $scope.taskToAdd = "";
        localStorage.setItem("tasks",JSON.stringify($scope.taskList));
    };

    $scope.removeTask = (index)=>{
        $scope.taskList.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify($scope.taskList));
    };

});