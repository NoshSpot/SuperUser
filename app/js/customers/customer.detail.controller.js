(function() {
    'use strict';

    angular
        .module('app')
        .controller('CustomerDetailController', CustomerDetailController);

    CustomerDetailController.$inject = ['$stateParams', 'CustomerFactory', 'toastr'];

    /* @ngInject */
    function CustomerDetailController($stateParams, CustomerFactory, toastr) {
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
            getCustomerById(vm.customerId);
        }

        function deleteCustomer(id) {
            CustomerFactory.remove(id).then (
                function(response) {
                    toastr.success("Customer successfully deleted.");
                    vm.customer = {};
                },
                function(error) {
                    toastr.error(error.status, error.statusText);
                }
            );
        }

        function getCustomerById(id) {
            CustomerFactory.getById(id).then (
                function(response) {
                    vm.customer = response.data;
                },
                function(error) {
                    toastr.error(error.status, error.statusText);
                }
            );
        }
    }
})();