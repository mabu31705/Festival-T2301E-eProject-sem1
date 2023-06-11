angular.module('store').component('store', {
    templateUrl: 'module/store/store.template.html',
    controller: ['$routeParams', '$scope', '$http',
        function storeController($routeParams, $scope, $http) {
            $http.get("./data/data.json").then(function (response) {
                $scope.books = response.data;
                let christian = [$scope.books[0], $scope.books[1], $scope.books[2]];
                let hindu = [$scope.books[3], $scope.books[4], $scope.books[5]];
                let islam = [$scope.books[6], $scope.books[7], $scope.books[8]];
                $scope.christian = christian;
                $scope.hindu = hindu;
                $scope.islam = islam;

            })

        }
    ]
});
