const swiper = new Swiper('.map-slider',{
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  grabCursor: true,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  breakpoints: {
    
    320: {
      slidesPerView: 1,
      autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
    },
    
    768: {
      slidesPerView: 2,
      autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
    },
    
    992: {
      slidesPerView: 3,
      autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
    }
  }
});