let swiperReview = new Swiper(".swiper-review", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-review-next',
        prevEl: '.swiper-review-prev',
    },
});

let swiperBtns = new Swiper(".swiper-btns", {
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 5,
    spaceBetween: 10,
});

let swiperPage = new Swiper(".swiper-page", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiperBtns,
    },
});