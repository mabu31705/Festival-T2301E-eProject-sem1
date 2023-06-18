angular.module('gallery').component('gallery', {
    templateUrl: './module/gallery/gallery.template.html',
    controller: ['$routeParams', '$scope', '$window',
        function galleryC($routeParams, $scope, $window) {
            let listImg = [
                {"img":"1.jpg","des":"something"},
                {"img":"2.jpg","des":"something"},
                {"img":"3.jpg","des":"something"},
                {"img":"4.jpg","des":"something"},
                {"img":"1.jpeg","des":"something"},
                {"img":"2.jpeg","des":"something"},
                {"img":"3.jpeg","des":"something"},
                {"img":"4.jpeg","des":"something"},
                {"img":"5.jpeg","des":"something"},
                {"img":"6.jpeg","des":"something"},
                {"img":"7.jpeg","des":"something"},
                {"img":"8.jpeg","des":"something"},
                {"img":"9.jpeg","des":"something"},
                {"img":"10.jpeg","des":"something"},
                {"img":"11.jpeg","des":"something"},
                {"img":"12.jpeg","des":"something"},
                {"img":"13.jpeg","des":"something"},
                {"img":"14.jpeg","des":"something"},
                {"img":"15.jpeg","des":"something"},
                {"img":"16.jpeg","des":"something"},
                {"img":"17.jpeg","des":"something"},
                {"img":"18.jpeg","des":"something"},
                {"img":"19.jpeg","des":"something"}
               ]
            $scope.listImg = listImg;
        }
    ]
});
