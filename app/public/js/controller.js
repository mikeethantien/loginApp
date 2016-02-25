"use strict";

var app = angular.module("loginApp", ["ngRoute"]);

//App Configs
function appConfig($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "templates/login.html"
  })
  .otherwise({
    redirectTo: "/"
  });
}

appConfig.$inject = ["$routeProvider"];

//Controller used by the login form
function formController($scope, $http) {
  $scope.submit = function() {
    var request = {
      method: "POST",
      url: "/authenticate",
      data: {
        email: $scope.email,
        password: $scope.password
      }
    }

    $http(request).then(
      //success callback
      function(response) {
        $scope.success = true;
        $scope.message = response.data.message
      },
      //error callback
      function(response) {
        $scope.error = true;
        $scope.message = response.data.message;
      }
    );
  }
}

formController.$inject = ["$scope", "$http"];

//Inject the parameters separately so the arguments will not be minified.
app.config(appConfig);
app.controller("formController", formController);
