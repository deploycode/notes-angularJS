angular.module("myApp", [])

.controller("myController", function($scope , $http){
  $scope.posts={};
  $http.get("https://jsonplaceholder.typicode.com/posts")
    .success(function(data){
      $scope.posts= data;
    })
    .error(function(err){
      console.log(err);
    });
  $scope.addPost= function(){
    $http.post("https://jsonplaceholder.typicode.com/posts"
      ,{
        title: $scope.newPost.title,
        body:  $scope.newPost.body,
        userId: 1
      })
      .success(function(data, status, headers, config){
        $scope.posts.push($scope.newPost);
        $scope.newPost={};
      })
      .error( function(error, status, headers, config){
        console.log(error);
      });
  }
});
