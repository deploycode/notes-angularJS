angular.module("myApp", ['LocalStorageModule'])

.controller("myController", function($scope, localStorageService){
  if (localStorageService.get("lista-en-storage")) {
    $scope.todo = localStorageService.get("lista-en-storage");
  }else {
    $scope.todo = [];
  }
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
