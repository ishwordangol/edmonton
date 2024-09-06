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
    autoplaySpeed: 4000,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    useCSS: false,
    cssEase: 'ease-in-out',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
                dots: true,
                arrows: false,
            },
        },
    ],
});

$('.mainslider').on('afterChange', function (event, slick, currentSlide) {
    // Reset all slides to the initial scale
    $('.slickbox').css('transform', 'scale(1)');

    // Apply the zoom-in effect to the current slide
    $('.slick-current').css('transform', 'scale(1.05)'); // Adjust scale as needed
});

// Trigger the zoom effect on the first slide when the page loads
$('.mainslider .slick-current').css('transform', 'scale(1.05)');

// Function to trigger AOS animation manually
function triggerAOSAnimation() {
    $('.mainslider .slick-active [data-aos]').each(function () {
        $(this).addClass('aos-animate');
    });
}

// Trigger AOS on initial load
triggerAOSAnimation();

// Reinitialize AOS on each slide change
$('.mainslider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    // Remove the aos-animate class from all elements
    $('[data-aos]').removeClass('aos-animate');
});

$('.mainslider').on('afterChange', function (event, slick, currentSlide) {
    // Add the aos-animate class to the active slide elements
    triggerAOSAnimation();

    // Refresh AOS to apply animations
    AOS.refreshHard();
});

$(".testimonialSlider").slick({
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
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

// expansion panel

$(".expansionlist > a").on("click", function (e) {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).siblings(".expansioncontent").slideUp(200);
        $(".expansionlist > a .icon-box")
            .removeClass("icon-minus")
            .addClass("icon-plus");
    } else {
        $(".expansionlist > a .icon-box")
            .removeClass("icon-minus")
            .addClass("icon-plus");
        $(this).find(".icon-box").removeClass("icon-plus").addClass("icon-minus");
        $(".expansionlist > a").removeClass("active");
        $(this).addClass("active");
        $(".expansioncontent").slideUp(200);
        $(this).siblings(".expansioncontent").slideDown(200);
    }
    e.preventDefault();
});

