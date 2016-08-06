(function(){
    'use strict';
    angular.module('afFactory',[])
        .factory('loginService',loginService)
        .factory('userService', userService);

    loginService.$inject = ['$http'];
    userService.$inject = ['$http'];

    function loginService($http){
        var urlBase = 'users/authentication';
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        };
        return {
            executeLogin: executeLogin
        };

        function executeLogin(nickname){
            return $http.post(urlBase,nickname,config);
        }
    }
    function userService($http){
        var urlUpdate = "users/update";
        var urlGetAll = "users/getAll";
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=UTF-8;'
            }
        };
        return {
            updateLoggedUser: updateLoggedUser,
            getAllUsers: getAllUsers
        };

        function getAllUsers(){
            return $http.get(urlGetAll,config);
        }
        function updateLoggedUser(user){
            return $http.post(urlUpdate,user,config);
        }
    }
})();
