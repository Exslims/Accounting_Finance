(function() {
    var countryApp = angular.module('afApp', [
        'ngRoute',
        'afControllers',
        'afFactory',
        'countryDirective'
    ]);
    countryApp.filter('encodeURI', function(){
       return window.encodeURI;
    });

    countryApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'login.html',
            controller: 'loginController'
        }).when('/main', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })
            // .when('/:countryId', {
        //    templateUrl: 'country-detail.html',
        //    controller: 'CountryDetailCtrl'
        //})
         .otherwise({
            redirectTo: '/'
        });
    });
})();
