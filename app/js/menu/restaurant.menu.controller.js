(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantDetailMenuController', RestaurantDetailMenuController);

    RestaurantDetailMenuController.$inject = ['MenuGroupFactory', 'MenuItemFactory', '$stateParams', 'RestaurantFactory'];

    /* @ngInject */
    function RestaurantDetailMenuController(MenuGroupFactory, MenuItemFactory, $stateParams, RestaurantFactory) {
        var vm = this;

        vm.menu = [];

        vm.addMenuItem = addMenuItem;
        ////////////////
        getMenu();
        ////////////////

        function getMenu() {
            RestaurantFactory.getById($stateParams.restaurantId).then(function(response) {
                vm.menu = response.menuGroups;
            });
        }

        function addMenuItem(menuGroupId) {
            vm.newMenuItem.menuGroupId = menuGroupId;

            MenuItemFactory.add(vm.newMenuItem).then(function() {
                getMenu();
                vm.newMenuItem = {};
            });
        }

        function deleteMenuItem(menuItem) {
            
        }
    }
})();
