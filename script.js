var  armando =  angular.module ("armandoE",[]);
  armando.controller("Suma",function($scope){
    $scope.cantidad1 = 2;
    $scope.cantidad2 = 1;
    $scope.Suma = function(cantidad){
      $scope.cantidad1 + $scope.cantidad2
    };
  })
  armando.controller("Miltiplicacion",function($scope){
    $scope.cantidad1 = 2;
    $scope.cantidad2 = 1;
    $scope.Miltiplicacion = function(cantidad){
      $scope.cantidad1 * $scope.cantidad2
  })
