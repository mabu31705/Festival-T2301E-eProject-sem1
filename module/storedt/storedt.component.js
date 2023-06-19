
angular.module('storeDetail').component('storeDetail', {
    templateUrl: './module/storedt/storedt.template.html',
    controller: ['$routeParams','$scope','$window','$http',
        function storeDetail($routeParams,$scope,$window,$http) {
            $http.get("./data/data.json").then(function (response) {
                $scope.books=response.data;
                $scope.bookId = $routeParams.bookId-1;
                const exsitingUser = JSON.parse(localStorage.getItem('currentUser')) || [];
                let userCart =exsitingUser.listItem;
                $scope.addToCart = function(cartItem) {
                    userCart.push(cartItem);
                    localStorage.setItem('currentUser', JSON.stringify(exsitingUser));
                    // location.reload();
                };
                let slideIndex = 0;
                const slideStore = document.getElementsByClassName("slideStore");

                function showSlideStore(index) {
                    // Hide all slideStore
                    for (let i = 0; i < slideStore.length; i++) {
                        slideStore[i].classList.remove("activeStore");
                    }

                    // Display the selected slide
                    slideStore[index].classList.add("activeStore");
                }

                function nextSlide() {
                    slideIndex++;
                    if (slideIndex >= slideStore.length) {
                        slideIndex = 0; // Wrap around to the first slide
                    }
                    showSlideStore(slideIndex);
                }

                setInterval(nextSlide, 3000);

                showSlideStore(slideIndex);
            })


        }
    ]
});
