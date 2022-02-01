$(document).ready(function () {
    $('.sidebar__menu-item a').bind('click', function (e) {
        var anchor = $(this);
        var hh = 93;
        $('html, body').stop().animate({
            scrollTop: $('.frame').removeClass('active-frame') && $(anchor.attr('href')).addClass('active-frame')
        }, 800);
        // active item menu
        $('a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.scroll-down-wrap').click(function (event) {
        var intViewportHeight = window.innerHeight;
        $('.tabs').animate({ scrollTop: '+=' + intViewportHeight }, 800);
    });

    $('.scroll-down-wrap').click(function (event) {
        var intViewportHeight = window.innerHeight;
        $('.tab').animate({ scrollTop: '+=' + intViewportHeight }, 800);
    });

    $('.tabs').scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.ship').removeClass('animation-ship');
            $('.ship').addClass('animation-fly');
        }
    });

    // popup
    $('.popup-btn').click(function () {
        $('.popup').addClass('open');
    });

    $('.js-close').click(function () {
        $('.popup').removeClass('open');
    });

    $('.js-btn').click(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        if (name.length !== 0 && email.length !== 0 && phone.length !== 0 && message.length !== 0) {
            setTimeout(function () {
                $('.thank').addClass('open');
            }, 400);

            setTimeout(function () {
                $('.thank').removeClass('open');
            }, 1500);
        } else {
            $('.form__control').addClass('error');
            setTimeout(function () {
                $('.form__control').removeClass('error');
            }, 500);
        }
    });

    $('.js-btn-popup').click(function () {
        var namepopup = $('#name-popup').val();
        var emailpopup = $('#email-popup').val();
        var phonepopup = $('#phone-popup').val();
        var messagepopup = $('#message-popup').val();

        if (namepopup.length !== 0 && emailpopup.length !== 0
            && phonepopup.length !== 0 && messagepopup.length !== 0) {
            setTimeout(function () {
                $('.thank').addClass('open');
            }, 400);

            setTimeout(function () {
                $('.thank').removeClass('open');
                $('.popup').removeClass('open');
            }, 1500);
        } else {
            $('.form__control').addClass('error');
            setTimeout(function () {
                $('.form__control').removeClass('error');
            }, 500);
        }
    });
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
