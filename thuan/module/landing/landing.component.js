angular.module('landing').component('landing', {
    templateUrl: 'module/landing/landing.template.html',
    controller: ['$routeParams', '$scope', '$window', '$interval', '$http', '$timeout',
        function landingController($routeParams, $scope, $window, $interval, $http, $timeout) {
            $scope.scrollToSection = function (sectionId) {
                let element = document.getElementById(sectionId);
                if (element) {
                    $window.scrollTo({
                        top: element.offsetTop,
                        behavior: 'smooth'
                    });
                }
            };
            $scope.images = [
                {url: './images/pngs/slide/1.jpg', alt: 'Image 1'},
                {url: './images/pngs/slide/2.jpeg', alt: 'Image 2'},
                {url: './images/pngs/slide/3.jpeg', alt: 'Image 3'},
                {url: './images/pngs/slide/4.jpg', alt: 'Image 4'},
                {url: './images/pngs/slide/5.jpeg', alt: 'Image 5'},
                {url: './images/pngs/slide/6.jpeg', alt: 'Image 6'},
                {url: './images/pngs/slide/7.jpeg', alt: 'Image 7'},
                {url: './images/pngs/slide/8.jpeg', alt: 'Image 8'},
                {url: './images/pngs/slide/9.jpg', alt: 'Image 9'},
                {url: './images/pngs/slide/10.jpeg', alt: 'Image 10'}

            ];
            $scope.activeSlide = 0;
            $scope.previousSlide = $scope.images.length - 1;

            $interval(function () {
                $scope.previousSlide = $scope.activeSlide;
                $scope.activeSlide = ($scope.activeSlide + 1) % $scope.images.length;
            }, 3000);
            $http.get("./data/users.json").then(function (response) {

                $scope.users = response.data;
                let jsonData = angular.toJson($scope.users)
                $window.localStorage.setItem('users', jsonData);
            })
            let getJsonData = $window.localStorage.getItem('users');
            let numCartItem = angular.fromJson(getJsonData);
            let user1ListItem = (numCartItem[0].listItem).length;
            $scope.numCartItem = user1ListItem;


        }
    ]

});
