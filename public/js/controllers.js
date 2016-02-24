var app = angular.module("loginApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "templates/login.html"
  })
  .otherwise({
    redirectTo: "/"
  });
});

//Controller used by the login form
app.controller("formController", function($scope, $http) {
  $scope.submit = function() {
    var request = {
      method: "POST",
      url: "http://localhost:8080/authenticate",
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
});
