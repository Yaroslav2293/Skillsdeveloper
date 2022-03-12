// menu burger
const button = document.getElementById('burger-btn');
const mainMenu = document.getElementById('header-menu-hidden');

let isHiddenMenu = true;

button.addEventListener('click', toggleMenu)

function toggleMenu() {

  const hiddenClass = 'hidden';

  const iconShown = document.getElementById('icon-shown-btn');
  const iconHidden = document.getElementById('icon-shown-hidden');

  if (isHiddenMenu) {
    mainMenu.classList.remove(hiddenClass)
    iconHidden.classList.remove(hiddenClass)
    iconShown.classList.add(hiddenClass)
  } else {
    mainMenu.classList.add(hiddenClass)
    iconHidden.classList.add(hiddenClass)
    iconShown.classList.remove(hiddenClass)
  }

  isHiddenMenu = !isHiddenMenu;
}
// /menu burger

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

