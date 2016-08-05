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
        var urlBase = "users/update";
        var loggedUser = null;
        var config = {
            headers : {
                'Content-Type': 'application/json;charset=UTF-8;'
            }
        };
        return {
            getLoggedUser: getLoggedUser,
            setLoggedUser: setLoggedUser,
            updateLoggedUser: updateLoggedUser
        };

        function getLoggedUser(){
            return loggedUser;
        }

        function setLoggedUser(user){
            loggedUser = user;
        }

        function updateLoggedUser(user){
            return $http.post(urlBase,user,config);
        }
    }
})();
