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
        vm.updateUser = updateUser;

        function updateUser(){
            userService.updateLoggedUser(vm.user)
                .then(function (response) {
                    vm.status = "Updated user was successfully completed!"
                }, function(error){
                    vm.status = "Cannot update user: " + error.message;
                });
        }
    }
})();
