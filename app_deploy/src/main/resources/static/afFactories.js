
angular.module('countryFactory',[])
    .factory('countries', function ($http) {
        return {
            list: function (callback) {
                $http({
                    method: 'GET',
                    url: 'test',
                    cache: true
                }).success(callback);
            },
            find: function(id, callback){
                $http({
                    method: 'GET',
                    url: 'country_' + id + ".json",
                    cache: true
                }).success(callback);
            }
        };
    });
