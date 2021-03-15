$(document).ready(function() {

    // CSS3 Animation initialization
    AOS.init({
        duration: 1200
    });


    // Adding additional class to header on window scroll event
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var navbar =  $('.navbar-default')


        if (scroll > 100) {
            navbar.addClass("header-scroll");
        } else {
            navbar.removeClass("header-scroll");
        }

    });


    // Smooth scroll function
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
