angular.module("myApp", [])
  .filter("aMayus", function(){
    return function(texto){
      return texto.toUpperCase();
    }
  })
.controller("myController", function($scope){
  $scope.minusculas="estaré en mayusculas"
});
