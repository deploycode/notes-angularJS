// var app= angular.module("myApp", []);
// app.controller("myController", function($scope){
//   $scope.nombre="Mundo";
// });

angular.module("myApp", [])

.controller("myController", function($scope){
  $scope.newComentario={};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "codigofacilito"
    },
    {
      comentario: "Mal tutorial",
      username: "deploycode"
    }
  ];
  $scope.addComentario = function(){
    $scope.comentarios.push($scope.newComentario);
    $scope.newComentario={};
  }
});
