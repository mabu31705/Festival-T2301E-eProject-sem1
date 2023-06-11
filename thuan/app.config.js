angular.module('myApp').config(['$routeProvider',
    function config($routeProvider) {
        $routeProvider.
        when('/store', {
            template: '<store></store>'
        }).
        otherwise('/home');
    }
]);