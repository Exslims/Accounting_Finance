(function(){
    var afControllers = angular.module('afControllers',[]);

    afControllers.controller('loginController', function($scope,$http){
       $scope.sendData = function(){
           var data = $.param({
               nickname: $scope.nickname
           });
           var config = {
               headers : {
                   'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
               }
           };

           $http.post('/testPost', data,config)
               .success(function (data, status, headers, config) {
                   $scope.PostDataResponse = data;
               })
               .error(function (data, status, header, config) {
                   $scope.ResponseDetails = "Data: " + data +
                       "<hr />status: " + status +
                       "<hr />headers: " + header +
                       "<hr />config: " + config;
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
