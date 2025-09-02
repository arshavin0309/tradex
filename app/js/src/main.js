let swiperReview = new Swiper(".swiper-review", {
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-review-next',
        prevEl: '.swiper-review-prev',
    },

    breakpoints: {
        1201: {
            slidesPerView: 3,
        }
    },
});

let swiperBtns = new Swiper(".swiper-btns", {
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
        1201: {
            slidesPerView: 5,
        },
    },
});

let swiperPage = new Swiper(".swiper-page", {
    spaceBetween: 30,
    thumbs: {
        swiper: swiperBtns,
    },
});