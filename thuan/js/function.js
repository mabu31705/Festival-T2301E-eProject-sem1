if (typeof (Storage) !== 'undefined') {
    //Nếu có hỗ trợ
    //Thực hiện thao tác với Storage
    console.log('Trình duyệt của bạn hỗ trợ Storage');
} else {
    //Nếu không hỗ trợ
    console.log('Trình duyệt của bạn không hỗ trợ Storage');
}

$(document).ready(function() {
    $('#myLandingCarouse').carousel({
        interval: 3000 // Change slide interval (in milliseconds) as desired
    });
});