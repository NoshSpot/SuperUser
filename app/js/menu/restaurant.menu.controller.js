(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantDetailMenuController', RestaurantDetailMenuController);

    RestaurantDetailMenuController.$inject = ['MenuGroupFactory', 'MenuItemFactory', '$stateParams', 'RestaurantFactory'];

    /* @ngInject */
    function RestaurantDetailMenuController(MenuGroupFactory, MenuItemFactory, $stateParams, RestaurantFactory) {
        var vm = this;
        vm.menuGroups = [];
        getMenu();

        ////////////////

        function getMenu() {
        	RestaurantFactory.getById($stateParams.restaurantId).then(function(response){
        		for(var i= 0; i > response.data.menuGroups.length; i++ ) {
        			
        		}
        	}) 

        	
        }
    }
})();