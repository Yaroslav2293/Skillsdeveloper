// Slider1
const swiper = new Swiper('#first-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 3,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '#restaurant-slider_pagination__container',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#restaurant-slider_pagination__btn_next',
    prevEl: '#restaurant-slider_pagination__btn_prev',
  },
});
// slider1

// Slider2
const swiperSlider = new Swiper('#second-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 6,

  // If we need pagination
  pagination: {
    el: '#instagram__slider_swiper_pagination',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#instagram__slider_btn_next',
    prevEl: '#instagram__slider_btn_prev',
  },
});
// Slider2

