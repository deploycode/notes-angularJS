angular.module("myApp", [])

.controller("myController", function($scope , $http){
  $scope.points={};
  $http.get("http://18.221.159.112:6700/getdataplaces")
    .success(function(data){
      $scope.points= data;
    })
    .error(function(err){
      console.log(err);
    });
});

