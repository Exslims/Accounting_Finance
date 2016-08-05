(function() {
    var countryApp = angular.module('afApp', [
        'ngRoute',
        'ngCookies',
        'afControllers',
        'afFactory'
    ]);
    countryApp.filter('encodeURI', function(){
       return window.encodeURI;
    });

    countryApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        }).when('/main', {
            templateUrl: 'main.html',
            controller: 'userController',
            controllerAs: 'vm'
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
