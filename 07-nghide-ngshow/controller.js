angular.module("myApp", [])

.controller("myController", function($scope , $http){
  $scope.posts={};
  $scope.loading=true;
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      $scope.posts= data;
      $scope.loading=false;
    })
    .error(function(err){
      $scope.loading=false;
    });
});
