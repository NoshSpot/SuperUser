(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantDetailController', RestaurantDetailController);

    RestaurantDetailController.$inject = ['$stateParams', 'RestaurantFactory', '$state'];

    /* @ngInject */
    function RestaurantDetailController($stateParams, RestaurantFactory, $state) {
        var vm = this;
        vm.title = 'RestaurantDetailController';
        vm.save = save;
        vm.restaurants = {};
        vm.getRestaurantById = getRestaurantById;
        vm.$state = $state;

        getRestaurantById();

        ////////////////

        function getRestaurantById() {
        	// If the page loads, and the existing restaurant is already paired with an Id, then continue the request with that specified restaurant.
            if ($stateParams.restaurantId) {
                vm.restaurantId = $stateParams.restaurantId;
                
                RestaurantFactory.getById($stateParams.restaurantId).then(
                    function(restaurants) {
                        // With an exisiting Id, the vm.restaurants value will be equal to an existing restaurant.
                        vm.restaurants = restaurants;
                    }
                );
            } else {
                // If the restaurant was not already in the system, then vm.restaurants value will be equal to the user's input. 
                // After being created, a restaurant Id will be assigned to the database to be called upon.
                vm.restaurants = {};
            }
        }
        function save(restaurants, restaurantId) {
            // If the page loads, and the existing restaurant is already paired with an Id, then continue wthe request with that specified restaurant.
            if ($stateParams.restaurantId) {
                // Call the current restaurant information, to be updated.
                RestaurantFactory.update(vm.restaurants, vm.restaurants.restaurantId).then(
                    function() {
                        alert("Update was successful!")
                        $state.go('restaurant.list');
                    }
                );
          } else {
            // If the restaurant was not already in the system, 'add' a new restaurant value for the vm.restaurants item. 
            RestaurantFactory.add(vm.restaurants).then(
                function() {
                    // Save + create was successful.
                    alert("Add was successful!")
                    $state.go('restaurant.list');
                }
            );
          }
        }
    }
})();