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

myApp.controller("formController", ["$scope", "$http", function($scope, $http) {
  $scope.user = {};
  $scope.createUser = function(e) {
    $http({
      method: 'POST',
      url: 'http://localhost:9000/user',
      data: $.param($scope.user),
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }).then(function successCallback(data){
      console.log(data)
    }, function failCallback(data){
      console.log("Fail:" + data)
    });
  }
}]);

// (function preventRedirect() {
//   $("form").submit(function(e){
//     e.preventDefault();
//     return false;
//   });
// }());