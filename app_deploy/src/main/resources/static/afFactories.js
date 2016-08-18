(function(){
    'use strict';
    angular.module('afFactory',[])
        .factory('loginService',loginService)
        .factory('userService', userService);

    loginService.$inject = ['$http'];
    userService.$inject = ['$http'];

    var API_URL = 'http://localhost:8080';

    function loginService($http){
        var urlBase = API_URL + '/users/authentication';
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
        var urlUpdate = API_URL + '/users/update';
        var urlGetAll = API_URL + '/users/getAll';
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
