
if (typeof(Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}
let app = angular.module("myApp",["ngRoute"]);
app.controller("firstController", myController);
function myController($scope,$http){
    $http.get("../data/data.json").
    then(function (response){
        $scope.books = response.data;
        let data=$scope.books;
        let christian = [$scope.books[0],$scope.books[1],$scope.books[2]];
        let hindu = [$scope.books[3],$scope.books[4],$scope.books[5]];
        let islam = [$scope.books[6],$scope.books[7],$scope.books[8]];
        let p1=[];
        let p2=[];
        let p3=[];
        let p4=[];
        $scope.christian=christian;
        $scope.hindu=hindu;
        $scope.islam=islam;
        for (let i=0; i<=$scope.books.length;i++) {
            if (data[i].price <500){
                p1.push(data[i]);
            }
            else if (data[i].price >500 && data[i].price <1000 ){
                p2.push(data[i]);
            }
            else if (data[i].price >1000 && data[i].price <2000){
                p3.push(data[i])
            }
            else if (data[i].price >2000 ){
                p4.push(data[i])
            }
            $scope.p1=p1;
            $scope.p2=p2;
            $scope.p3=p3;
            $scope.p4=p4;
        }
    })
    let limit = 2;
    let offset = 0;
    let maxPage = 2;
    $scope.limit = limit;
    $scope.startOffset = offset;
    $scope.pre = function(){
        offset = offset - limit;
        $scope.startOffset = offset;
    }
    $scope.next = function(){
        offset = offset + limit;
        $scope.startOffset = offset;
    }
    $scope.searchKey = "";
}
app.config(function ($routeProvider){
    $routeProvider.when("/detail",{
        templateUrl: "festival-shop-description.html"
    }).when("/books",{
        templateUrl: "festival-shop.html"
    })
})



// config map
let config = {
    minZoom: 7,
    maxZoom: 18,
};
// magnification with which the map will start
const zoom = 18;
const lat = 21.028694544996597;
const lng = 105.78178303933102;
// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([lat, lng]).addTo(map).bindPopup("T2301E - Headquarter");