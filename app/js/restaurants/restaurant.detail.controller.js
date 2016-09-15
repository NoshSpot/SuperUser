(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantDetailController', RestaurantDetailController);

    RestaurantDetailController.$inject = [];

    /* @ngInject */
    function RestaurantDetailController() {
        var vm = this;
        vm.title = 'RestaurantDetailController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();