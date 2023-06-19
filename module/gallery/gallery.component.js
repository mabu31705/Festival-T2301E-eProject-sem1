angular.module('gallery').component('gallery', {
    templateUrl: './module/gallery/gallery.template.html',
    controller: ['$routeParams', '$scope', '$window',
        function galleryC($routeParams, $scope, $window) {
            let listImg = [
                {"img":"1.jpg","des":"christmas","des2":"Time for the mistletoe"},
                {"img":"2.jpg","des":"diwali","des2":"A spirtually illumined soul lives in the world"},
                {"img":"3.jpg","des":"eidaladha","des2":"We behold what we are, and we are what we behold"},
                {"img":"4.jpg","des":"christmas","des2":"We can hear the bells ringing!"},
                {"img":"1.jpeg","des":"christmas","des2":"Is it too late to be good?"},
                {"img":"2.jpeg","des":"christmas","des2":"Be jolly in the festive season!"},
                {"img":"3.jpeg","des":"diwali","des2":"Time for the mistletoe"},
                {"img":"4.jpeg","des":"diwali","des2":"Time for the mistletoe"},
                {"img":"5.jpeg","des":"eidaladha","des2":"Time for the mistletoe"},
                {"img":"6.jpeg","des":"eidaladha","des2":"Affirm divine calmness and peace"},
                {"img":"7.jpeg","des":"diwali","des2":"Time for the mistletoe"},
                {"img":"8.jpeg","des":"eidaladha","des2":"Set thy heart upon thy work, but never on its reward"},
                {"img":"9.jpeg","des":"diwali","des2":"TOur soul intuition is a faculty of God. He has no mouth, yet"},
                {"img":"10.jpeg","des":"diwali","des2":"Self-realization in the full sense of the word."},
                {"img":"11.jpeg","des":"diwali","des2":"For the soul, there is never birth nor death."},
                {"img":"12.jpeg","des":"diwali","des2":"Whatever happened was good"},
                {"img":"13.jpeg","des":"diwali","des2":"Whatever is happening is good"},
                {"img":"14.jpeg","des":"diwali","des2":"Whatever will happen will also be good"},
                {"img":"15.jpeg","des":"diwali","des2":"God is in the details"},
                {"img":"16.jpeg","des":"diwali","des2":"Expectancy is the atmosphere for miracles"},
                {"img":"17.jpeg","des":"eidaladha","des2":"Hate the sin, love the sinner."},
                {"img":"18.jpeg","des":"diwali","des2":"My religion is very simple. My religion is kindness."},
                {"img":"19.jpeg","des":"diwali","des2":"Hinduism is the mother of all religions"}
               ]
            $scope.listImg = listImg;
        }
    ]
});
