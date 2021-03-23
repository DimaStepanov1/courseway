var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // init: false,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1460: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    }
});