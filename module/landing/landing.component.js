angular.module('landing').component('landing', {
    templateUrl: 'module/landing/landing.template.html',
    controller: ['$routeParams', '$scope', '$window', '$interval', '$http',
        function landingController($routeParams, $scope, $window, $interval, $http) {

            $http.get("./data/users.json").then(function (response) {
                $scope.users = response.data;
                let jsonData = angular.toJson($scope.users)
                let storedData = localStorage.getItem('users');
                if(storedData) {

                } else {
                    // $window.localStorage.setItem('users', jsonData);
                }

            })
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
                {url: './images/pngs/bg/1.jpg', alt: 'Image 1'},
                {url: './images/pngs/bg/1.jpeg', alt: 'Image 2'},
                {url: './images/pngs/bg/2.jpeg', alt: 'Image 3'},
                {url: './images/pngs/bg/2.jpg', alt: 'Image 4'},
            ];
            $scope.activeSlide = 0;
            $scope.previousSlide = $scope.images.length - 1;

            $interval(function () {
                $scope.previousSlide = $scope.activeSlide;
                $scope.activeSlide = ($scope.activeSlide + 1) % $scope.images.length;
            }, 30000);
            // slideshow
            let images = [
                {
                    src: './images/pngs/slide/1.jpg',
                    title: 'Christmas',
                    des: 'Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25[a] as a religious and cultural celebration among billions of people around the world.[2][3][4] A feast central to the Christian liturgical year, it is preceded by the season of Advent or the Nativity Fast and initiates the season of Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night.[5] Christmas Day is a public holiday in many countries,[6][7][8] is celebrated religiously by a majority of Christians,[9] as well as culturally by many non-Christians,[1][10] and forms an integral part of the holiday season organized around it.',
                    button: 'Button 1'
                },
                {
                    src: './images/pngs/slide/2.jpg',
                    title: 'RamaNsita',
                    des: 'Sita Ramam is a 2022 Indian Telugu-language period romantic drama film written and directed by Hanu Raghavapudi. Produced by Vyjayanthi Movies and Swapna Cinema, the film stars Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna and Sumanth. The movie marks Mrunal Thakur\'s debut in Tollywood. Set in 1964, Lieutenant Ram, an orphaned army officer serving at the Kashmir border, gets anonymous love letters from Sita Mahalakshmi, after which Ram is on a mission to find Sita and propose his love.',
                    button: 'Button 2'
                },
                {
                    src: './images/pngs/slide/3.jpg',
                    title: 'EidAlFitr',
                    des: 'Eid al-Fitr (/ˌiːd əl ˈfɪtər, -trə/; Arabic: عيد الفطر, romanized: ʿĪd al-Fiṭr, lit. \'Holiday of Breaking the Fast\',[4] IPA: [ʕiːd æl ˈfɪtˤr]) is the earlier of the two official holidays celebrated within Islam (the other being Eid al-Adha). While the Qur\'an does not mention the celebration of Eid,[5] the religious holiday of Eid al-Fitr is celebrated by Muslims worldwide because it marks the end of the month-long dawn-to-sunset fasting of Ramadan.[6] ',
                    button: 'Button 3'
                },
                {
                    src: './images/pngs/slide/1.jpeg',
                    title: 'Easter',
                    des: 'Easter,[nb 1] also called Pascha[nb 2] (Aramaic, Greek, Latin) or Resurrection Sunday,[nb 3] is a Christian festival and cultural holiday commemorating the resurrection of Jesus from the dead, described in the New Testament as having occurred on the third day of his burial following his crucifixion by the Romans at Callety c. 30 AD.[12][13] It is the culmination of the Passion of Jesus Christ, preceded by Lent (or Great Lent), a 40-day period of fasting, prayer, and penance.',
                    button: 'Button 4'
                },
                {
                    src: './images/pngs/slide/2.jpeg',
                    title: 'Lent',
                    des: 'Lent (Latin: Quadragesima,[1] \'Fortieth\') is the solemn Christian religious observance in the liturgical year commemorating the 40 days Jesus Christ spent fasting in the desert and enduring temptation by Satan, according to the Gospels of Matthew, Mark and Luke, before beginning his public ministry.[2][3] Lent is observed in the Anglican, Eastern Orthodox, Lutheran, Methodist, Moravian, Oriental Orthodox, Church of the East, United Protestant and Roman Catholic traditions of Christianity',
                    button: 'Button 5'
                },
                {
                    src: './images/pngs/slide/3.jpeg',
                    title: 'Holi',
                    des: 'Holi (Hindi pronunciation: [\'hoːli:]) is a popular and significant Hindu festival celebrated as the Festival of Colours, Love and Spring.[1][9][10][11] It celebrates the eternal and divine love of the god Radha and Krishna.[12][13] Additionally, the day also signifies the triumph of good over evil,[14][15] as it commemorates the victory of Vishnu as Narasimha Narayana over Hiranyakashipu.[16][17] ',
                    button: 'Button 6'
                },
                {
                    src: './images/pngs/slide/4.jpeg',
                    title: 'HokumbhMela',
                    des: 'Kumbh Mela or Kumbha Mela (/ˌkʊmb ˈmeɪlə/) is a major pilgrimage and festival in Hinduism.[1] It is celebrated in a cycle of approximately 12 years, to celebrate every revolution Brihaspati (Jupiter) completes, at four river-bank pilgrimage sites: Prayagraj (Ganga-Yamuna-Sarasvati rivers confluence), Haridwar (Ganges), Nashik (Godaleti), and Ujjain (Shipra).[1][2] ',
                    button: 'Button 6'
                },
                {
                    src: './images/pngs/slide/5.jpeg',
                    title: 'Mahashiletatri',
                    des: 'Maha Shiletatri (Sanskrit: महाशिवरात्रि, romanized: Mahāśiletātri, lit. \'The Great Night of Shiva\') is a Hindu festival celebrated annually in honour of the deity Shiva, between February and March.[7] According to the Hindu calendar, the festival is observed on the fourteenth day of the dark (waning) half of the lunar month of Phalguna or Magha.[7][8] ',
                    button: 'Button 6'
                }
            ];
            let currentIndex = 0;
            let slideshow = document.getElementById('slideShow');
            let dotContainer = document.getElementById('dotContainer');
            let prevBtn = document.getElementById('prevBtn');
            let nextBtn = document.getElementById('nextBtn');
            let imageDescription = document.getElementById('imageDescription');
            let des = document.getElementById('des');

            function createSlide(index) {
                let image = images[index];
                let slide = document.createElement('div');
                slide.classList.add('slideS');
                let img = document.createElement('img');
                img.src = image.src;
                img.alt = 'Slideshow Image';
                slide.appendChild(img);
                slideshow.innerHTML = '';
                slideshow.appendChild(slide);
                imageDescription.textContent = image.title;
                des.textContent = image.des;
            }

            function updateActiveDot(index) {
                let dots = dotContainer.getElementsByClassName('dot');
                for (let i = 0; i < dots.length; i++) {
                    dots[i].classList.remove('activeSlide');
                }
                dots[index].classList.add('activeSlide');
            }

            function prevSlide() {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                createSlide(currentIndex);
                updateActiveDot(currentIndex);
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % images.length;
                createSlide(currentIndex);
                updateActiveDot(currentIndex);
            }

            function startSlideshow() {
                nextSlide(); // Show the initial slide

                // Start the interval timer
                setInterval(function () {
                    nextSlide();
                }, 3000); // Change slide every 3 seconds
            }

            // Create dots for each slide
            for (let i = 0; i < images.length; i++) {
                let dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === currentIndex) {
                    dot.classList.add('activeSlide');
                }
                dot.addEventListener('click', function () {
                    let dotIndex = parseInt(this.dataset.index);
                    createSlide(dotIndex);
                    updateActiveDot(dotIndex);
                    currentIndex = dotIndex;
                },{passive:true });
                dot.dataset.index = i;
                dotContainer.appendChild(dot);
            }

            createSlide(currentIndex);
            updateActiveDot(currentIndex);

            prevBtn.addEventListener('click', prevSlide,{passive:true });
            nextBtn.addEventListener('click', nextSlide,{passive:true });

            startSlideshow();


            // Update the count down every 1 second
            let countDownDates = new Date("Dec 25, 2023 00:00:00").getTime();
            let countdown=setInterval(function () {
                let nows = new Date().getTime();
                let distance = countDownDates - nows;

                // Time calculations for days, hours, minutes and seconds
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                let a=document.getElementById("dayss");
                let b=document.getElementById("hourss");
                let c=document.getElementById("minutess");
                let d=document.getElementById("secondss");
                if(a!=null || b!=null || c!=null || d!=null ){
                    a.innerHTML=days;
                    b.innerHTML=hours;
                    c.innerHTML=minutes;
                    d.innerHTML=seconds;
                    if (distance < 0) {
                        clearInterval(x);
                        a.innerHTML = "Festival";
                        b.innerHTML = "Has";
                        c.innerHTML = "Ended";
                        d.innerHTML = "";
                    }
                }
                // If the count down is over, write some text
            }, 1000);
            //


        }
    ]

});
