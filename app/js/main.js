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