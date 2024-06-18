$(function () {

    const headerSlide = new Swiper('.header_slide', {
        loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
    });


    // $('.main_visual .movie').YTPlayer({

    //     videoURL: 'https://www.maccosmetics.co.kr/media/export/cms/collections/disney/disney-elp-video.mp4',
    //     containment: 'self',
    //     // optimizeDisplay: false,
    // });

    const mainContentSlide = new Swiper('.main_content .main_content_slide', {
        slidesPerView: 4,
        // spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.main_content .arrows .next',
            prevEl: '.main_content .arrows .prev',

        },
    });

})