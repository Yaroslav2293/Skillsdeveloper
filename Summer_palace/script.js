// Slider1
const swiper = new Swiper('#first-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
  spaceBetween: 100,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '#pagination-content__slider',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#pagination-slider-btn_next',
    prevEl: '#pagination-slider-btn_prev',
  },
});
// /Slider1