new Swiper('.image-slider', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  //   dynamicBullets: true,
  // },
  // mousewheel: {
  //   sensitivity: 1,
  // },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true,
  // },
    effect: 'cube',
    flipEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});

new Swiper('.reviews-slider', {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  // mousewheel: {
  //   sensitivity: 1,
  // },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  spped: 1000,

  effect: 'flip',
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },

});
