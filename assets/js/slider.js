import lightGallery from "https://cdn.skypack.dev/lightgallery@2.0.0-beta.3";

jQuery(document).ready(function () {
 
    let slickEl = document.getElementById('slick-carousel-gallery-demo');
    if (slickEl) {
        var $slickDemo = $('#slick-carousel-gallery-demo');

        $slickDemo.on('init', function (event, slick, direction) {
            console.log('Slick slider initialized');
            const container = document.querySelector('.slick-track');
            lightGallery(container, {
                thumbnail: false,
                pager: false,
                plugins: [],
                hash: false,
                preload: 4,
            });
        });
        $slickDemo.slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            customPaging: '10px',
            focusOnSelect: true,
            swipe: false,
            variableWidth: true,
            prevArrow: '<div class="slick-prev">&#9665;</div>',
            nextArrow: '<div class="slick-next">&#9655;</div>',
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
        });
    }
});