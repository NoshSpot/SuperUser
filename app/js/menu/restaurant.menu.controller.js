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
        vm.deleteMenuItem = deleteMenuItem;
        ////////////////
        getMenu();
        ////////////////

        function getMenu() {
            RestaurantFactory.getById($stateParams.restaurantId).then(function(response) {
                vm.menu = response.menuGroups;
            });
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
    }
})();
