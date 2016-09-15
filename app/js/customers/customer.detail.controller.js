(function() {
    'use strict';

    angular
        .module('app')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['$stateParams'];

    /* @ngInject */
    function CustomerDetailController($stateParams) {
        var vm = this;
        vm.title = 'CustomerDetailController';

        // variables
        vm.customer = $stateParams.customer;
        vm.reviewMode = true;

        // functions
        vm.deleteCustomer = deleteCustomer;

        activate();

        ////////////////

        function activate() {
        }
    }
})();