angular.module("myApp", [])
  .run(function($rootScope){
    $rootScope.message="Hello World";
  })
  .controller("myController", function($scope){
    $scope.message="Bye World";
  })
  .controller("ChildController", function($scope){

  });
