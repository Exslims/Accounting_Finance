(function(){
    var afControllers = angular.module('afControllers',[]);

    afControllers.controller('loginController', function($scope,loginService, $location){
       $scope.sendData = function(){
           var data = $.param({
               nickname: $scope.nickname
           });

           loginService.executeLogin(data,function(user){
               loginService.setUser(user);
               $location.path("/main")
           })
               .then(function(response){}, function (error) {
                   $scope.status = "Cannot login user: " + error.message;
               });
       }
    });
    afControllers.controller('mainController', function($scope,loginService, userService){
        $scope.user = loginService.getUser();
        $scope.updateUser = function () {
            userService.updateUser($scope.user)
                .then(function (response) {
                $scope.status = "Updated user was successfully completed!"
            }, function(error){
                $scope.status = "Cannot update user: " + error.message;
            });
        }
    });

    //countryControllers.controller('CountryListCtrl', function ($scope, $http, countries) {
    //    countries.list(function (countries) {
    //        $scope.countries = countries;
    //    });
    //});
    //countryControllers.controller('CountryDetailCtrl', function ($scope, $routeParams, $http, countries) {
    //    countries.find($routeParams.countryId, function (country) {
    //        $scope.country = country;
    //    })
    //});
})();
