(function(){
    'use strict';
    angular
        .module('afControllers',[])
        .controller('loginController', loginController)
        .controller('userController', userController);

    loginController.$inject = ['loginService','$location'];
    userController.$inject = ['loginService','userService'];

    function loginController(loginService, $location){
        var vm = this;

        vm.nickname = null;
        vm.status = null;
        vm.sendData = sendData;

        function sendData(){
            var data = $.param({
                nickname: vm.nickname
            });
            loginService.executeLogin(data,function(user){
                    loginService.setUser(user);
                    $location.path("/main")
                })
                .then(function(response){}, function (error) {
                    vm.status = "Cannot login user: " + error.message;
                });
        }
    }

    function userController(loginService, userService){
        var vm = this;

        vm.user = loginService.getUser();
        vm.updateUser = updateUser;

        function updateUser(){
            userService.updateUser(vm.user)
                .then(function (response) {
                    vm.status = "Updated user was successfully completed!"
                }, function(error){
                    vm.status = "Cannot update user: " + error.message;
                });
        }
    }
})();
