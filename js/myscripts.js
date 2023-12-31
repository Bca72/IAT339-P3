$(document).ready(function () {
    $(this).scrollTop(0);
    if (window.location.hash != "#projects") {
        setTimeout(function () {
            $('.arrow').removeClass('fade');
        }, 6000);
    }
    $('.toggle-collapse').click(function () {
        $('.navbar-collapse').toggleClass("collapse");
    })
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $('.arrow').addClass('fade');
        } else {
            $('.arrow').removeClass('fade');
        }
    })
});

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}