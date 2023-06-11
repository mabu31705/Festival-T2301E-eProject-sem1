angular.module('myApp').config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
        when('/store', {
            template: '<store></store>'
        }).
        when('/store/:bookId',{
            template: '<store-detail></store-detail>'
        }).
        when('/landing',{
            template: '<landing></landing>'
        }).
        otherwise('/landing');
    }
]);