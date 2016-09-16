(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantListController', RestaurantListController);

    RestaurantListController.$inject = [];

    /* @ngInject */
    function RestaurantListController() {
        var vm = this;
        vm.title = 'RestaurantListController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();