
$(window).scrollTop(0);

// Hide Header on on scroll down
var lastScrollTop = 0;
var header = $('.header');

$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop && scrollTop > 200) {
        // Scroll Down: Fade Out header with slide-up effect
        header.removeClass('fadeInDown').addClass('fadeOutUp').fadeOut();
    } else if (scrollTop < lastScrollTop) {
        // Scroll Up: Fade In header with slide-down effect
        header.removeClass('fadeOutUp').addClass('fadeInDown').fadeIn();
    }

    lastScrollTop = scrollTop;
});

// Homepage main slider
$(".mainslider").slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: false,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
            },
        },
    ],
});

$(".testimonialSlider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    touchThreshold: 10, // Adjust this value for smoother touch response
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                dots: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: "48px",
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: "28px",
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

$(function () {
    $('a[href*=\\#]').on('click', function (e) {
        e.preventDefault(); // Prevent the default action of the anchor click

        var target = $(this).attr('href'); // Get the target element's ID
        var $target = $(target); // Select the target element

        if ($target.length) { // Check if the target element exists
            $('html, body').animate(
                {
                    scrollTop: $target.offset().top // Animate the scrollTop property
                },
                500, // Duration of the animation in milliseconds
                'swing' // Easing function for smooth scrolling
            );
        }
    });
});