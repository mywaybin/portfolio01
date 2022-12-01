$(function () {

    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });

    // mainSlide
    $('.mainSlide').slick({
        //slidesToShow: 2,
        //arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.bottomBanner i').on('click', function () {
        $('.bottomBanner .inner').slideToggle('on');
    });

    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});