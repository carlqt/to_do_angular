var myApp

myApp = angular.module("myApp", [])

myApp.controller("myAppController", ["$scope", "$http", function($scope, $http) {
  $http.get("http://localhost:9000").success(function(data) {
    $scope.users = data;
  });

  $http.get("http://localhost:9000/tasks").success(function(data) {
    $scope.tasks = data;
  })

}]);
