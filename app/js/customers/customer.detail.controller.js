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
        vm.customerId = $stateParams.customerId;
        vm.customer;
        vm.reviewMode = true;

        // functions
        vm.deleteCustomer = deleteCustomer;
        vm.getCustomerById = getCustomerById;

        activate();

        ////////////////

        function activate() {
        }

        function deleteCustomer() {

        }

        function getCustomerById() {
            
        }
    }
})();