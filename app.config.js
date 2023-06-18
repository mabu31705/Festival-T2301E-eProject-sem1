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
        when('/about',{
            template: '<about></about>'
        }).
        when('/christian',{
            template: '<christian></christian>'
        }).
        when('/hindu',{
            template: '<hindu></hindu>'
        }).
        when('/islam',{
            template: '<islam></islam>'
        }).
        when('/christmas',{
            template: '<christmas></christmas>'
        }).
        when('/easter',{
            template: '<easter></easter>'
        }).
        when('/lent',{
            template: '<lent></lent>'
        }).
        when('/diwali',{
            template: '<diwali></diwali>'
        }).
        when('/holi',{
            template: '<holi></holi>'
        }).
        when('/kumbhmela',{
            template: '<kumbhmela></kumbhmela>'
        }).
        when('/mahashivaratri',{
            template: '<mahashivaratri></mahashivaratri>'
        }).
        when('/eidaladha',{
            template: '<eidaladha></eidaladha>'
        }).
        when('/eidalfitr',{
            template: '<eidalfitr></eidalfitr>'
        }).
        when('/ramadan',{
            template: '<ramadan></ramadan>'
        }).
        when('/gallery',{
            template: '<gallery></gallery>'
        }).
        otherwise('/landing');
    }
]);