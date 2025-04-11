const swiper = new Swiper('.swiper', {
    loop: true, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    slidesPerView: 1,
    spaceBetween: 30,
})