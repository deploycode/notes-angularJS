angular.module("myApp", ['LocalStorageModule'])
  .factory('ToDoService', function(localStorageService){
    var ToDoService = {};
    ToDoService.key ="lista-en-storage";
    if (localStorageService.get(ToDoService.key)) {
      ToDoService.activities = localStorageService.get(ToDoService.key);
    }else {
      ToDoService.activities = [];
    }
    TodoService
  })
.controller("myController", function($scope, localStorageService){

  $scope.$watchCollection('todo', function(newValue, oldValue){
    localStorageService.set("lista-en-storage", $scope.todo);
  });
  $scope.addToDo= function(){
    $scope.todo.push($scope.newToDo);
    $scope.newToDo= {};
  }
  $scope.clear= function(){
    $scope.todo = [];
  }
});
