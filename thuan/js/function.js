if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}
let app = angular.module("myApp", ["ngRoute"]);
app.controller("firstController", myController);
const container = document.getElementById('map')

function myController($scope, $http) {
    $http.get("../data/data.json").then(function (response) {
        $scope.books = response.data;
        let data = $scope.books;
        let christian = [$scope.books[0], $scope.books[1], $scope.books[2]];
        let hindu = [$scope.books[3], $scope.books[4], $scope.books[5]];
        let islam = [$scope.books[6], $scope.books[7], $scope.books[8]];
        let p1 = [];
        let p2 = [];
        let p3 = [];
        let p4 = [];
        $scope.christian = christian;
        $scope.hindu = hindu;
        $scope.islam = islam;
        // for (let i = 0; i <= $scope.books.length; i++) {
        //     if (data[i].price < 500) {
        //         p1.push(data[i]);
        //     } else if (data[i].price > 500 && data[i].price < 1000) {
        //         p2.push(data[i]);
        //     } else if (data[i].price > 1000 && data[i].price < 2000) {
        //         p3.push(data[i])
        //     } else if (data[i].price > 2000) {
        //         p4.push(data[i])
        //     }
        //     $scope.p1 = p1;
        //     $scope.p2 = p2;
        //     $scope.p3 = p3;
        //     $scope.p4 = p4;
        // }
    })
    // let limit = 2;
    // let offset = 0;
    // let maxPage = 2;
    // $scope.limit = limit;
    // $scope.startOffset = offset;
    // $scope.pre = function () {
    //     offset = offset - limit;
    //     $scope.startOffset = offset;
    // }
    // $scope.next = function () {
    //     offset = offset + limit;
    //     $scope.startOffset = offset;
    // }
    // $scope.searchKey = "";

    // map

    // let lat= 21.028694544996597;
    // let lng= 105.78178303933102;
    // let map = L.map('map').setView([lat, lng], 13);
    // let markers = [
    //     { lat: lat, lng: lng, text: 'Company HeadQuarter' },
    // ];
    //
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    //     maxZoom: 18,
    // }).addTo(map);
    // markers.forEach(function(marker) {
    //     L.marker([marker.lat, marker.lng]).addTo(map)
    //         .bindPopup(marker.text)
    //         .openPopup();
    // });

}

app.config(function ($routeProvider) {
    $routeProvider
        .when("/detail", {
            templateUrl: "festival-shop-description.html"
        })
        .when("/books", {
            templateUrl: "festival-shop.html"
        })
        // .when("/abouts", {
        //     templateUrl: "map.html"
        // })
        .when("/christ", {
            templateUrl: "../../huy/html/ChristianFes.html"
        })
        .when("/hindu", {
            templateUrl: "../../huy/html/HinduFes.html"
        })
        .when("/islam", {
            templateUrl: "../../huy/html/IslamFes.html"
        })

})
