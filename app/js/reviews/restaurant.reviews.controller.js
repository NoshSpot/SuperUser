(function() {
    'use strict';

    angular
        .module('app')
        .controller('RestaurantDetailReviewsController', RestaurantDetailReviewsController);

    RestaurantDetailReviewsController.$inject = ['ReviewFactory', '$stateParams'];

    /* @ngInject */
    function RestaurantDetailReviewsController(ReviewFactory, $stateParams) {
        var vm = this;
        vm.title = 'RestaurantDetailReviewsController';
        // vm.reviews = reviews;
        vm.removeReview = removeReview;

        activate();

        ////////////////

        function activate() {
            ReviewFactory.getAll().then(
                function(data) {
                    vm.reviews = data;
                }
            );
        }

        function removeReview(review) {
            if (confirm("Are you sure you want to remove this Review?")) {
                ReviewFactory.remove(review.reviewId).then(
                    function() {
                        var index = vm.reviews.indexOf(review);
                        vm.reviews.splice(index, 1);
                        console.log("remove");
                    }
                );
            }
        }
        
    }
})();
