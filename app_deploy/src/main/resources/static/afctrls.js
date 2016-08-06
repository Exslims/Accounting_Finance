(function(){
    'use strict';
    angular
        .module('afControllers',[])
        .controller('loginController', loginController)
        .controller('userController', userController);

    loginController.$inject = ['loginService','$location','$cookies'];
    userController.$inject = ['userService','$cookies'];

    function loginController(loginService, $location,$cookies){
        var vm = this;

        vm.nickname = null;
        vm.status = null;
        vm.sendData = sendData;

        function sendData(){
            var data = $.param({
                nickname: vm.nickname
            });
            loginService.executeLogin(data)
                .then(function(response){
                    var user = response.data;
                    $cookies.putObject('user',user);
                    $location.path("/main");
                },function(error){
                    vm.status = "Cannot login user: " + error.message;
                });
        }
    }

    function userController(userService,$cookies){
        var vm = this;

        vm.user = $cookies.getObject('user');
        vm.allUsers = [];
        vm.updateUser = updateUser;

        getAllUsers();
        function updateUser(){
            userService.updateLoggedUser(vm.user)
                .then(function (response) {
                    vm.status = "Update user was successfully completed!"
                }, function(error){
                    vm.status = "Cannot update user: " + error.message;
                });
        }

        function getAllUsers(){
            userService.getAllUsers()
                .then(function (response) {
                    vm.allUsers = response.data;
                    vm.status = "Get all users was successfully completed!"
                }, function(error){
                    vm.status = "Cannot get all users: " + error.message;
                });
        }
    }
})();
