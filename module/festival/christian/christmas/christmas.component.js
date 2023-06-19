angular.module('christmas').component('christmas', {
    templateUrl: './module/festival/christian/christmas/christmas.template.html',
    controller: ['$routeParams', '$scope', '$window',
        function christmasC($routeParams, $scope, $window) {
            // Set the date we're counting down to
            let countDownDates = new Date("Dec 25, 2023 00:00:00").getTime();

            // Update the count down every 1 second
            let x = setInterval(function () {
                // Get today's date and time
                let nows = new Date().getTime();

                // Find the distance between now and the count down date
                let distance = countDownDates - nows;

                // Time calculations for dayss, hourss, minutess and secondss
                let dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let secondss = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = dayss + "d " + hourss + "h "
                    + minutess + "m " + secondss + "s ";

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("demo").innerHTML = "EXPIRED";
                }
            }, 1000);

        }
    ]
});
