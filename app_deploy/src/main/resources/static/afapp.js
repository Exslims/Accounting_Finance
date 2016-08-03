(function() {
    var countryApp = angular.module('afApp', [
        'ngRoute',
        'afControllers',
        'countryFactory',
        'countryDirective'
    ]);
    countryApp.filter('encodeURI', function(){
       return window.encodeURI;
    });

    countryApp.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'login.html',
            controller: 'loginController'
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
