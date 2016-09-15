(function() {
    'use strict';

    angular
        .module('app', ["ui.router"])
        .value('apiUrl', 'http://localhost:61815/api' )
        .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
    

    function appConfig($urlRouterProvider, $stateProvider) {

    	$urlRouterProvider.otherwise('/login');
    
    	$stateProvider
    	.state('login', {
    		url: '/login',
    		controller: 'LoginController as login',
    		templateUrl: 'js/login/login.html'
    	})
/////// RESTAURANT STATES ////////////////////////////////////////////
    	.state('restaurants', {
    		url: '/restaurants', 
    		abstract: true, 
    		template: '<div ui-view></div>'
    	})
    		.state('restaurants.list', {
    			url: '/list',
    			controller: 'RestaurantListController as restaurantList',
    			templateUrl: 'restaurants/list.html'
    		})
    		.state('restaurants.detail', {
    			url: '/detail?restaurantId',
    			controller: 'RestaurantDetailController as restaurantDetail',
    			templateUrl: 'restaurants/detail.html'
    		})
    			.state('restaurants.detail.tabs', {
    				url: '/tabs',
    				abstract: true,
    				template: '<div ui-view></div>'
    			})
    				.state('restaurants.detail.tabs.menu', {
    					url: '/menu',
    					controller: 'RestaurantDetailMenuController as restaurantDetailMenu',
    					templateUrl: 'menu/menu.html'
    				})
    				.state('restaurants.detail.tabs.orders', {
    					url: '/orders',
    					controller: 'RestaurantDetailOrdersController as restaurantDetailOrders',
    					templateUrl: 'orders/orders.html'
    				})
    				.state('restaurants.detail.tabs.reviews', {
    					url: '/reviews',
    					controller: 'RestaurantDetailReviewsController as restaurantDetailReviews',
    					templateUrl: 'reviews/reviews.html'
    				})
/////// CUSTOMERS STATES ////////////////////////////////////////////
		.state('customers', {
			url: '/customers',
			abstract: true,
			template: '<div ui-view></div>'
		})
			.state('customers.list', {
				url: '/list',
				controller: 'CustomersListController as customersList',
				templateUrl: 'customers/list.html'
			})
			.state('customers.detail', {
				url: '/detail?customerId',
				controller: 'CustomerDetailController as customerDetail',
				templateUrl: 'customers/detail.html'
			});
    }   
})();