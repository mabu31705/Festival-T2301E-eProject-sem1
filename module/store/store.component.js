angular.module('store').component('store', {
    templateUrl: 'module/store/store.template.html',
    controller: ['$scope', '$http', '$window',
        function storeController($scope, $http, $window) {
            $http.get("./data/data.json").then(function (response) {
                $scope.books = response.data;
                let christian = [$scope.books[0], $scope.books[1], $scope.books[2]];
                let hindu = [$scope.books[3], $scope.books[4], $scope.books[5]];
                let islam = [$scope.books[6], $scope.books[7], $scope.books[8]];
                let numC = christian.length;
                let numH = hindu.length;
                let numI = islam.length;
                $scope.numC = numC;
                $scope.numH = numH;
                $scope.numI = numI;
                $scope.christian=christian;
                $scope.hindu=hindu;
                $scope.islam=islam;
                //save data to localstorage
                let jsonData = angular.toJson($scope.books)
                $window.localStorage.setItem('books', jsonData);
            })

            let jsonData = $window.localStorage.getItem('books');
            // if (jsonData) {
            let data = angular.fromJson(jsonData); // Chuyển đổi JSON string thành object
            // }

            function removeData() {
                $window.localStorage.removeItem('books');
            }

            let exsitingUser = JSON.parse(localStorage.getItem('users')) || [];

            //
            let userIndex = 0;
            let userCart =exsitingUser.listItem;
            $scope.addToCart = function(cartItem) {
                userCart.push(cartItem);
                localStorage.setItem('users', JSON.stringify(exsitingUser));
                location.reload();
            };
            $scope.removeItemCart = function(index) {
                userCart.splice(index, 1);
            };

            //
            $scope.searchText = '';
            $scope.suggestions = [];
            $scope.showSuggestions = false;
            $scope.autoText = '';
            $scope.updateSuggestions = function () {
                if ($scope.searchText === '') {
                    $scope.suggestions = [];
                    $scope.showSuggestions = false;
                } else {
                    // Filter the suggestions based on the searchText
                    $scope.suggestions = getSuggestions($scope.searchText);
                    $scope.showSuggestions = true;
                }
            }
            function getSuggestions(searchText) {
                // Retrieve the array or data from localStorage
                let storedData = localStorage.getItem('books');
                let dataArray = storedData ? JSON.parse(storedData) : [];
                // Extract the specific attribute from each object
                let attributeArray = dataArray.map(function(item) {
                    return item.bookName; // Replace 'name' with the desired attribute key
                });

                // Filter the suggestions based on the searchText
                let filteredSuggestions = attributeArray.filter(function(item) {
                    return item.toLowerCase().includes(searchText.toLowerCase());
                });

                return filteredSuggestions;
            }

            $scope.insertC = function(content) {
                $scope.buttonText  = content;
            };
        }]
});
