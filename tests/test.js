describe("formController", function() {
  var $httpBackend, $rootScope, createController;

  beforeEach(function() {
    //Load the module loginApp
    module("loginApp");

    function handleInject($injector)
    {
      $rootScope = $injector.get("$rootScope");
      $httpBackend = $injector.get("$httpBackend");

      var $controller = $injector.get("$controller");

      //Create a function that instantiate the controller passing in $rootScope as $scope.
      createController = function() {
       return $controller("formController", {"$scope" : $rootScope});
      };
    }

    handleInject.$inject = ["$injector"];
    inject(handleInject);
  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  //Tests for checking the initial values.
  describe("Initialization", function() {
    it("Should leave email and password undefined", function() {
      var controller = createController();

      expect($rootScope.email).not.toBeDefined();
      expect($rootScope.password).not.toBeDefined();
    });
  });

  //Tests for authenticating the login.
  describe("Authenticate", function() {

    //Validates the login if the password is anything but "password".
    it("Should pass the validation", function() {
      var controller = createController();

      $httpBackend.expectPOST("/authenticate", {email: "mike@mail.com", password: "12345678"})
                  .respond(200, {message: "You have logged in successfully."});

      $rootScope.email = "mike@mail.com";
      $rootScope.password = "12345678";
      $rootScope.submit();
      $httpBackend.flush();

      expect($rootScope.success).toBeTruthy();
      expect($rootScope.error).not.toBeDefined();
      expect($rootScope.message).toBe("You have logged in successfully.");
    });

    //invalidates the login if the password is "password".
    it("Should fail the validation", function() {
      var controller = createController();

      $httpBackend.expectPOST("/authenticate", {email: "mike@mail.com", password: "password"})
                  .respond(401, {message: "You have entered the incorrect password."});

      $rootScope.email = "mike@mail.com";
      $rootScope.password = "password";
      $rootScope.submit();
      $httpBackend.flush();

      expect($rootScope.error).toBeTruthy();
      expect($rootScope.success).not.toBeDefined();
      expect($rootScope.message).toBe("You have entered the incorrect password.");
    });
  });
});
