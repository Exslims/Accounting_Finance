(function(){
    var afFactory = angular.module('afFactory',[]);
    afFactory.factory('loginService',['$http', function($http){
        var urlBase = 'users/authentication';
        var loginFactory = {};
        var user = null;

        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };

        loginFactory.getUser = function(){
            return user;
        };
        loginFactory.setUser = function (loggedUser) {
            user = loggedUser;
        };
        loginFactory.executeLogin = function(nickname, callback){
            return $http.post(urlBase,nickname,config).success(callback);
        };
        return loginFactory;
    }]);
    afFactory.factory('userService',['$http', function($http){
        var urlBase = "users/update";
        var userService = {};
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=UTF-8;'
            }
        };

        userService.updateUser = function (user) {
            return $http.post(urlBase,user,config);
        };
        return userService;
    }]);
})();


//angular.module('afFactory',[])
//    .factory('loginService', function ($http) {
//        return {
//            list: function (callback) {
//                $http({
//                    method: 'GET',
//                    url: 'test',
//                    cache: true
//                }).success(callback);
//            },
//            find: function(id, callback){
//                $http({
//                    method: 'GET',
//                    url: 'country_' + id + ".json",
//                    cache: true
//                }).success(callback);
//            }
//        };
//    });
