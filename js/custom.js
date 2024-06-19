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

    $('.main_tab .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_tab  .inner .tab_itm figure')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    $('.main_banner .itm').on('click', function () {
        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on')
    })

    AOS.init();
})