// Slider1
const swiper = new Swiper('#first-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
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
// slider1

// Slider2
const swiperSlider = new Swiper('#second-slider', {
  // Optional parameters
  loop: true,
  speed: 400,
  slidesPerView: 6,

  // If we need pagination
  pagination: {
    el: '#second-slider-pagination',

    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '#second-slider-btn_next',
    prevEl: '#second-slider-btn_prev',
  },
});
// Slider2

