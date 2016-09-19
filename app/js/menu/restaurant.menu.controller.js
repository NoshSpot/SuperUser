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
        vm.addMenuGroup = addMenuGroup;
        vm.deleteMenuItem = deleteMenuItem;
        ////////////////
        getMenu();
        ////////////////

        function getMenu() {
            if ($stateParams.restaurantId) {
                RestaurantFactory.getById($stateParams.restaurantId).then(function(response) {
                    vm.menu = response.menuGroups;
                });
            } else {
                vm.menu = {};
            }
        }

        function addMenuItem(newMenuItem, menuGroupId) {
            newMenuItem.menuGroupId = menuGroupId;

            MenuItemFactory.add(newMenuItem).then(function() {
                getMenu();
                newMenuItem = {};
            });
        }

        function deleteMenuItem(menuItem) {
            MenuItemFactory.remove(menuItem.menuItemId).then(function(response) {
                getMenu();
            });
        }

        function addMenuGroup() {
            vm.newGroup.restaurantId = $stateParams.restaurantId;
            MenuGroupFactory.add(vm.newGroup).then(function(response) {
                getMenu();
            });
        }
    }
})();
