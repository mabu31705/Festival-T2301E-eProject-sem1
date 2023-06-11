
angular.module('storeDetail').component('storeDetail', {
    templateUrl: './module/storedt/landing.template.html',
    controller: ['$routeParams','$scope','$window','$http',
        function storeDetail($routeParams,$scope,$window,$http) {
            $scope.books=  angular.fromJson($window.localStorage.getItem('books'));
            $scope.bookId = $routeParams.bookId;
        }
    ]
});
